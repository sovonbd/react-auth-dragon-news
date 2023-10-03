import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h2 className="text-2xl">All Category</h2>
      {categories.map((category) => (
        <Link
          key={category.id}
          className="block pl-10 text-xl font-semibold py-3 text-[#9F9F9F] active:bg-[#E7E7E7] active:text-black"
          to={`category/${category.id}`}>
          {category.name}
        </Link>
      ))}
    </div>
  );
};
export default LeftSideNav;
