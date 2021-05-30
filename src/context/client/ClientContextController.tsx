import React, { ReactNode } from 'react'

import { ClientContext } from './ClientContext'
import type { ApiClient } from './ClientContext'

export type ClientContextControllerProps = {
  client: ApiClient
  children: ReactNode
}

export const ClientContextController = ({ client, children }: ClientContextControllerProps) => {
  return <ClientContext.Provider value={client}>{children}</ClientContext.Provider>
}