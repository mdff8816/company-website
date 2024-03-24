import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="flex justify-center px-10 py-10 mb-20 border-2 border-gray-200 bg-green-50">
      <div className="max-w-lg">
        <h1 className="mb-5 text-center text-3xl font-bold">
          Get to know our <span className="text-green-500">Company</span>
        </h1>
        <div className="text-justify font-semibold text-gray-600">
          <p>
            Welcome to Sarkem Works, a pioneering game development studio
            nestled in the heart of Pasar Kembang, Yogyakarta. At Sarkem Works,
            we're more than just creators of games; we're architects of
            immersive experiences, storytellers crafting digital worlds that
            captivate and inspire.
          </p>
          <p className="mt-5">
            Driven by a passion for innovation and a relentless pursuit of
            excellence, our team at Sarkem Works is dedicated to pushing the
            boundaries of what's possible in gaming. From breathtaking visuals
            to engaging gameplay mechanics, we strive to deliver unforgettable
            gaming experiences that resonate with players around the globe.
          </p>
          <p className="mt-5">
            At Sarkem Works, our culture is built on a foundation of creativity,
            collaboration, and inclusivity. We believe in fostering a supportive
            environment where every team member is empowered to unleash their
            creativity and contribute their unique talents to our projects.
          </p>
          <p className="mt-5">
            Collaboration is at the core of everything we do. We believe that
            the best ideas emerge when diverse perspectives come together, so we
            encourage open communication and teamwork at every level of the
            organization.
          </p>
          <p className="mt-5">
            Inclusivity is not just a buzzword for us; it's a guiding principle.
            We celebrate diversity in all its forms and strive to create a
            workplace where everyone feels valued, respected, and empowered to
            be their authentic selves.
          </p>
          <p className="mt-5">
            We're passionate about what we do, and that passion extends beyond
            the walls of our studio. We're active members of the gaming
            community, always eager to share our knowledge, support fellow
            developers, and inspire the next generation of creators.
          </p>
          <p className="mt-5">
            At Sarkem Works, we're not just making games; we're building a
            legacy. Join us on our journey as we continue to push the boundaries
            of gaming and create experiences that leave a lasting impact on
            players worldwide.
          </p>{" "}
        </div>
      </div>
    </div>
  );
};

export default About;
