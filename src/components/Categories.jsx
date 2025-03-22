import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../features/slices/productsSlice';
import Loader from './Loader';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
  const dispatch = useDispatch();
  const { products, isLoading, isError, message } = useSelector(
    (state) => state.products
  );
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    if (isError && message) {
      console.log("Error Message:", message);
      toast.error(message || "Something went wrong. Please try again.", {
        position: 'top-center'
      });
    }
  }, [isError, message]);

  if (isLoading) {
    return <Loader />;
  }

  const uniqueCategories = [];
  const categoryMap = new Map();

  products?.forEach((product) => {
    if (!categoryMap.has(product.product_type)) {
      categoryMap.set(product.product_type, product.api_featured_image);
      uniqueCategories.push({
        category: product.product_type,  
        image: product.api_featured_image,
      });
    }
  });

  const handleCategory = (category) => {
    console.log("Selected Category:", category);
    navigate(`/productCategory/${category}`);
  };

  return (
    <div>
      <div className="w-full flex flex-wrap items-center justify-evenly">
        {uniqueCategories.map((item, index) => (
          <div 
            className="w-[40%] md:w-[20%] m-4 md:px-10 bg-white py-5 flex items-center justify-center flex-col rounded-xl 
                       transition-all duration-300 shadow-md hover:shadow-xl 
                       hover:shadow-blue-500 hover:scale-105 cursor-pointer"
            key={index}
            onClick={() => handleCategory(item.category)}
          >
            <img className="w-[80%] h-40 md:p-3" src={item.image} alt={item.category} />
            <p className="font-bold mt-2">{item.category?.toUpperCase() || "N/A"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
