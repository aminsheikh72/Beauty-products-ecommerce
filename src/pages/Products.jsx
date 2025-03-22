import React, { use, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../features/slices/productsSlice'
import Loader from '../components/Loader'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { addToCart } from '../features/slices/cartSlice'

const Products = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {products,isLoading,isError,message}= useSelector((state)=> state.products)
    const {user}= useSelector((state)=> state.auth)

    const handleAddToCart = (product) => {
     if(user){
      dispatch(addToCart(product));
      toast.success("Added to Cart", {
        position: "top-center"
      });
     }
     else{
      navigate('/login')
     }
    
  };
    useEffect(()=>{
dispatch(getProducts())
    },[dispatch])
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
    <div className="p-10">
    <h1 className="text-3xl font-bold text-center mb-10">Listing Products</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
  {products?.map((product) => (
    <div
  key={product.id}
  className="border shadow-lg p-4 rounded-xl transition-transform transform hover:scale-105 hover:shadow-2xl bg-white flex flex-col h-full"
>
  <div className="w-full h-52 rounded-md overflow-hidden">
    <img
      src={product.api_featured_image}
      alt={product.name}
      className="w-full h-full object-cover"
    />
  </div>
  <div className="flex-grow"> 
    <h2 className="text-lg font-bold mt-4 text-gray-800">{product.name}</h2>
    <p className="text-gray-500 text-sm">Brand: <span className="font-semibold">{product.brand || "Unknown"}</span></p>
    <p className="text-gray-700 font-bold">Category: {product.category || "N/A"}</p>
    <p className="text-gray-900 font-bold text-lg">
      {product?.price_sign}{product?.price}
    </p>
  
  </div>
  {/* Button ko bottom fix karne ke liye */}
  <button  onClick={() => navigate(`/products/${product.id}`)} className=' w-[100%] py-3 text-xl rounded-md my-2 font-bold text-white bg-pink-600 cursor-pointer hover:transition-all duration-200 hover:bg-pink-700 ' >View More Details</button>
  <button className=" hello mt-auto w-full text-center" onClick={()=>handleAddToCart(product)}>
    <div className="default-btn flex items-center justify-center">
      <svg viewBox="0 0 24 24" width="30" height="30" stroke="#ffffff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="cart-icon">
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
      </svg>
      <span className='text-lg ml-2'>Add to Cart</span>
    </div>
    <div className="hover-btn">
   
    <span className=' text-center w-full flex items-center justify-center'> <svg className=' mr-1'
      viewBox="0 0 320 512"
      width="12.5"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z"
        fill="#ffffff"
      ></path>
    </svg>{product.price}</span>
  </div>
  </button>
</div>

  ))}
</div>

  </div>
  )
}

export default Products
