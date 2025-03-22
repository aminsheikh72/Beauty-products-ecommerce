import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../features/slices/cartSlice";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
const dispatch = useDispatch()
const totalPrice = cartItems?.reduce((acc, item) => {
  return acc + item.price * item.quantity;
}, 0);
  return (
    <div className="master-container min-h-screen w-full flex items-center justify-start my-4 flex-col mt-4 md:mt-10">
      {cartItems?.length === 0 ? (
        <p className="text-2xl text-center font-bold">Cart is Empty</p>
      ) : (
        cartItems?.map((item) => (
          <div key={item.id} className="card cart w-[90%] md:w-[80%] my-2">
            <label className="title">Your Item</label>
            <div className="products">
              <div className="product w-full">
              <div>
                <img className=" object-cover h-full" src={item.api_featured_image} alt={item.name} />
              </div>
                <div className=" w-full" >
                  <span>{item.name}</span>
                  <p>BRAND : {item.brand}</p>
                  <button onClick={()=>dispatch(removeFromCart(item.id))}  className=" md:px-3 px-0 w-full md:w-[30%] text-sm py-1 mt-2 bg-red-500 font-bold text-white rounded-sm cursor-pointer" >Remove Item</button>
                </div>
                <div className="quantity">
                  <button onClick={()=> dispatch(updateQuantity({id : item.id, quantity : item.quantity-1}))} disabled={item.quantity <=1} >-</button>
                  <label>{item.quantity}</label>
                  <button onClick={()=> dispatch(updateQuantity({id : item.id, quantity : item.quantity+1}))}>+</button>
                </div>
                <label className="price small">${item.price}</label>
              </div>
            </div>
          </div>
        ))
      )}
      <div className="w-full text-center mt-6">
            <p className="text-2xl font-bold">
              Total Price: <span className="text-green-500">${totalPrice.toFixed(2)}</span>
            </p>
          </div>
    </div>
  );
};

export default Cart;
