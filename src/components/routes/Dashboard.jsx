import React from "react";
import { Sidebar } from "../navigation/Sidebar";
import { Welcome } from "../dashboard/Welcome";
import { Slider } from "../dashboard/Slider";
import { Calendar } from "../dashboard/Calendar";
import { GeneralStats } from "../dashboard/GeneralStats";
import { EventCard } from "../events/EventCard";
import "../../index.css";

export function Dashboard() {
  return (
    <div className="flex justify-end text-custom-dark">
      <Sidebar username="Freddy Garro" />

      <section className="grid grid-cols-1 xl:grid-cols-4 lg:ml-[20rem]  mx-4 xl:gap-6 max-lg:mt-10">
        <div className="grid mt-5 max-lg:mt-20 col-span-3 lg:col-span-3">
          <Welcome username="Freddy" />

          <section className="w-full mt-5 overflow-hidden">
            <h3 className="text-2xl font-main font-bold mb-3 mt-5">Courses</h3>
            <Slider />
          </section>

          <section className="h-fit mt-5">
            <h3 className="text-2xl font-main font-bold mb-3 mt-5">
              For Today
            </h3>
            <div className="grid gap-4 minmax-200 mb-5">
              <EventCard
                taskImg="https://kinsta.com/wp-content/uploads/2022/01/tailwind-css.jpg"
                eventName="React’s homework"
                description="Lorem ipsum dolor sit amet consectetur. Ut euismod venenatis nisi feugiat eleifend ultrices purus penatibus nibh."
                category="Web Development"
              />
              <EventCard
                taskImg="https://kinsta.com/wp-content/uploads/2022/01/tailwind-css.jpg"
                eventName="React’s homework"
                description="Lorem ipsum dolor sit amet consectetur. Ut euismod venenatis nisi feugiat eleifend ultrices purus penatibus nibh."
                category="Web Development"
              />
            </div>
          </section>
        </div>

        <div className="flex flex-col mt-5 gap-4 col-span-4 xl:col-auto">
          <Calendar />
          <GeneralStats />
        </div>
      </section>
    </div>
  );
}
