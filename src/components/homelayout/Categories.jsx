import { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("../categories.json").then((res) => res.json());

export default function Categories() {
  const categories = use(categoryPromise);
  return (
    <div>
      <h2 className="mb-3 font-bold">All Category({categories.length})</h2>
      <div className="flex flex-col gap-2">
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}

function Category({ category }) {
  return (
    <NavLink
      to={`/category/${category.id}`}
      className="btn hover:bg-base-300 bg-base-100 text-accent border-0 font-semibold"
    >
      {category.name}
    </NavLink>
  );
}
