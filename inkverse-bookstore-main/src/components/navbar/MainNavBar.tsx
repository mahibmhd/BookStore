import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";
import Logo from "../../assets/inkverselogo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCartItems,
  selectCartTotalPrice,
} from "../../features/cart/CartSlice";

import { setSearchValue } from "../../features/navbar/navabarSlice";
import { useState } from "react";
import Sidebar from "../sidebar/SideBar";
import { Bars3Icon } from "@heroicons/react/20/solid";

const MainNavBar = () => {
  const searchValue = useSelector((state: any) => state.navbar.searchValue);
  const dispatch = useDispatch();

  const handleSearchChange = (event: any) => {
    const newValue = event.target.value;
    dispatch(setSearchValue(newValue));
  };

  const cartItems = useSelector(selectCartItems);
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = useSelector(selectCartTotalPrice);

  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const handleSearchClick = () => {
    navigate("/search");
  };

  return (
    <div className="flex justify-between items-center font-mulish p-4 md:p-6 bg-white shadow-md rounded-lg">
      <Link to="/">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="inkverse_logo" className="w-10 h-10" />
          <h1 className="font-bold text-lg hidden md:flex">InkVerse</h1>
        </div>
      </Link>

      <div className=" flex items-center text-md ">
        <MagnifyingGlassIcon className="h-5 w-5 transform translate-x-8 text-[#727272]" />
        <input
          type="text"
          value={searchValue}
          className="w-[85%] md:w-[400px] rounded-md pl-10 py-[.5rem] outline-none bg-[#F6F6F6] placeholder-[#727272]"
          placeholder="Search book..."
          onClick={handleSearchClick}
          onChange={handleSearchChange}
        />
      </div>
      {/* Sidebar Toggle Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden text-black"
      >
        <Bars3Icon className="h-8 w-8" />
      </button>

      <div className="hidden md:flex gap-5">
        <Link to="/login">
          <Button
            variant="text"
            className="flex items-center gap-3 font-mulish"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Signin
          </Button>
        </Link>

        <Button variant="text" className="flex items-center gap-3 font-mulish">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          Wishlist
        </Button>
        <Link to="/orders">
          <Button
            variant="text"
            className="relative flex items-center gap-3 font-mulish"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <span className="absolute top-[.5rem] left-[.2rem] bg-red-600 px-1 rounded-full text-white">
              {totalQuantity}
            </span>
            ${totalPrice.toFixed(2)}
          </Button>
        </Link>
      </div>
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
    </div>
  );
};

export default MainNavBar;
