import './FixedNavbar.css'
import mailLogo from '../assets/email.png'
import phoneLogo from '../assets/phone.png'
import locationLogo from '../assets/location.png'

export default function FixedNavbar() {
    return (
        <main id='Home' className='FixedNavbarFrame'>
            <p className='NavbarQuote'>Secure Your Business Future, Today!</p>
            <div className='ContactInfo'>
                <a className='Phone' href='tel:+201021962000'>
                    <img className='PhoneLogo' src={phoneLogo} alt="Mobile Number" loading='lazy' />
                    <p>+201021962000</p>
                </a>
                <a className='Mail' href='mailto:info@cylink-eg.com'>
                    <img className='MailLogo' src={mailLogo} alt="Mail" loading='lazy' />
                    <p>info@cylink-eg.com</p>
                </a>
                <div className='Location'>
                    <img className='LocationLogo' src={locationLogo} alt="Location" loading='lazy' />
                    <p>Arab Contractors Housing, 9, Sheraton <br/> El Matar, El Nozha, Cairo Governorate</p>
                </div>
            </div>
        </main>
    )
}