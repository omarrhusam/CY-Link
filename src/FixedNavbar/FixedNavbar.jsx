import './FixedNavbar.css'
import mailLogo from '../assets/email.png'
import phoneLogo from '../assets/phone.png'
import locationLogo from '../assets/location.png'

export default function FixedNavbar() {
    return (
        <main id='Home' className='FixedNavbarFrame'>
            <p className='NavbarQuote'>Secure Your Business Future, Today!</p>
            <div className='ContactInfo'>
                <div className='Phone'>
                    <img className='PhoneLogo' src={phoneLogo} alt="Mobile Number" />
                    <p>+201021962000</p>
                </div>
                <div className='Mail'>
                    <img className='MailLogo' src={mailLogo} alt="Mail" />
                    <p>info@cylink-eg.com</p>
                </div>
                <div className='Location'>
                    <img className='LocationLogo' src={locationLogo} alt="Location" />
                    <p>Arab Contractors Housing, 9, Sheraton <br/> El Matar, El Nozha, Cairo Governorate</p>
                </div>
            </div>
        </main>
    )
}