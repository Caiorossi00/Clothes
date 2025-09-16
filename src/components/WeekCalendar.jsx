import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/WeekCalendar.scss";

const WeekCalendar = () => {
  const navigate = useNavigate();

  return (
    <div className="week-calendar" onClick={() => navigate("/dias")}>
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.4YftmZ3itwAEZq6lKa0nLwHaHa%3Fpid%3DApi&f=1&ipt=417d5925daa6d97129625a1c4f7cf52c6faafa128571ca1eb73e073793c67c79"
        alt="Ícone"
        className="calendar-icon"
      />
    </div>
  );
};

export default WeekCalendar;
