import { Suspense } from "react";
import Categories from "./Categories";

export default function LeftAside() {
  return (
    <aside className="sticky top-0 col-span-3">
      <Suspense
        fallback={<span className="loading loading-ring loading-xl"></span>}
      >
        <Categories />
      </Suspense>
    </aside>
  );
}
