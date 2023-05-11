"use client";

import { Repository, useGetReposQuery } from "@/generated";
import React, { FormEvent, useRef } from "react";
import RepositoryCard from "./card";

const Search = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const reposQuery = useGetReposQuery({
    searchQuery: inputRef.current?.value || "",
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    reposQuery.refetch();
  };

  return (
    <>
      <div className="flex justify-center items-start">
        <form onSubmit={onSubmit} className="w-full max-w-md">
          <div className="w-full py-2 px-2 rounded-sm bg-slate-100 flex items-center border-b-2 border-gray-500">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              name="search_value"
              placeholder="Search repositories..."
            />
            <button
              className="flex-shrink-0 bg-purple-500 hover:bg-purple-700 border-purple-500 hover:border-purple-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      <div className=" grid items-center grid-cols-3 gap-4">
        {reposQuery.isFetching ? (
          <span>Loading...</span>
        ) : (
          reposQuery.data?.search.edges?.map((e) => {
            const repo = e?.node as Repository;
            return (
              <RepositoryCard
                key={repo.nameWithOwner}
                name={repo.nameWithOwner}
                description={repo.description || ""}
                stars={String(repo.stargazerCount)}
              />
            );
          })
        )}
      </div>
    </>
  );
};

export default Search;
