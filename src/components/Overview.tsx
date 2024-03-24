import Image from "next/image";

const Overview = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <Image
          src="/ilust-1-2.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-2xl "
        />
        <Image
          src="/ilust-2-2.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-2xl"
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-600 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            Immerse Yourself in <strong>Innovation</strong>
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Welcome to Sarkem Works, where passion meets pixels! As a dedicated
            game developer nestled in the vibrant hub of{" "}
            <span className="text-black font-bold">
              {" "}
              Pasar Kembang, Yogyakarta{" "}
            </span>
            , we breathe life into your gaming dreams. Dive into our digital
            realm and explore the boundless possibilities we offer to redefine
            your gaming experience.
          </p>

          <Image
            src="/quote.svg"
            alt="quote2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
};

export default Overview;
