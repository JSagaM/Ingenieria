import React from "react";
import { Sidebar } from "../navigation/Sidebar";
import { EventCard } from "../events/EventCard";
import { Search } from "../navigation/Search";
import { Filter } from "../navigation/Filter";
import "../../index.css";

export function Events() {
  return (
    <>
      <Sidebar username="Freddy Garro" />
      <section className="text-custom-dark grid mx-4 lg:ml-[20rem]">
        <div className="flex flex-col gap-[20px]">
          <h1 className="text-custom-dark font-secondary font-black text-[40px] max-lg:mt-28">
            My events
          </h1>
          <div className="flex justify-between items-center">
            <Filter />
            <Search />
          </div>
          <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-[20px] w-full">
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
        </div>
      </section>
    </>
  );
}
