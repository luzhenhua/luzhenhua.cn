'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from "@/components/language-provider";

export function LiveAge() {
  const [years, setYears] = useState<string>('0.000000000');
  const t = useTranslations();

  useEffect(() => {
    const calculateYears = () => {
      const birthDate = new Date('2005-06-09T10:00:00+08:00');

      const now = new Date();
      const ageInYears = (now.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
      return ageInYears.toFixed(9);
    };

    setYears(calculateYears());

    const interval = window.setInterval(() => {
      setYears(calculateYears());
    }, 50);

    return () => window.clearInterval(interval);
  }, []);

  return <span>{t("liveAgeText", { years })}</span>;
}
