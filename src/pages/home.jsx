import React, { useState, useEffect, useRef } from "react";
import Card from "../Component/card";
import CardSkeleton from "../Component/CardSkeleton";
import sampleData from "../data";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [likedCards, setLikedCards] = useState({});
  const [searchText, setSearchText] = useState("");
  const [filterTag, setFilterTag] = useState("All");
  const scrollContainerRef = useRef(null);
  const prevLikedCardsRef = useRef({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleWheel = (event) => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft += event.deltaY;
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("wheel", handleWheel);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  useEffect(() => {
    Object.keys(likedCards).forEach((id) => {
      if (likedCards[id] && !prevLikedCardsRef.current[id]) {
        alert("Glad You Like The Place!");
      } else if (!likedCards[id] && prevLikedCardsRef.current[id]) {
        alert("Removed from your like.");
      }
    });
    prevLikedCardsRef.current = likedCards;
  }, [likedCards]);

  const handleLike = (id) => {
    setLikedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredAndSortedData = sampleData
    .filter((item) => {
      if (filterTag !== "All" && item.tag !== filterTag) return false;
      return (
        item.title.toLowerCase().includes(searchText.toLowerCase()) ||
        item.description.toLowerCase().includes(searchText.toLowerCase())
      );
    })
    .sort((a, b) => {
      if (likedCards[b.id] === likedCards[a.id]) return 0;
      return likedCards[b.id] ? 1 : -1;
    });

  return (
    <div className="p-8 mt-14 h-auto w-auto overflow-visible">
      <h1 className="text-xl md:text-3xl text-center font-bold mb-4">
        Horizontal Scrollable Card List
      </h1>
      <div className="mb-4 flex justify-center items-center flex-wrap">
        <input
          type="text"
          placeholder="Search By Title"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="p-2 w-full md:w-80 border border-gray-300 rounded-lg mb-2 md:mb-0 mr-0 md:mr-2"
        />
        <label className="text-xl text-center text-black mr-2">
          Sort By Season's:
        </label>
        <select
          value={filterTag}
          onChange={(e) => setFilterTag(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg w-full md:w-36"
        >
          <option value="All">All</option>
          <option value="Winter">Winter</option>
          <option value="Spring">Spring</option>
          <option value="Summer">Summer</option>
          <option value="Autumn">Autumn</option>
        </select>
      </div>
      <div
        ref={scrollContainerRef}
        className="flex items-center gap-8 h-full w-full md:w-[calc(100vw - 32px)] overflow-x-auto"
      >
        {loading
          ? [...Array(20)].map((_, index) => <CardSkeleton key={index} />)
          : filteredAndSortedData.map((item) => (
              <Card
                key={item.id}
                {...item}
                onLike={() => handleLike(item.id)}
                isLiked={!!likedCards[item.id]}
              />
            ))}
      </div>
    </div>
  );
};

export default Home;
