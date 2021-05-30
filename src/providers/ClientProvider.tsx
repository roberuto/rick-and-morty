import React, { ReactNode } from "react";
import axios from "axios"

import { ClientContextController } from 'context/client/ClientContextController'
 
export type ClientProviderProps = {
  children: ReactNode
}

const client = axios.create({
  baseURL: process.env.REACT_APP_URL
})

export const ClientProvider = ({ children }: ClientProviderProps) => {
  return (
    <ClientContextController client={client}>
      {children}
    </ClientContextController>
  )
}