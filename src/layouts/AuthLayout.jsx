import { Outlet } from "react-router";
import AuthHeader from "../components/authlayout/AuthHeader";
import Container from "../components/Container";

export default function AuthenticationLayout() {
  return (
    <div className="bg-base-200 min-h-dvh">
      <Container styles="grid grid-rows-[auto_1fr] h-full min-h-dvh">
        <AuthHeader />
        <Main>
          <Outlet />
        </Main>
      </Container>
    </div>
  );
}

function Main({ children }) {
  return <main className="flex items-center justify-center">{children}</main>;
}
