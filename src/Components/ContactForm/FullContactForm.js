import ContactForm from "./ContactForm";
import { contactForm } from "../../data"
import '../../Styles/ContactForm/contactForm.scss';

const FullContactForm =() => {
    return(
        <div className='form-container'>
            <ContactForm />
            <div>
                <img src={contactForm.img} alt='Contact us' />
            </div>
        </div>
    )
}

export default FullContactForm