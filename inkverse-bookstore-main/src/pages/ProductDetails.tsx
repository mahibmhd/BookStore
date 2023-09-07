// ProductDetails.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../app/RootReducer';
import MainNavBar from "../components/navbar/MainNavBar";
import NavBarLists from "../components/navbar/NavBarLists";
import { Footer } from "../components/footer/Footer";
import BookSection from "../components/card/BookSection";
import { Helmet } from "react-helmet";
import DetailView from '../components/card/ProductDet';
import { Book } from '../types/types';

const ProductDetails: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<any>(null); // Update type as needed
  const books = useSelector((state: RootState) => state.book.books);

  useEffect(() => {
    const selectedProduct = books.find((book) => book.id.toString() === productId);
    setProduct(selectedProduct || null);
  }, [productId, books]);

  if (!product) {
    return <div>Loading...</div>;
  }
  const relatedItems = books.filter((book) => book.category === product.category);

  return (
    // <div className="container mx-auto mt-8">
    //   <div className="max-w-md mx-auto">
    //     <img src={product.image} alt={product.title} className="w-full mb-4" />
    //     <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
    //     <p className="text-gray-700 mb-4">{product.description}</p>
    //     <p className="text-green-600 font-bold text-lg mb-2">${product.price}</p>
    //     {/* Display more product details */}
    //   </div>
    // </div>
   
    <>
      <Helmet>
        <title>Inkverse Bookstore</title>
      </Helmet>
      <div className="flex flex-col space-y-10">
        <MainNavBar />
        <NavBarLists />
        <div className=''>
        <DetailView book={product} />
        </div>
        <div className="p-8">
          <BookSection title="Related Items" books={relatedItems as Book[]} showAddToCart={false} />
          <BookSection title="Best Sellers in Your Area" showAddToCart={true} />
        </div>
        <Footer />


      </div>
    </>
  );
};


export default ProductDetails;
