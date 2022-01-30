import '../../Styles/Contacts/contacts.scss';
import { contacts } from "../../data";

const Contacts = () => {
    return(
        <div className='contacts'>
            <h2>{contacts.title}</h2>
            <div className='contacts-list'>
                <div className='contact'>
                    <img src={contacts.locationIimg} alt="Map"/>
                    <p>{contacts.location}</p>
                </div>
                <div className='contact'>
                    <img src={contacts.phoneImg} alt="Phone" />
                    <p>{contacts.phoneNumber}</p>
                </div>
                <div className='contact'>
                    <img src={contacts.emailImg} alt="Email" />
                    <p><a href={`mailto:${contacts.email}`}>{contacts.email}</a></p>
                </div>
                <div className='contact'>
                    <img src={contacts.worldImg} alt="Web" />
                    <a href={contacts.web}><p>{contacts.web}</p></a>
                </div>
            </div>
        </div>
    )
}

export default Contacts