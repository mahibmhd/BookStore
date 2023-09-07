import React, { useState } from "react";
import { Typography, Button } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GrAdd } from "react-icons/gr";
import { AiOutlineMinus, AiOutlineArrowLeft } from "react-icons/ai";
import {
  selectCartItems,
  selectCartTotalPrice,
  removeFromCart,
  addToCart,
  removeItem,
} from "../../features/cart/CartSlice";
import { Book } from "../../types/types";
import { CheckIcon } from "@heroicons/react/20/solid";

interface DetailProps {
  book: Book;
}

const DetailView: React.FC<DetailProps> = ({ book }) => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isInCart = cartItems.some((item) => item.id === book.id);
  const existingCartItem = cartItems.find((item) => item.id === book.id);
  const initialQuantity = existingCartItem ? existingCartItem.quantity : 1;

  const [quantity, setQuantity] = useState(initialQuantity);

  const handleViewCart = () => {
    if (isInCart) {
      navigate("/orders");
    } else {
      handleAddToCart();
    }
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ ...book, quantity }));
  };

  const handleAddToWishlist = () => {
    // Handle adding to wishlist
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    
    <>
    
    <div className="flex h-750 ">
      <div className="w-1/6"></div>
      <div className="flex flex-row"></div>
      
      <div className="w-1/6 mr-10">
        <img src={book.image} alt={book.title} className=" w-full" />
      </div>
      <div className="w-3/6 p-4 flex flex-col">
        <Typography variant="h3" className="mb-6 font-bold font-mulish">
          {book.title}
        </Typography>
        <p className="bg-gray-200 text-green-700 font-semibold text-center rounded-md w-max px-2 py-1 mb-6">
          instock
        </p>
        <Typography color="green" className="mb-6 font-bold text-xl font-mulish">
          ${book.price}
        </Typography>
        <div className="flex w-28 items-center border-2 border-gray-400 rounded-md mb-6">
        <button onClick={decreaseQuantity} className="border-r-2 border-gray-400 text-black font-bold text-xl px-2 py-1">
          <AiOutlineMinus />
        </button>
        <span className="font-bold text-xl px-2">{quantity}</span>
        <button onClick={increaseQuantity} className="border-l-2 border-gray-400 text-black font-bold text-xl px-2 py-1">
          <GrAdd />
        </button>
      </div>
      <Button
        className="mt-2 bg-[#237943] flex justify-center items-center gap-2 font-mulish font-bold mb-6"
        onClick={isInCart ? handleViewCart : handleAddToCart}
      >
        {isInCart ? "View in Cart" : "Add to Cart"}
        {isInCart && <CheckIcon className="w-5 h-5 font-bold" />}
      </Button>
        <Button
          color="indigo"
          className="border mb-6 border-[#237943] bg-white text-[#237943] font-mulish"
          onClick={handleAddToWishlist}
        >
          Add to Wishlist
        </Button>
      </div>
      <div className="w-1/6"></div>

    </div>
    {/* <div className="flex justify-around w-3/6 p-4">
    <div className="w-/6"></div>
        <div className="bg-white p-4 ">
          <Typography className="text-gray-600 text-sm mb-2">
            Description:
          </Typography>
          <Typography className="text-black text-lg mb-4">
            {book.description}
          </Typography>
        </div>
      </div> */}
      <div className="bg-white p-4 rounded-lg ">
      <Typography variant="h4" className="mb-4 font-semibold font-mulish">
          Details
        </Typography>
          <Typography className="text-black text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
            dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
            quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?
          </Typography>
        </div>
</>
  );
};


export default DetailView;