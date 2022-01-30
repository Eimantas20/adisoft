import slide1 from './Img/slide-1.jpg';
import slide1Logo from './Img/slide-1-logo.png';
import slide2 from './Img/slide-2.jpg';
import slide2Logo from './Img/slide-2-logo.png';
import slide3 from './Img/slide-3.jpg';
import slide3Logo from './Img/slide-3-logo.png';
import slide4 from './Img/slide-4.jpg';
import slide4Logo from './Img/slide-4-logo.png';
import extraInfoImg from './Img/tools.jpg';
import plus from './Img/vector.png';
import contactFormImg from './Img/contact-form.jpg';
import logo from './Img/logo.jpg';
import whyUsImg from './Img/why-us.jpg';
import location from './Img/location.svg';
import phone from './Img/phone.svg';
import email from './Img/email.svg';
import world from './Img/world.svg';

const title = 'Garsiausių pasaulyje, statybinių prekės ženklų oficialus partneris Lietuvoje!';
const text = 'Tapkite mūsų parneriu ir gaukite geriausius pasiūlymus.';
const link = 'Gauti specialų pasiūlymą';


export const slidesData = {
    title: 'Garsiausių pasaulyje, statybinių prekės ženklų oficialus partneris Lietuvoje!',
    text: 'Tapkite mūsų parneriu ir gaukite geriausius pasiūlymus.',
    btnText: 'Gauti specialų pasiūlymą',
    slides: [
        {
            id: 1,
            img: slide1,
            imgLogo: slide1Logo,
            title: title,
            text: text,
            link: link
        },
        {
            id: 2,
            img: slide2,
            imgLogo: slide2Logo,
            title: title,
            text: text,
            link: link
        },
        {
            id: 3,
            img: slide3,
            imgLogo: slide3Logo,
            title: title,
            text: text,
            link: link
        },
        {
            id: 4,
            img: slide4,
            imgLogo: slide4Logo,
            title: title,
            text: text,
            link: link
        },
    ]
}

export const extraData = {
    mainImg: extraInfoImg,
    plus: plus,
    title: 'Specialist',
    text: 'Specialist+ prekės ženklas, sukurtas RM Tools komandos, siūlo platų statybinių įrankių ir jų priedų pasirinkimą. Prekės ženklas jau įvertintas profesionalų ir pamėgtas Baltijos šalyse, sulaukia vis daugiau gerbėjų ir Europoje. Specialist+ išskirtinumas: aukšta kokybė už sąžiningą kainą. Didelė prekių dalis yra sukurta ir pagaminta Europoje. Pabandę Specialist+ gaminius, klientai įvertina europinę kokybę už itin gerą kainą ir tampa nuolatiniais pirkėjais. Patirkite malonumą dirbdami su Specialist+.'
}

export const contactForm = {
    img: contactFormImg,
    title: 'Tapkite mūsų partneriu',
    text: 'Mes žinome kaip padėti Jūsų verslui ir pateiksime geriausius pasiūlymus, skirtus būtent Jums',
    name: 'Vardas',
    plchldrName: 'Vardenis',
    surname: 'Pavardė',
    plchldrSurname: 'Pavardenis',
    plchldrGeneral: 'Lorem ipsum',
    company: 'Įmonės pavadinimas',
    email: 'El. paštas',
    number: 'Tel. numeris',
    pickCategory: 'Pasirinkite sritį:',
    categories: ['Gamybos įmonė', 'Mažmeninė įmonė', 'Statybos įmonė', 'Projektinė veikla'],
    checkbox: '*Sutinkate su  privatumo politika ir naujienlaiškių užsakymu',
    submit: 'Gauti specialų pasiūlymą'
}

export const aboutUs = {
    logo: logo,
    title: 'Kas mes?',
    text: 'UAB „RM Tools“ - didmeninė ir mažmeninė prekyba rankiniais ir elektriniais įrankiais, skirtais statybos rinkai. Prekiaujame Baltijos šalių rinkos poreikius atitinkančiais įrankiais, daug dirbame, kad būtume geriausias tiekėjas bei įrankių tiekimo partneris parduotuvėms, statybinėms organizacijoms bei meistrams.',
    facts: [
        {
            title: 'Rinkoje nuo',
            number: 2006,
            text: 'm.'
        },
        {
            title: 'Atstovauja ',
            number: 33,
            text: 'Prekės ženklus'
        },
        {
            title: 'Asortimente daugiau kaip  ',
            number: 8000,
            text: 'produktų'
        },
        {
            title: 'Atidarytos ',
            number: 3,
            text: 'specializuotos \nSpalialist+ parduotuvės'
        },
        {
            title: 'Sukūrė  ',
            number: 2014,
            text: 'm. savo prekės \nženklą Specialist+'
        }
        

    ]
}

export const whyUs = {
    img: whyUsImg,
    title: 'Kodėl verta dirbti su mumis?',
    submitBtn: 'SUSISIEKTI',
    facts: [
        {
            number: 1,
            reason: 'Paprastas užsakymas internetu',
            explanation: 'Specialioje B2B internetinėje platformoje lengvai užsisakysite Jums reikalingas prekes'
        },
        {
            number: 2,
            reason: 'Operatyvus pristatymo laikas',
            explanation: 'Pristatysime prekes vos per 1 d. d. visoje Lietuvoje',
        },
        {
            number: 3,
            reason: 'Aukšto lygio aptarnavimas',
            explanation: 'Specialiai Jums priskirtas vadybininkas - visada bus pasiruošęs padėti',
        },
        {
            number: 4,
            reason: 'Efektyvus marketinginis palaikymas',
            explanation: 'Parengsime ekspoziciją, suorganizuosime pardavimų skatinimo kampanijas, padėsime Jūsų pardavimams augti',
        },
        {
            number: 5,
            reason: 'Lojalumo kampanija',
            explanation: 'Nuolatos vykdomos įvairios lojalumo kampanijos mūsų klientams',
        },
        {
            number: 6,
            reason: 'Mokymai',
            explanation: 'Suteikiame naujausią informaciją apie produktus - visada žinosite, mūsų produktų privalumus',
        }
    ]
}

export const contacts = {
    title: 'Turite klausimų? \nSusisiekite su mumis',
    locationIimg: location,
    location: 'Kalvarijų g. 143-16, LT-08352 Vilnius',
    phoneImg: phone,
    phoneNumber: '+370 5 21 69999',
    emailImg: email,
    email: 'info@specialist.lt',
    worldImg: world,
    web: 'specialist.lt',
}