import Image from "next/image";
import React from "react";

const Content = () => {
  return (
    <section className="flex flex-col">
      <div className="p-0 container max-container w-full pb-24">
        <div className="flex items-center max-container relative w-full">
          <Image
            src="/ilust-3.png"
            alt="boat"
            width={1440}
            height={580}
            className="w-full object-cover object-center 2xl:rounded-3xl"
          />
        </div>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10 mt-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            <span className="text-green-500">Embark </span> on a Journey
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            With a dedicated team of talented developers, artists, and
            storytellers, we bring your gaming visions to life. Explore our
            provided services section below to discover how we can help you reach your
            audience and elevate your game to new heights.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Content;
