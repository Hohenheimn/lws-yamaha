"use client";

import useAPI from "@/hooks/useAPI";
import config from "@/utils/config";
import classNames from "classnames";
import { debounce } from "lodash";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";

type PropsType = {
  onClose(): void;
};

const SearchModal = (props: PropsType) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const { useGet } = useAPI(
    `${config.apiNextBaseUrl}/api/search?q=${searchValue}&page=${currentPage}`
  );
  const { data, isLoading }: any = useGet(
    ["search", searchValue, `page-${currentPage}`],
    {
      enabled: !!searchValue,
    }
  );
  const [searchResults, setSearchResults] = useState<
    Array<{ title: string; description: string; url: string }>
  >([]);

  const itemsPerPage = 3;
  const totalPages =
    Math.ceil(data?.data?.totalResultCount / itemsPerPage) || 0;
  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, startPage + 4);

  useEffect(() => {
    setSearchResults(data?.data?.data || []);
  }, [data?.data?.data]);

  const onSearch = debounce((e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }, 500);

  const renderSearchResultFallback = () => {
    if (isLoading) {
      return (
        <div className="text-white/50">
          Searching... Please wait while we find your results.
        </div>
      );
    }

    if (!searchValue) {
      return (
        <div className="text-white/50">
          Start your search by entering a keyword or criteria to find relevant
          results.
        </div>
      );
    }

    return (
      <div className="text-white/50">
        Sorry, no results found. Please ensure you've entered valid search
        criteria.
      </div>
    );
  };

  return (
    <div className="fixed top-0 z-50 left-0 p-5 md:p-10 gap-5 bg-black/70 backdrop-blur text-white h-screen w-screen flex flex-col">
      <button
        className="self-end font-medium md:mt-[10%]"
        onClick={props.onClose}
      >
        Close
      </button>
      <input
        type="text"
        className="border bg-transparent p-2 w-full"
        placeholder="Search..."
        onChange={onSearch}
      />
      <div className="flex flex-col gap-5">
        {!searchResults.length
          ? renderSearchResultFallback()
          : searchResults.map((result) => (
              <div
                key={result.url}
                className="border-b py-2 cursor-pointer"
                onClick={() => {
                  router.push(result.url);
                  props.onClose();
                }}
              >
                <p className="font-bold">{result.title}</p>
                <p className="text-white/60 line-clamp-2">
                  {result.description}
                </p>
              </div>
            ))}
      </div>

      {!!searchResults.length && (
        <div className="flex justify-end gap-2 pt-5">
          {currentPage !== 1 && (
            <button
              onClick={() => setCurrentPage(1)}
              className={`border-[2px] border-gray-400 py-1 px-3 rounded-md text-gray-400 font-semibold`}
            >
              First
            </button>
          )}
          {[...Array(totalPages)]
            .map((_, index) => index + 1)
            .slice(startPage - 1, endPage)
            .map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => setCurrentPage(pageNumber)}
                className={`border-[2px] border-gray-400 py-1 px-3 rounded-md text-gray-400 font-semibold ${classNames(
                  {
                    "bg-gray-400 text-gray-100": pageNumber === currentPage,
                  }
                )}`}
              >
                {pageNumber}
              </button>
            ))}
          {currentPage !== totalPages && (
            <button
              onClick={() => setCurrentPage(totalPages)}
              className={`border-[2px] border-gray-400 py-1 px-3 rounded-md text-gray-400 font-semibold`}
            >
              Last
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchModal;
