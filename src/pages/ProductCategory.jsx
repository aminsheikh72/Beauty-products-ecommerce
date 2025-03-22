import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../features/slices/productsSlice'
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import { toast } from 'react-toastify';

const ProductCategory = () => {
    const dispatch = useDispatch();
    const { categories } = useParams();
    const { categoryProducts, isLoading, isError, message } = useSelector((state) => state.products);
    const navigate = useNavigate()
    useEffect(() => {
        if (categories) {
            dispatch(getCategories(categories));
        }
    }, [categories, dispatch]);
   
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

    return (
        <div className="w-full">
    
            <h1 className="text-3xl font-bold text-center mt-10 mb-5">Category</h1>
            <div className=" w-full flex items-center justify-around flex-wrap">
                {categoryProducts?.map((product) => (
                    <div key={product.id} className="w-[70%] min-h-[500px] md:w-[30%] m-4 md:px-10 bg-white py-10 flex items-center justify-center flex-col rounded-xl 
                       transition-all duration-300 shadow-md hover:shadow-xl 
                       hover:shadow-blue-500 hover:scale-105 cursor-pointer">
                        <img
                            src={product.api_featured_image}
                            alt={product.name}
                            className="md:w-full w-[90%] h-48 object-cover rounded-md"
                        />
                        <h2 className="text-lg font-semibold text-center my-4 w-[80%]">{product.name}</h2>
                        <p className="text-gray-900 font-bold ">PRICE : {product?.price_sign}{product?.price || "N/A"}</p>
                        <button  onClick={() => navigate(`/product/${product.id}`)} className=' w-[90%] py-3 text-xl rounded-md mt-2 font-bold text-white bg-pink-600 cursor-pointer hover:transition-all duration-200 hover:bg-pink-700 ' >View More Details</button>
                       
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductCategory;

