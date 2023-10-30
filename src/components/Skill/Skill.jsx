import { Figma } from "./icon/Figma";
import { PhotoShop } from "./icon/PhotoShop";
import React from "./icon/React";
import { Tailwind } from "./icon/Tailwind";

export default function Skill() {
  return (
    <div id="skill">
      <div className="relative container mx-auto p-4 text-white text-center pt-20 md:px-[200px] xl:px-[500px]">
        <h1 className="font-bold text-2xl uppercase mb-5 lg:text-3xl">
          My Skills
        </h1>
        <div className="text-5xl grid grid-cols-2 gap-5 border-2 border-white/50 rounded-xl p-5">
          <div className="text-center flex flex-col justify-center items-center ">
            <React />
            <p className="text-base mt-3 md:text-lg">React JS</p>
          </div>
          <div className="text-center flex flex-col justify-center items-center ">
            <Tailwind />
            <p className="text-base mt-3 md:text-lg">Tailwind</p>
          </div>
          <div className="text-center flex flex-col justify-center items-center">
            <PhotoShop />
            <p className="text-base mt-3 md:text-lg">Photoshop</p>
          </div>
          <div className="text-center flex flex-col justify-center items-center">
            <Figma />
            <p className="text-base mt-3 md:text-lg">Figma</p>
          </div>
        </div>
      </div>
    </div>
  );
}