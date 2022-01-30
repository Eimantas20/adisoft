import '../../Styles/Slider/slider.scss';
import SliderBtn from './SliderBtn';
import { useState } from 'react';
import { slidesData } from '../../data';

const Slider = () => {
    const [ slideIndex, setSlideIndex ] = useState(1);

    const slideNext = () => {
        if(slideIndex === 4) {
            setSlideIndex(1)
        } else {
            setSlideIndex(slideIndex + 1)
        }
    }

    const slidePrev = () => {
        if (slideIndex === 1) {
            setSlideIndex(4)
        } else {
            setSlideIndex(slideIndex - 1)
        }
    }

    return(
        <div className='slider-container'>
            <div className='info-container'>
                <div className='min-content'>
                    <h2>{slidesData.title}</h2>
                    <p>{slidesData.text}</p>
                    <button className='btn'><a href='#'>{slidesData.btnText}</a></button>
                </div>
            </div>
            <div className='slider'>
                {slidesData.slides.map(slide => (
                    <div key={slide.id}>
                        <img src={slide.img} className={slideIndex === slide.id ? 'slide active' : 'slide'} />
                        <img src={slide.imgLogo} className={slideIndex === slide.id ? 'slide-logo active-logo' : 'slide-logo'} />
                    </div> 
                ))}
                <SliderBtn slideImg={slideNext} direction='left' />
                <SliderBtn slideImg={slidePrev} direction='right'/>
            </div>
        </div>
    )
}

export default Slider