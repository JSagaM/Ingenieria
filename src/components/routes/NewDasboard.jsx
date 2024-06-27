import React from "react";
import { Sidebar } from "../navigation/Sidebar";
import { Welcome } from "../dashboard/Welcome";
import { Slider } from "../dashboard/Slider";
import { HorizontalCard } from "../dashboard/HorizontalCard";
import { Calendar } from "../dashboard/Calendar";
import { GeneralStats } from "../dashboard/GeneralStats";
import { BasicDateCalendar } from "../dashboard/BasicDateCalendar";

import "../../index.css";

export function NewDashboard() {
    return (
        <div className="flex justify-end">
            <Sidebar username="Freddy Garro" />
            <div className="flex flex-col md:w-[75%] w-[100vw] p-[40px] gap-[20px] items-center justify-center">
                <section className="flex justify-between gap-[40px]">
                    <Welcome username="Freddy" />
                    <BasicDateCalendar />
                </section>
            </div>
        </div>
    );
}
