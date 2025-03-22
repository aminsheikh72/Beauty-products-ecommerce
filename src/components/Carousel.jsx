import React, { useState, useEffect } from 'react';
import img1 from '../assets/img1.webp'
import img2 from '../assets/img2.webp'
import img3 from '../assets/img3.jpeg'
import img4 from '../assets/img4.webp'
import img5 from '../assets/img5.webp'

const images = [img1,img2,img3,img4,img5
];

function Carousel() {
    const [current, setCurrent] = useState(0);

    function nextSlide() {
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }
    
    function prevSlide() {
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, [current]);

    return (
        <div>
            <div className="slider flex justify-evenly px-2 md:p-5 items-center py-10 md:py-0  md:h-screen w-[100%]">
                <div className="left-arrow bg-gray-200 hover:bg-gray-400 hover:text-white p-2 rounded-lg cursor-pointer" onClick={prevSlide}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </div>
                <div className="relative w-[100%] md:w-[85%] h-70 md:h-[90vh] overflow-hidden">
                    {images.map((image, index) => (
                        <img 
                            key={image} 
                            src={image} 
                            alt="slide" 
                            className={`absolute w-full h-full object-cover rounded-2xl transition-opacity duration-1000 ${current === index ? 'opacity-100' : 'opacity-0'}`}
                        />
                    ))}
                </div>
                <div className="right-arrow bg-gray-200 hover:bg-gray-400 hover:text-white p-2 rounded-lg cursor-pointer" onClick={nextSlide}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Carousel;
