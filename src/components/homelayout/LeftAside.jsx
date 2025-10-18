import React, { Suspense } from "react";
import Categories from "./Categories";

export default function LeftAside() {
  return (
    <aside className="sticky top-0 col-span-3">
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <Categories />
      </Suspense>
    </aside>
  );
}
