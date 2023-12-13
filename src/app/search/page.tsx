"use client";

import Pagination from "@/components/shared/Pagination";
import React, { useState } from "react";

const SearchPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const results = Array.from(Array(6)).map((_, index) => ({
    id: index + 1,
    title: "Some Title Here " + index + 1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, repudiandae minus! Doloremque, commodi necessitatibus animi nobis qui dolore et minus quos exercitationem provident.",
  }));

  return (
    <div className="text-white h-[65vh] w-full flex flex-col">
      <div className="p-10">
        <input
          type="text"
          className="border bg-transparent p-2 w-full"
          placeholder="Search..."
        />
      </div>
      <div className="flex flex-col px-10  gap-5 flex-1 overflow-y-auto">
        {results.map((result) => (
          <div key={result.id} className="border-b py-2 cursor-pointer">
            <p className="font-bold">{result.title}</p>
            <p className="text-white/60">{result.description}</p>
          </div>
        ))}
      </div>
      <div className="px-10">
        <Pagination
          setTablePage={() => setCurrentPage((prev) => prev + 1)}
          tablePage={currentPage}
          totalPage={5}
        />
      </div>
    </div>
  );
};

export default SearchPage;
