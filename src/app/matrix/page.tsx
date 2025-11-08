'use client';

import { MatrixRain } from "@/components/matrix-rain";
import { ForceDarkMode } from "@/components/force-dark-mode";
import { useState } from "react";

export default function MatrixPage() {
  const [isReady, setIsReady] = useState(false);

  return (
    <>
      <ForceDarkMode onReady={() => setIsReady(true)} />
      <div
        className={`transition-opacity duration-500 ${
          isReady ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <MatrixRain />
      </div>
    </>
  );
}
