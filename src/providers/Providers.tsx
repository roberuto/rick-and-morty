import React, { ReactNode } from "react";

import { RouterProvider } from "./RouterProvider";
import { QueryProvider } from "./QueryProvider";
import { ClientProvider } from "./ClientProvider";

export type ProvidersProps = {
  children: ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <RouterProvider>
      <QueryProvider>
        <ClientProvider>{children}</ClientProvider>
      </QueryProvider>
    </RouterProvider>
  );
};
