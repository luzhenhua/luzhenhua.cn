'use client';

import { useState } from 'react';
import { CliInterface } from '@/components/cli-interface';
import { useRouter } from 'next/navigation';

export default function CliPage() {
  const router = useRouter();

  const handleGuiCommand = () => {
    router.push('/');
  };

  return (
    <CliInterface onGuiCommand={handleGuiCommand} />
  );
}
