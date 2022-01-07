import React from "react";
import { useTheme } from "../context/ThemeContext";

const notifications = [
  {
    id: 1,
    message: "From Instagram",
  },
  {
    id: 2,
    message: "From LinkedIn",
  },
  {
    id: 3,
    message: "From Spotify",
  },
];

function NotificationDetails() {
  const theme = useTheme();
  return (
    <div className={"phone " + theme}>
      <div className={"details " + theme}>
        {notifications.map((n) => (
          <h2 key={n.id}>{n.message}</h2>
        ))}
      </div>
    </div>
  );
}

export default NotificationDetails;
