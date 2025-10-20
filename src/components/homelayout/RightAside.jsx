import { useAuth } from "../../contexts/AuthContext";
import FindUs from "./FindUs";
import Qzone from "./Qzone";
import SocialLogin from "./SocialLogin";

export default function RightAside() {
  const { user } = useAuth();

  return (
    <aside className="sticky top-0 col-span-3 space-y-8">
      {!user && <SocialLogin />}
      <FindUs />
      <Qzone />
    </aside>
  );
}
