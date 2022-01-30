import '../../Styles/ContactForm/contactForm.scss';
import { contactForm } from "../../data"
import { useState } from 'react';

const ContactForm = (props) => {
    const [category, setCategory ] = useState('')

    const pickCategory = (e, cat) => {
        e.preventDefault();
        setCategory(cat);
    }

    const submitForm = (e) => {
        e.preventDefault();
        console.log('Form submited')
    }

    return(
        <div className={props.fullscreen ? 'form-fullscreen' : 'form-half'}>
            <div className='form-container-2'>
                <h2>{contactForm.title}</h2>
                <p className='bottom-gap'>{contactForm.text}</p>
                <form onSubmit={submitForm}>
                    <div className='inputs'>
                        <div className='form'>
                            <label htmlFor='fname'>{contactForm.name}</label>
                            <input type='text' placeholder={contactForm.plchldrName} />
                        </div>
                        <div className='form'>
                                <label htmlFor='lname'>{contactForm.surname}</label>
                            <input type='text' placeholder={contactForm.plchldrSurname} />
                        </div>
                        <div className='form full'>
                            <label htmlFor='compname'>{contactForm.company}</label>
                            <input type='text' placeholder={contactForm.plchldrGeneral} />
                        </div>
                        <div className='form full'>
                            <label htmlFor='email'>{contactForm.email}</label>
                            <input type='text' placeholder={contactForm.plchldrGeneral} />
                        </div>
                        <div className='form full'>
                            <label htmlFor='mobnumber'>{contactForm.number}</label>
                            <input type='text' placeholder={contactForm.plchldrGeneral} />
                        </div>
                        <div className='categories-cont full'>
                            <p>{contactForm.pickCategory}</p>
                            {contactForm.categories.map((cat, i) => (
                                <button key={i} onClick={(e) => pickCategory(e, cat)} className={category === cat && 'active'}><p>{cat}</p></button>
                            ))}
                        </div>
                    </div>
                    <div className='checkbox'>
                        <input type='checkbox' />
                        <label><a href="#">{contactForm.checkbox}</a></label>
                    </div>
                    <button className='submitBtn btn'>{contactForm.submit}</button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm