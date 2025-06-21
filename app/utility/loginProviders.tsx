// app/ClientProviders.tsx
'use client';

import { ReactNode } from "react";
import { HeroUIProvider } from "@heroui/react";
import ReduxProvider from "../redux/provider";


export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <HeroUIProvider>
      <ReduxProvider>
          {children}
      </ReduxProvider>
    </HeroUIProvider>
  );
}
