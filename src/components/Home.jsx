import React, { useEffect } from "react";
import Carousel from "./Carousel";
import Categories from "./Categories";

const Home = () => {
  
  return (
    <div>
      <Carousel />
      
      <h2 className="text-center my-10 text-2xl font-bold">Categories</h2>
      
      <Categories/>
    </div>
  );
};

export default Home;
