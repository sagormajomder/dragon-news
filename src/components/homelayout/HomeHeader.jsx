import Container from "../Container";
import HeaderLogo from "../HeaderLogo";
import Navbar from "../Navbar";
import LatestNews from "./LatestNews";

export default function HomeHeader() {
  return (
    <header>
      <Container>
        <HeaderLogo />
        <LatestNews />
        <Navbar />
      </Container>
    </header>
  );
}
