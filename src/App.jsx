import './App.css'
import bgImage from './assets/backgroundImg.mp4'
import FixedNavbar from './FixedNavbar/FixedNavbar'
import FloatingNavbar from './FLoatingNavbar/FloatingNavBar'
import Home from './Home/Home'
import Services from './ServicesPage/Services.jsx'
import AboutTheCompany from './AboutUs/AboutTheCompany/AboutTheCompany.jsx'
import MissionVission from './AboutUs/OurVision&Mision/MissionVission.jsx'
import OurNetworkVendors from './AboutUs/OurNetworkVendors/OurNetworkVendors.jsx'
import OurSSVendors from './AboutUs/OurSecurity&StorageVendors/OurSSVendors.jsx'
import OurCloudVendors from './AboutUs/OurCloudVendors/OurCloudVendors.jsx'
import OurTractons from './AboutUs/OurTractions/OurTractions.jsx'
import OurValuedCustomers from './AboutUs/OurValuedCustomers/OurValuedCustomers.jsx'
import Footer from './Footer/Footer.jsx'

function App() {
  
  return (
    <main className='Main'>
      <video id='bg-video' className='Bgvideo' autoPlay loop muted playsInline>
        <source src={bgImage} type='video/mp4'/>
      </video>
      <FixedNavbar/>
      <FloatingNavbar/>
      <Home/>
      <Services/>
      <AboutTheCompany/>
      <MissionVission/>
      <OurNetworkVendors/>
      <OurSSVendors/>
      <OurCloudVendors/>
      <OurTractons/>
      <OurValuedCustomers/>
      <Footer/>
    </main>
  )
}


export default App
