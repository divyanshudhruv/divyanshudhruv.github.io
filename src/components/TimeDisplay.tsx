"use client";

import { Text } from "@once-ui-system/core";
import { useEffect, useState } from "react";

export default function TimeDisplay() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        minute: "2-digit",
      });
      const offset = `${Math.abs((now.getTimezoneOffset() + 5.5 * 60) / 60)} ${Math.abs((now.getTimezoneOffset() + 5.5 * 60) / 60) > 1 ? "HOURS" : "HOUR"} ${(now.getTimezoneOffset() + 5.5 * 60) % 60 > 0 ? "BEHIND" : "AHEAD"}`;

      setTime(`${timeString}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span>
      {time}
      <Text onBackground="neutral-weak" marginX="8">
        //
        {`${Math.abs((new Date().getTimezoneOffset() + 5.5 * 60) / 60)} ${Math.abs((new Date().getTimezoneOffset() + 5.5 * 60) / 60) > 1 ? "HOURS" : "HOUR"} ${(new Date().getTimezoneOffset() + 5.5 * 60) % 60 > 0 ? "BEHIND" : "AHEAD"}`}
      </Text>{" "}
    </span>
  );
}
