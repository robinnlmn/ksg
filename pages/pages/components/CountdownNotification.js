import React, { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { utcToZonedTime, format } from "date-fns-tz";

function CountdownNotification({ releaseTime }) {
  const [timeAgo, setTimeAgo] = useState(calculateTimeAgo(releaseTime));

  function calculateTimeAgo(targetTime) {
    const timeZone = "Europe/Berlin"; // Replace with your desired time zone

    const currentTime = new Date();
    const targetDateTime = utcToZonedTime(new Date(targetTime), timeZone);

    const timeDifference = currentTime - targetDateTime;

    if (timeDifference < 0) {
      return "soon";
    } else if (timeDifference < 60000) {
      return "just now";
    } else {
      return formatDistanceToNow(targetDateTime, { addSuffix: true });
    }
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeAgo(calculateTimeAgo(releaseTime));
    }, 60000); // Update every minute

    return () => clearInterval(intervalId);
  }, [releaseTime]);

  return <p>{timeAgo}</p>;
}

export default CountdownNotification;
