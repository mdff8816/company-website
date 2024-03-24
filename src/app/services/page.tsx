import { SERVICES } from "@/constants";

const Services = () => {
  return (
    <div className="relative w-full flex justify-center  bg-green-50 border-2 border-gray-200-">
      <div className="z-20 flex w-full flex-col lg:w-[60%] items-center">
        <div className="relative">
          <h1 className="text-3xl font-bold mt-5">
            
            Our <span className="text-green-500">Services</span>{" "}
          </h1>
        </div>
        <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
          {SERVICES.map((services) => (
            <FeatureItem
              key={services.title}
              title={services.title}
              icon={services.icon}
              description={services.description}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

type ServiceItem = {
  title: string;
  icon: string;
  description: string;
};

const FeatureItem = ({ title, description }: ServiceItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-7 bg-green-500 "></div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize transition duration-300 ease-in-out hover:bg-green-500">
        {title}
      </h2>
      <p className="regular-16 mt-5 mb-5 bg-green-50 text-gray-950 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  );
};

export default Services;
