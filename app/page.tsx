import type { Metadata } from "next";
import { Fragment } from "react";
import { Header } from "./components/Header/Header";
import { MainContainer } from "./components/MainContainer/MainContainer";

export const metadata: Metadata = {
  title: "Pokemons | evilUnion",
};

export default function IndexPage() {
  return (
    <Fragment>
      <Header />
      <MainContainer />
    </Fragment>
  );
}
