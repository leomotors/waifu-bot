import { NextPage } from "next";

export type WaifuPage<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
  requiredAuth?: boolean;
};
