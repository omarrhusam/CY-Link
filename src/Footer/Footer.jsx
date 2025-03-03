import './Footer.css'
import logo from '../assets/logo.png'
import { Link } from 'react-scroll'

export default function Footer(){
    return(
        <main id='ContactUS' className='FooterMain'>
            <div className='UpperFooter'>
                <a href='tel:+201021962000' className='PhoneFooter'>
                    <h2>+201021962000</h2>
                    <div className='Line'/>
                </a>
                <a href='mailto:info@cylink-eg.com' className='MailFooter'>
                    <h2>info@cylink-eg.com</h2>
                    <div className='Line'/>
                </a> 
                <div className='LocationFooter'>
                    <h2>Arab Contractors Housing, 9, Sheraton <br/> El Matar, El Nozha, Cairo Governorate</h2>
                    <div className='Line'/>
                </div>
            </div>
            <div className='LongLine'/>
            <body className='LowerFooter'>
                <div className='LSLFooter'>
                    <img src={logo} alt="CY-Link" />
                    <p>Specializing in thorough<br/>
                    assessments, customized<br/>
                    solutions, and on</p>
                </div>
                <div className='RSLFooter'>
                    <div className='QuickLines1'>
                        <h1>Quick Lines</h1>
                        <Link to='Home' smooth={true} duration={1000} className='cursor-pointer'>Home</Link>
                        <Link to='Services' smooth={true} duration={1000} className='cursor-pointer'>services</Link>
                        <Link to='AboutTheCompany' smooth={true} duration={1000} className='cursor-pointer'>about the company</Link>
                        <Link to='OurVision&Mission' smooth={true} duration={1000} className='cursor-pointer'>Our Vision & Mission</Link>
                    </div>
                    <div className='QuickLines2'>
                        <h1>Quick Lines</h1>
                        <Link to='OurNetworkVendors' smooth={true} duration={1000} className='cursor-pointer'>Our Network Vendors</Link>
                        <Link to='OurSSVendors' smooth={true} duration={1000} className='cursor-pointer'>Our Security & Storage Vendors</Link>
                        <Link to='OurCloudVendors' smooth={true} duration={1000} className='cursor-pointer'>Our Cloud Vendors</Link>
                        <Link to='OurTraction' smooth={true} duration={1000} className='cursor-pointer'>Our Traction</Link>
                        <Link to='OurValuedCustomers' smooth={true} duration={1000} className='cursor-pointer'>Our Valued Customers</Link>
                    </div>
                </div>
            </body>
        </main>
    )
}