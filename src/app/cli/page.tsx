'use client';

import { CliInterface } from '@/components/cli-interface';
import { useRouter } from 'next/navigation';
import { ForceDarkMode } from '@/components/force-dark-mode';
import { useState } from 'react';

export default function CliPage() {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  const handleGuiCommand = () => {
    router.push('/');
  };

  return (
    <>
      <ForceDarkMode onReady={() => setIsReady(true)} />
      <div
        className={`transition-opacity duration-500 ${
          isReady ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <CliInterface onGuiCommand={handleGuiCommand} />
      </div>
    </>
  );
}
