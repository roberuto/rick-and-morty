import { createContext } from "react";
import { AxiosInstance } from "axios";

export type ApiClient = AxiosInstance;

export const ClientContext = createContext<undefined | ApiClient>(undefined);
