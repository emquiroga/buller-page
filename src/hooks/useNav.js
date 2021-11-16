import { sliderContent } from "content";
import { useState } from "react";


export const useNav = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const slideLenght = sliderContent.length;

    if (!Array.isArray(sliderContent) || sliderContent.length === 0) {
        console.log("No array content");
        
    }
    const nextSlide = () => {
    setActiveSlide(activeSlide === slideLenght - 1 ? 0 : activeSlide + 1);
    };

    const prevSlide = () => {
    setActiveSlide(activeSlide === 0 ? slideLenght - 1 : activeSlide - 1);
    };
    
    const goToSlide = (index) => {
        setActiveSlide(index);
    }

    return {activeSlide, nextSlide, prevSlide, goToSlide};
}
