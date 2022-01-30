import '../../Styles/AboutUs/aboutUs.scss'
import { aboutUs } from '../../data'

const AboutUs = () => {
    return(
        <div className='about-container'>
            <div className='about-top'>
                <div className='about-text'>
                    <h2>{aboutUs.title}</h2>
                    <p>{aboutUs.text}</p>
                </div>
                <img src={aboutUs.logo} alt='Logo'/>
            </div>
            <div className='about-bottom'>
                {aboutUs.facts.map((fact, i) => (
                    <div key={i}>
                        <p className='fact-title'>{fact.title}</p>
                        <div className='fact-cont'>
                            <p className='fact-number'>{fact.number}</p>
                            <p className='fact-text'>{fact.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AboutUs