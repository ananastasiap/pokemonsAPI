"use client";
// import Image from "next/image";
import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
// import { Nav } from "./components/Nav";
import { Raleway } from "next/font/google";

import "./styles/globals.scss";
import { MainContainer } from "./components/MainContainer/MainContainer";

const raleway = Raleway({
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
        <body className={raleway.className}>
          <MainContainer />
        </body>
      </html>
    </StoreProvider>
  );
}
