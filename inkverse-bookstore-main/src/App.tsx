import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import OrderedItems from "./pages/OrderedItems";
import Checkout from "./pages/Checkout";
import Search from "./pages/Search";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  // const [currentPage, setCurrentPage] = useState<number>(1);
  // const totalPages: number = 10;

  // const handlePageChange = (newPage: number): void => {
  //   setCurrentPage(newPage);
  // };

  const [isLogged, setIsLogged] = useState(true);

  return (
    <div className="w-11/12 mx-auto my-8">
      <Routes>
        <Route
          path="/"
          element={
            isLogged ? <Home /> : <Navigate to="/login" replace={true} />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/orders" element={<OrderedItems />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/search" element={<Search />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
      {/* <Home />
      
      <div className="my-8">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
      <Checkout />
      <div className="fixed bottom-0 z-50 bg-green-500 bg-opacity-70 text-white shadow-md px-2">
        <span className="sm:hidden">default</span>
        <span className="hidden sm:inline md:hidden">sm</span>
        <span className="hidden md:inline lg:hidden">md</span>
        <span className="hidden lg:inline xl:hidden">lg</span>
        <span className="hidden xl:inline 2xl:hidden">lg</span>
        <span className="hidden 2xl:inline">xl</span>
      </div>
      <Search /> */}
    </div>
  );
};

export default App;
