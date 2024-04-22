import React from "react";

const Categories = ({ categories, current, onClick }) => {
  return (
    <div className="flex gap-10">
      {["All", ...categories].map((category) => (
        <button
          key={category}
          className={`relative flex justify-center ${
            current === category
              ? "text-white"
              : "text-gray-300 hover:text-white"
          }`}
          onClick={() => onClick(category)}
        >
          <span className="py-2 px-2">{category}</span>
          {current === category && (
            <div className="w-[80%] h-[2px] bg-gradient-to-r from-[#b16cea]  via-[#ff5e69] to-[#ffa84b] absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full" />
          )}
        </button>
      ))}
    </div>
  );
};

export default Categories;
