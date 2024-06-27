import React from "react";
import { Sidebar } from "../navigation/Sidebar";
import { MainInfo } from "../profile/MainInfo";
import { PersonalInfo } from "../profile/PersonalInfo";
import { AdditionalInfo } from "../profile/AdditionalInfo";
import "../../index.css";

export function Profile() {
  return (
    <div className="flex justify-end">
      <Sidebar username="Freddy Garro" />
      <div className="flex flex-col w-[80vw] max-sm:w-[100vw] max-md:w-[100vw] max-lg:w-[100vw] p-[40px] max-sm:p-[20px] gap-[20px] items-center justify-center mt-[80px]">
        <MainInfo
          username="Freddy Garro Masis"
          profileImg="https://unavatar.io/freddy74"
          location="Esparza, Puntarenas"
          occupation="Student"
        />
        <PersonalInfo
          firstName="Freddy"
          lastName="Garro"
          role="Student"
          email="freddy.garro@ucr.ac.cr"
        />
        <AdditionalInfo
          sports="Baloncesto, Gym, Fútbol"
          diseases="No hay afectaciones"
          hours="8 horas"
        />
      </div>
    </div>
  );
}

