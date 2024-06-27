import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import { Dashboard } from "./components/routes/Dashboard.jsx";
import { Profile } from "./components/routes/Profile.jsx";
import { Events } from "./components/routes/Events.jsx";
import { Overview } from "./components/routes/Overview.jsx";
import { NewDashboard } from "./components/routes/NewDasboard.jsx";
import { Form } from "./components/routes/Form.jsx";

import { EventDetailsPopup } from "./components/events/EventDetailsPopup.jsx";


export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/events" element={<Events />} />
        <Route
          path="/event"
          element={
            <EventDetailsPopup
              eventName="React Homework"
              eventImg="https://kinsta.com/wp-content/uploads/2022/01/tailwind-css.jpg"
              course="Web Development"
              date="May 21, 2024"
              category="Homework"
              status="Active"
              description="Lorem ipsum dolor sit amet consectetur. Ut euismod venenatis nisi feugiat eleifend ultrices purus penatibus nibh."
            />
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  );
}
