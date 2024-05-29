"use client";
import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import { Raleway } from "next/font/google";

import "./styles/globals.scss";

export const raleway = Raleway({
  subsets: ["cyrillic", "latin"],
  weight: ["500", "600", "700"],
});
interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={raleway.className}>{children}</body>
      </html>
    </StoreProvider>
  );
}
