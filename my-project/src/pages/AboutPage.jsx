import React from "react";
import NavBar from "../components/ui/navigation/NavBar";
import Pagination from "../components/ui/aboutcomponent/Pagination";
import { useState } from "react";
import InfoCart from "../components/ui/aboutcomponent/InfoCart";
import Timeline from "../components/ui/aboutcomponent/Timeline";
import Technologies from "../components/ui/aboutcomponent/Technologies";

const AboutPage = () => {
  const [image, setImage] = useState(0);

  const handleImage = (index) => {
    setImage(index);
  };

  const renderImage = () => {
  }

  const renderText = () => {
  };

  return (
    <>
      <div className="bg-white flex h-max">
        <div className="overflow-hidden h-16  min-h-screen">
          <NavBar />
        </div>
        <div className="w-full">
          <div>
            <div className="relative">
              <img
                src="src\assets\pexel3.jpg"
                alt="Background"
                className="w-full h-screen object-cover"
              />
              <div className="absolute inset-0 flex justify-center items-center">
                <h1 className="text-5xl font-bold font-serif text-white">
                  About
                </h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-4xl mt-10 mb-5 font-semibold font-serif text-zinc-800">
              Who are we?
            </h1>
            <div className="mx-2 sm:mx-0 flex justify-center items-center">
              <h2>
                We provide IoT-powered devices, transforming the way you
                interact with technology. We embarked on this journey to create
                something meaningful.
              </h2>
            </div>
            <h1 className="text-3xl mt-10 mb-5 font-semibold font-serif text-zinc-800">
              Our Mission
            </h1>

            <Timeline />

            <Technologies />
            <div className="w-3/6 flex justify-center text-center "></div>
            <div className="rounded-lg flex-col justify-center">
              <div className="hero-content flex-col lg:flex-row-reverse">
                {renderImage()}
                <div className="">{renderText()}</div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
