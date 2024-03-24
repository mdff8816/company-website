import { FEATURES } from '@/constants'
import Link from 'next/link'
import React from 'react'

const Services = () => {
  return (
<section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center py-5 mb-20 ">
  <div className="max-container padding-container relative w-full flex justify-center">
    <div className="z-20 flex w-full flex-col lg:w-[60%] items-center">
      <div className='relative'>
      <Link href="/services">       
       <h2 className="bold-40 lg:bold-64 transition duration-300 ease-in-out hover:bg-green-500">Our <span className="">Services</span></h2>
       </Link>
      </div>
      <Link href="/services">      
      <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
        {FEATURES.map((feature) => (
          <FeatureItem 
            key={feature.title}
            title={feature.title} 
            icon={feature.icon}
            description={feature.description}
              />
            ))}
          </ul>
          </Link>
        </div>
      </div>
    </section>
  )
}

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
}

const FeatureItem = ({ title,  }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-7 bg-green-500">
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
        {title}
      </h2>
    </li>
  )
}

export default Services