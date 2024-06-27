import myImage from "../../assets/imgs/course-placeholder.png";
import "../../index.css";
// import "cally";
import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

export function Calendar() {
  return (
    <>
      <div className="font-main rounded-lg bg-white border-solid border-custom-blue border-[0.5px] border-opacity-50">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar />
        </LocalizationProvider>
      </div>
    </>
  );
}
