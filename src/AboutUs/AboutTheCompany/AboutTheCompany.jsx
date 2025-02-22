import './AboutTheCompany.css'
import CYLogo from '../../assets/logo.png'

export default function AboutTheCompany() {
    return (
        <main id='AboutTheCompany' className='AboutTheCompany'>
            <div className='Text'>
                <h1>About The Company</h1>
                <p>CY-LINK specializes in the distribution and<br/>
                integration of networking,oybersecurity,and<br/>
                cloud solutions.We aim to empower<br/>
                businesses of all sizes with<br/>
                robust,secure,and scalable technologies<br/>
                to enhance their IT infrastructure<br/>
                and protect against cyber threats.</p>
            </div>
            <img src={CYLogo} alt="CY-Link" className='Logo'/>
        </main>
    )
}