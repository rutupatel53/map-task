import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Card = ({ image, tag, title, description, onLike, isLiked }) => {
  return (
    <div className="w-72 h-fit items-center flex-none bg-white shadow-md rounded-lg   hover-effect">
      <div className="relative">
        <div className="absolute z-10 top-3 left-2 bg-blue-500 text-white px-2 py-1 rounded-lg text-xs font-semibold">
          {tag}
        </div>
        <div className="flex justify-center rounded-lg">
          <LazyLoadImage
            src={image}
            alt={title}
            effect="blur"
            className="w-72 h-[450px] p-1 object-cover rounded-lg"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 h-36 w-64 ml-4 mb-2 rounded-3xl bg-neutral-600 bg-opacity-50">
          <h2 className="text-lg text-white font-semibold mb-2">{title}</h2>
          <p className="text-sm text-white">{description}</p>
        </div>
        <div className="absolute top-2 w-11 h-11 right-2 p-2 rounded-full">
          <FontAwesomeIcon
            icon={isLiked ? solidHeart : regularHeart}
            onClick={onLike}
            className="cursor-pointer text-white"
            aria-label={isLiked ? "Unlike" : "Like"}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
