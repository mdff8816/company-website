import RandomUserCarousel from "@/components/RandomUsers";
import React from "react";

const Teams = () => {
  return (
    <div className="flex justify-center px-10 py-10 mb-20 border-2 border-gray-200 bg-green-50">
      <div className="mb-10">
        <h1 className="mb-5 text-center text-3xl font-bold">
         Meet our <span className="text-green-500">Team</span>
        </h1>
        <RandomUserCarousel />
      </div>
    </div>
  );
};

export default Teams;
