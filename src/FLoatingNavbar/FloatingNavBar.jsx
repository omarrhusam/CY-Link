import './FloatingNavbar.css'
import CYLinkLogo from '../assets/CYLinkLogo.png'
import { Link } from 'react-scroll'

export default function FloatingNavbar() {
    return(
        <main className='FloatingNavbarFrame'>
            <img src={CYLinkLogo} alt="CY-Link" />
            <div className='NavbarNavigations'>
                <ul className='nav-links'>
                    <li className='nav-link'>
                        <Link to='Home' smooth={true} duration={1000} className='cursor-pointer'>Home</Link>
                    </li>
                    <li className='nav-link'>
                        <Link to='Services' smooth={true} duration={1000} className='cursor-pointer'>services</Link>
                    </li>
                    <li className='nav-link AboutUs'>
                        <a href="a">About Us
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
            </div>
            <button className='NavbarBtn'>GET CONTACT</button>
        </main>
    )
}