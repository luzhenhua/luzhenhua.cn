'use client';

import { CliInterface } from '@/components/cli-interface';
import { useRouter } from 'next/navigation';
import { ForceDarkMode } from '@/components/force-dark-mode';

export default function CliPage() {
  const router = useRouter();

  const handleGuiCommand = () => {
    router.push('/');
  };

  return (
    <>
      <ForceDarkMode />
      <CliInterface onGuiCommand={handleGuiCommand} />
    </>
  );
}
