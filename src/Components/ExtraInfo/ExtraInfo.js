import { extraData } from '../../data';
import '../../Styles/ExtraInfo/extraInfo.scss'

const ExtraInfo = () => {
    return(
        <div className='extraData-container'>
            <img className='fullSize' src={extraData.mainImg} alt='Tools'/>
            <div className='extraInfo-container'>
                <div className='extraDataTitle'>
                    <h2>{extraData.title}</h2>
                    <div className='ex-plus'>
                        <img src={extraData.plus} alt='Plus' />
                    </div>
                </div>
                <p>{extraData.text}</p>
            </div>
        </div>
    )
}

export default ExtraInfo