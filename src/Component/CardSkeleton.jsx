import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardSkeleton = () => {
  return (
    <div className="w-72 h-fit items-center p-1 flex-none bg-white shadow-md rounded-lg ">
      <div className="relative">
        <Skeleton
          className="absolute z-10 top-6  left-2 bg-blue-500 text-white px-2 py-1 rounded-lg text-xs font-semibold"
          width={80}
          height={16}
        />

        <Skeleton
          className="w-72  p-2 object-cover rounded-lg"
          width="100%"
          height={450}
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 h-36 w-64 ml-4 mb-2 rounded-3xl bg-neutral-600 bg-opacity-50">
          <Skeleton width="80%" height={20} />
          <Skeleton width="60%" height={20} />
          <Skeleton width="40%" height={20} />
        </div>
        <div className="absolute top-4 w-11 h-11 right-2 p-2 rounded-full">
          <Skeleton circle={true} width={32} height={32} />
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
