import React from "react";
import { Link } from "react-router-dom";

function CategoryList() {
  const categories = [
    { name: "Makeup", link: "/" },
    { name: "Skincare", link: "/" },
    { name: "Hair", link: "/" },
    { name: "Fragrance", link: "/" },
    { name: "Brands", link: "/" },
    { name: "Tools & Brushes", link: "/" },
    { name: "Bath & Body", link: "/" },
  ];
  return (
    <div className="flex flex-wrap justify-center space-x-2 bg-black w-full px-4 py-4 z-10">
      {categories.map((category, i) => (
        <Link to={category.link} key={i}>
          <span className="px-4 py-2 bg-gray-50 border rounded-md shadow-md flex my-2 md:m-0">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
}

export default CategoryList;
