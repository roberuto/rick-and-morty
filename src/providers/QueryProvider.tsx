import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from 'react-query'
 
export type QueryProviderProps = {
  children: ReactNode
}

const queryClient = new QueryClient()

export const QueryProvider = ({ children }: QueryProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}