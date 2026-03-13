"use client";

import { Text } from "@once-ui-system/core";
import { useEffect, useState } from "react";

export default function TimeDisplay() {
  const [time, setTime] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        minute: "2-digit",
      });
      setTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return <span>Loading...</span>;
  }

  return (
    <Text onBackground="neutral-weak" variant="code-default-s">
      {time}
    </Text>
  );
}
