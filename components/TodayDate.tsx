// components/TodayDate.tsx
"use client";

import { useEffect, useState } from "react";

export default function TodayDate() {
  const [date, setDate] = useState<Date | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setDate(new Date()), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!date) return <span className="invisible">0 Month 0000</span>; // avoids layout shift + hydration mismatch

  return (
    <time dateTime={date.toISOString().slice(0, 10)}>
      {date.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
    </time>
  );
}
