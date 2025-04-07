import './OurSSVendors.css'
import FortinetLogo from '../../assets/Fortinet.png'
import Kaspersky from '../../assets/kasperskylogo.png'
import TrendMicro from '../../assets/trend_micro.png'
import forcepoint from '../../assets/ForcePoint.png'
import CrowdStrike from '../../assets/CrowdStrike.png'
import eset from '../../assets/eset.png'
import cisco from '../../assets/ciscoLogo.jpg'
import veritas from '../../assets/Veritas.png'
import commvault from '../../assets/commvault.jpeg'
import Barracuda from '../../assets/barracuda.jpg'
import veeam from '../../assets/veeam.jpg'
import NetApp from '../../assets/NetApp.png'

export default function OurSSVendors() {
    return(
        <main id='OurSSVendors' className='SSVendorsMain'>
            <div className='SSVendorsTitleGroup'>
                <h2 className='SSVendorsTitle'>Our Security & Storage Vendors</h2>
                <div className='LineShape4'></div>
            </div>
            <body className='SSVBody'>
                <div className='CirclesRow1'>
                    <a href='https://www.fortinet.com/' className='Circle'>
                        <img src={FortinetLogo} alt="Fortinet" loading='lazy'/>
                    </a>
                    <a href='https://me.kaspersky.com/' className='Circle'>
                        <img src={Kaspersky} alt="Kaspersky" loading='lazy'/>
                    </a>
                    <a href='https://www.trendmicro.com/en_us/business.html' className='Circle'>
                        <img src={TrendMicro} alt="TrendMicro" loading='lazy'/>
                    </a>
                    <a href='https://www.forcepoint.com/' className='Circle'>
                        <img src={forcepoint} alt="ForcePoint" loading='lazy'/>
                    </a>
                </div>
                <div className='CirclesRow2'>
                    <a href='https://www.crowdstrike.com/' className='Circle'>
                        <img src={CrowdStrike} alt="CrowdStrike" loading='lazy'/>
                    </a>
                    <a href='https://www.eset.com/us/?srsltid=AfmBOooUWU9TtkTtO_ZINO4FnBFYU5sqwXL2_fOnJYuxgqgLdC7ooULc' className='Circle'>
                        <img src={eset} alt="eset" loading='lazy'/>
                    </a>
                    <a href='https://www.cisco.com/' className='Circle'>
                        <img src={cisco} alt="Cisco" loading='lazy'/>
                    </a>
                    <a href='https://www.veritas.com/' className='Circle'>
                        <img src={veritas} alt="Veritas" loading='lazy'/>
                    </a>
                </div>
                <div className='CirclesRow3'>
                    <a href='https://www.commvault.com/' className='Circle'>
                        <img src={commvault} alt="CommVault" loading='lazy'/>
                    </a>
                    <a href='https://www.barracuda.com/' className='Circle'>
                        <img src={Barracuda} alt="Barracuda" loading='lazy'/>
                    </a>
                    <a href='https://www.commvault.com/' className='Circle'>
                        <img src={veeam} alt="Veeam" loading='lazy'/>
                    </a>
                    <a href='https://www.netapp.com/' className='Circle'>
                        <img src={NetApp} alt="NetApp" loading='lazy'/>
                    </a>
                </div>
            </body>
        </main>
    )
}
