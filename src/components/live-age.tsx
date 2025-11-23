'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from "@/components/language-provider";

export function LiveAge() {
  const [years, setYears] = useState<string>('0.000000000');
  const t = useTranslations();

  useEffect(() => {
    const calculateYears = () => {
      // 生日：2005年6月9日上午10:00 (北京时间 UTC+8)
      const birthDate = new Date('2005-06-09T10:00:00+08:00');

      // Current time
      const now = new Date();

      // Calculate age in milliseconds, then convert to years
      // 1 year = 365.25 days (accounting for leap years)
      // 1 day = 24 hours, 1 hour = 60 minutes, 1 minute = 60 seconds, 1 second = 1000 milliseconds
      const ageInYears = (now.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25);

      return ageInYears.toFixed(9);
    };

    // Set initial value
    setYears(calculateYears());

    // Update every 50ms for smoother animation (20 times per second)
    const interval = setInterval(() => {
      setYears(calculateYears());
    }, 50);

    // Cleanup interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  return <span>{t("liveAgeText", { years })}</span>;
}
