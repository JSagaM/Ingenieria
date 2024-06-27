import { useState } from "react";
import "../../index.css";
import { NavLink } from "react-router-dom";

import { DashboardIcon } from "../../assets/icons/DashboardIcon";
import { OverviewIcon } from "../../assets/icons/OverviewIcon";
import { TaskIcon } from "../../assets/icons/TaskIcon";
import { CourseIcon } from "../../assets/icons/CourseIcon";
import { SettingsIcon } from "../../assets/icons/SettingsIcon";
import { LogoutIcon } from "../../assets/icons/LogoutIcon";
import { LogoIcon } from "../../assets/icons/LogoIcon";
import { LogoTextIcon } from "../../assets/icons/LogoTextIcon";
import { HamburgerIcon } from "../../assets/icons/HamburgerIcon";
import { NotificationIcon } from "../../assets/icons/NotificationIcon";
import { XIcon } from "../../assets/icons/XIcon";

export function Sidebar({ username }) {
  const [isOpen, setIsOpen] = useState(false);
  function sidebarButton() {
    setIsOpen(!isOpen);
    console.log(isOpen);
  }

  return (
    <>
      <div className="fixed lg:hidden z-50 w-[100vw] m-auto flex items-center justify-center pt-[20px]">
        <div className="flex items-center justify-between w-[90vw] py-[20px] rounded-xl bg-custom-blue">
          <button className="mx-4" onClick={sidebarButton}>
            <HamburgerIcon />
          </button>

          <LogoIcon width="40px" height="40px" />

          <button className="mx-4">
            <NotificationIcon />
          </button>
        </div>
      </div>

      <aside
        className={`${isOpen ? "left-0" : "left-[-30rem]"
          } bg-custom-blue w-[300px] fixed top-0 left-0 h-full grid gap-[30px] justify-center content-around font-main z-50 transition-all duration-500 lg:left-0`}
      >
        <button
          className="absolute top-0 left-[19rem] lg:hidden"
          onClick={sidebarButton}
        >
          <XIcon />
        </button>

        <div className="flex flex-col gap-[40px]">
          <div className="flex justify-center items-center gap-4">
            <LogoIcon width="60px" height="60px" />
            <LogoTextIcon />
          </div>
          <div className="flex bg-white/10 rounded-[50px] p-[10px] gap-[20px] items-center">
            <img
              className="rounded-[50%] w-[5rem] h-[5rem]"
              src="https://unavatar.io/freddy74"
              alt="User Profile"
            />
            <div>
              <h3 className="font-medium font-secondary text-xl text-white">
                {username}
              </h3>
              <NavLink to="/profile" className="text-sm text-white/60">
                View Profile
              </NavLink>
            </div>
          </div>

          <div className="flex flex-col text-white font-bold gap-[20px]">
            <NavLink
              to="/"
              aria-current="page"
              className="flex gap-[10px] px-[20px] py-[10px] hover:bg-white/10 hover:rounded-[10px]"
            >
              <DashboardIcon />
              Dashboard
            </NavLink>

            <NavLink
              to="/overview"
              className="flex gap-[10px] px-[20px] py-[10px] hover:bg-white/10 hover:rounded-[10px]"
              href=""
            >
              <OverviewIcon />
              Overview
            </NavLink>

            <NavLink
              to="/events"
              className="flex gap-[10px] px-[20px] py-[10px] hover:bg-white/10 hover:rounded-[10px]"
            >
              <TaskIcon />
              Tasks
            </NavLink>

            <a
              className="flex gap-[10px] px-[20px] py-[10px] hover:bg-white/10 hover:rounded-[10px]"
              href=""
            >
              <CourseIcon />
              Courses
            </a>

            <NavLink
              to="/form"
              className="flex gap-[10px] px-[20px] py-[10px] hover:bg-white/10 hover:rounded-[10px]"
            >
              <SettingsIcon />
              Settings
            </NavLink>
          </div>
        </div>

        <div className="flex flex-col gap-[30px] text-white font-bold ">
          <div className="border-solid border-[1px] border-white border-opacity-75 rounded-full w-full h-auto"></div>

          <a
            className="flex gap-[10px] px-[20px] py-[10px] hover:bg-white/10 hover:rounded-[10px]"
            href=""
          >
            <LogoutIcon />
            Log out
          </a>
        </div>
      </aside>
    </>
  );
}
