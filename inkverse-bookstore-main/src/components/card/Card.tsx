import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Rating,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCartItems } from "../../features/cart/CartSlice";
import { IconButton } from "@material-tailwind/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Book } from "../../types/types";

interface BookCardProps {
  book: Book;
  showAddToCart: boolean;
}

const HorizontalCard: React.FC<BookCardProps> = ({ book, showAddToCart }) => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isInCart = cartItems.some((item) => item.id === book.id);

  const handleAddToCart = () => {
    dispatch(addToCart(book));
  };

  const handleViewCart = () => {
    if (isInCart) {
      navigate("/orders");
    } else {
      handleAddToCart();
    }
  };

  const truncatedTitle =
    book.title.length > 32 ? book.title.substring(0, 32) + "..." : book.title;
  return (
    <Card className="f w-96 max-w-[28rem] h-100 flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <Link to={`/product/${book.id}`}>
          <img
            src={book.image}
            alt={book.title}
            className="h-[70%] w-full object-cover"
          />
        </Link>
      </CardHeader>
      <CardBody className="flex flex-col justify-between">
        <div>
          <Link to={`/product/${book.id}`}>
            <Typography
              variant="h7"
              color="blue-gray"
              className="mb-2 font-mulish w-full font-bold"
            >
              {truncatedTitle}
            </Typography>
          </Link>
          <Typography color="gray" className="mb-4 font-mulish">
            {book.category}
          </Typography>
        </div>

        <div className="flex items-center mb-4 font-mulish">
          <Rating value={4} readonly />
        </div>
        <Typography className="mb-4 font-mulish font-bold text-[#237943]">
          ${book.price}
        </Typography>

        <div className="inline-block">
          {showAddToCart && (
            <Button
              className="mt-2 bg-[#237943] flex items-center gap-2 font-mulish font-bold"
              onClick={isInCart ? handleViewCart : handleAddToCart}
            >
              {isInCart ? "View in Cart" : "Add to Cart"}
              {isInCart && <CheckIcon className="w-5 h-5 font-bold" />}
            </Button>
          )}
          <IconButton variant="text">
            <i className="fas fa-heart" />
          </IconButton>
        </div>
      </CardBody>
    </Card>
  );
};

export default HorizontalCard;
