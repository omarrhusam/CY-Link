import './FloatingNavbar.css'
import CYLinkLogo from '../assets/CYLinkLogo.png'
import { Link } from 'react-scroll'
import {FaBars, FaTimes} from 'react-icons/fa'
import { useRef } from 'react'

export default function FloatingNavbar() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    return(
        <main className='FloatingNavbarFrame'>
            <img src={CYLinkLogo} alt="CY-Link" />
            <nav ref={navRef} className='NavbarNavigations'>
                <ul className='nav-links'>
                    <li className='nav-link'> 
                        <Link to='Home' smooth={true} duration={1000} className='cursor-pointer'>Home</Link>
                    </li>
                    <li className='nav-link'>
                        <Link to='Services' smooth={true} duration={1000} className='cursor-pointer'>Services</Link>
                    </li>
                    <li className='nav-link AboutUs'>
                        <a>About Us
                            <span className="material-icons dropdown-icon">
                                arrow_drop_down
                            </span>
                        </a>
                        <ul className='drop-menu'>
                            <li>
                                <Link to='AboutTheCompany' smooth={true} duration={1000} className='cursor-pointer'>about the company</Link>
                            </li>
                            <li>
                                <Link to='OurVision&Mission' smooth={true} duration={1000} className='cursor-pointer'>Our Vision & Mission</Link>
                            </li>
                            <li>
                                <Link to='OurNetworkVendors' smooth={true} duration={1000} className='cursor-pointer'>Our Network Vendors</Link>
                            </li>
                            <li>
                                <Link to='OurSSVendors' smooth={true} duration={1000} className='cursor-pointer'>Our Security & Storage Vendors</Link>
                            </li>
                            <li>
                                <Link to='OurCloudVendors' smooth={true} duration={1000} className='cursor-pointer'>Our Cloud Vendors</Link>
                            </li> 
                            <li>
                                <Link to='OurTraction' smooth={true} duration={1000} className='cursor-pointer'>Our Traction</Link>
                            </li>
                            <li>
                                <Link to='OurValuedCustomers' smooth={true} duration={1000} className='cursor-pointer'>Our Valued Customers</Link>
                            </li>
                        </ul>
                    </li>
                    {/* <li className='nav-link'>
                        <a href="a">Products</a>
                    </li> */}
                    <li className='nav-link'>
                        <Link to='ContactUS' smooth={true} duration={1000} className='cursor-pointer'>Contact US</Link>
                    </li>
                </ul>
                <button className='NavBtn NavCloseBtn' onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className='NavBtn' onClick={showNavbar}>
                <FaBars/>
            </button>
        </main>
    )
}