import './App.scss';
import Slider from './Components/Slider/Slider';
import ExtraInfo from './Components/ExtraInfo/ExtraInfo';
import ContactForm from './Components/ContactForm/ContactForm';
import AboutUs from './Components/AboutUs/AboutUs';
import WhyUs from './Components/WhyUs/WhyUs';
import Contacts from './Components/Contacts/Contacts';
import FullContactForm from './Components/ContactForm/FullContactForm';

function App() {
  return (
    <div className="App">
      <Slider />
      <ExtraInfo />
      <FullContactForm />
      <AboutUs />
      <div className='br' />
      <WhyUs />
      <ContactForm fullscreen={true} />
      <Contacts />
    </div>
  );
}

export default App;
