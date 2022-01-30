import '../../Styles/WhyUs/whyUs.scss';
import { whyUs } from "../../data";


const WhyUs = () => {

    return(
        <div className='whyus-container'>
            <div>
                <img src={whyUs.img} alt='Why us' />
            </div>
            <div className='facts-container'>
                <h2>{whyUs.title}</h2>
                <div className='whyus-facts'>
                    {whyUs.facts.map((fact, i) => (
                        <div>
                            <p className='fact-number'>0{fact.number}</p>
                            <p className='fact-title'>{fact.reason}</p>
                            <p className='fact-text'>{fact.explanation}</p>
                        </div>
                    ))}
                </div>
                <button className='btn'>{whyUs.submitBtn}</button>
            </div>
        </div>
    )
}

export default WhyUs