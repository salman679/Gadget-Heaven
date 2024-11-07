/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function Categories({ categories }) {
  return (
    <div className="md:col-span-1">
      <ul className="p-5 rounded-2xl flex flex-col gap-5 bg-white font-medium text-zinc-900 text-opacity-60 text-sm">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `${
              isActive
                ? "px-5 py-2 rounded-full font-extrabold text-white bg-purple-600 cursor-pointer"
                : "px-5 py-2 rounded-full bg-zinc-900 bg-opacity-5 cursor-pointer"
            }`
          }
        >
          All Products
        </NavLink>
        {categories.map((category) => (
          <NavLink
            key={category.category_name}
            to={`/category/${category.category_name}`}
            className={({ isActive }) =>
              `${
                isActive
                  ? "px-5 py-2 rounded-full font-extrabold text-white bg-purple-600 cursor-pointer"
                  : "px-5 py-2 rounded-full bg-zinc-900 bg-opacity-5 cursor-pointer"
              }`
            }
          >
            {category.category_name}
          </NavLink>
        ))}
      </ul>
    </div>
  );
}

Categories.propTypes = {
  category: PropTypes.object,
};

export default Categories;
