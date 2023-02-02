import React, {useState, useRef, useEffect} from 'react';
import './Slider.css';
import BtnSlider from './BtnSlider';
import dataSlider from './dataSlider'
export default function Slider ()  {
    const [slideIndex, setSlideIndex] = useState(1);
    const timeoutRef = useRef(null);

    const delay = 4500;
    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        }
        else if(slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }
    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }
      useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
          () =>
            setSlideIndex((currentIndex) =>
              currentIndex === dataSlider.length  ? 1 : currentIndex + 1
            ),
          delay
        );
    
        return () => {
          resetTimeout();
        };
      }, [slideIndex]);

    const prevSlide = () => {
        if(setSlideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1 ){
            setSlideIndex(dataSlider.length)
        }
    }
    const moveDot = index => {
        setSlideIndex(index)
    }
    return (
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return(
                    <div className={slideIndex === index + 1 ? "slide active-anim" : "slide" } key={obj.id} >
                        <img src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`}  />
                    </div>
                )   
            })}
            <BtnSlider  moveSlide={nextSlide} direction={"next"}/>
            <BtnSlider  moveSlide={prevSlide} direction={"prev"} />

            <div className="container-dots">
                {Array.from({length: 4}).map((item,index) =>(
                    <div onClick={() => moveDot(index + 1)} className={slideIndex === index + 1 ? "dot active" : " dot"}> </div>
                ))}
            </div>
        </div>
    )
}


