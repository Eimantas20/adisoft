import leftBtn from '../../Img/arrow-left.svg';
import rightBtn from  '../../Img/arrow-right.svg'
import '../../Styles/Slider/sliderBtn.scss';



const SliderBtn = ({slideImg, direction}) => {

    return(
        <>
            <img 
            className={direction === 'left' ? 'slider-btn left' : 'slider-btn right'}
            src={direction === 'left' ? leftBtn : rightBtn}
            onClick={slideImg}
            />
        </>
    )
}

export default SliderBtn