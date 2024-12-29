import React from "react";
import { IoSearch } from "react-icons/io5";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { useEffect } from "react";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import useMobile from "../hooks/useMobile";

function Search() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSearchPage, setIsSearchPage] = useState(false);
  const [isMobile] = useMobile();

  useEffect(() => {
    const isSearch = location.pathname === "/search";
    setIsSearchPage(isSearch);
  }, [location]);

  const redirectToSearchPage = () => {
    navigate("/search");
  };

  return (
    <div className="w-full  min-w-[320px] lg:min-w-[420px] h-11 lg:h-12 rounded-lg border overflow-hidden flex items-center text-neutral-500 group bg-slate-50 focus-within:border-primary-200 ">
      {isMobile && isSearchPage ? (
        <Link
          to={"/"}
          className="flex justify-center items-center h-full p-2 m-1 group-focus-within:text-primary-200 bg-white rounded-full shadow-md"
        >
          <FaArrowLeft size={18} />
        </Link>
      ) : (
        <button className="flex justify-center items-center h-full p-3 group-focus-within:text-primary-200">
          <IoSearch size={22} />
        </button>
      )}

      <div />
      <div className="w-full h-full">
        {!isSearchPage ? (
          //Not in search page
          <div
            onClick={redirectToSearchPage}
            className="w-full h-full flex items-center"
          >
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Search "milk"',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Search "bread"',
                1000,
                'Search "sugar"',
                1000,
                'Search "panner"',
                1000,
                'Search "curd"',
                1000,
                'Search "chocolate',
                1000,
                'Search "rice"',
                1000,
                'Search "chips"',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
        ) : (
          //when i am in search page
          <div className="w-full h-full">
            <input
              type="text"
              placeholder="search for atta dal and more"
              autoFocus
              className="bg-transparent w-full h-full outline-none"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
