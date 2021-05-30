import React, { ReactNode } from "react";
import { BrowserRouter as Router } from "react-router-dom";

export type RouterProviderProps = {
  children: ReactNode
}

export const RouterProvider = ({ children }: RouterProviderProps) => {
  return (
    <Router>
      {children}
    </Router>
  )
}
 
