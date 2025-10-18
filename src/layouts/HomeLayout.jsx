import { Outlet } from "react-router";

import Container from "../components/Container";
import Footer from "../components/Footer";
import HomeHeader from "../components/homelayout/HomeHeader";
import LeftAside from "../components/homelayout/LeftAside";
import RightAside from "../components/homelayout/RightAside";

export default function HomeLayout() {
  return (
    <div className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
      <HomeHeader />
      <Main>
        <LeftAside />
        <Outlet />
        <RightAside />
      </Main>
      <Footer />
    </div>
  );
}

function Main({ children }) {
  return (
    <main>
      <Container styles="grid grid-cols-12 gap-4 items-start">
        {children}
      </Container>
    </main>
  );
}
