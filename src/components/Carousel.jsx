// src/components/Carousel.jsx

import React from "react";
import { useSwipeable } from "react-swipeable";
import PropTypes from "prop-types";

const Carousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    const handleIndicatorClick = (index) => {
        setCurrentImageIndex(index);
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length),
        onSwipedRight: () => setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length),
    });

    return (
        <div
            className="flex flex-col items-center lg:px-16 lg:py-8" // Add padding for large screens
            {...swipeHandlers}
        >
            {/* Image Container */}
            <div className="overflow-hidden rounded-lg shadow-lg w-full">
                <img
                    src={images[currentImageIndex]}
                    alt={`Slide ${currentImageIndex + 1}`}
                    className="w-full h-auto object-cover"
                />
            </div>

            {/* Indicators */}
            <div className="flex space-x-2 mt-4">
                {images.map((_, index) => (
                    <span
                        key={index}
                        onClick={() => handleIndicatorClick(index)}
                        className={`w-3 h-3 rounded-full cursor-pointer ${
                            currentImageIndex === index ? "bg-black" : "bg-gray-400"
                        }`}
                    ></span>
                ))}
            </div>
        </div>
    );
};

Carousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
