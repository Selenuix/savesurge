'use client';

import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

interface ClientOnlyProps {
  children: ReactNode;
}

export const ClientOnlyComponent = ({ children }: ClientOnlyProps) => {
  // Dynamically import the child component
  const DynamicComponent = dynamic(() => Promise.resolve(() => children), {
    ssr: false,
  });

  return <DynamicComponent />;
};
