import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import pdf_schedule from '../images/schedule.pdf';


const Schedule = () => {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-[#d83616] font-bold md:text-4xl text-3xl mt-5">
          Tentative Schedule
        </h1>
      </div>
      <div className="space-y-3">
      <div className="flex justify-center md:col-start-1 md:col-end-2 md:place-self-center ">
        <p>December 2022</p>
        </div></div>
    <div className="space-y-3">
      <div className="flex justify-center md:col-start-1 md:col-end-2 md:place-self-center ">
      <iframe src={pdf_schedule} width="100%" height="500px">
      </iframe>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
