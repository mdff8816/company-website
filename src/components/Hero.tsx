import Image from "next/image";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row mb-5">
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-88">Crafting Your <span  className="bg-green-500">Gaming</span> Fantasies</h1>
      </div>
              <Image
                src="/cover-2.png"
                alt="close"
                width={1440}
                height={580}
                className="rounded-lg transition duration-300 ease-in-out hover:scale-110"
              />

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flex justify-betweenetween">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
