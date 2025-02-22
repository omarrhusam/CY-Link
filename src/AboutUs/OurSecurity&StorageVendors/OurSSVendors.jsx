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
                    <div className='Circle'>
                        <img src={FortinetLogo} alt="Fortinet" />
                    </div>
                    <div className='Circle'>
                        <img src={Kaspersky} alt="Kaspersky" />
                    </div>
                    <div className='Circle'>
                        <img src={TrendMicro} alt="TrendMicro" />
                    </div>
                    <div className='Circle'>
                        <img src={forcepoint} alt="ForcePoint" />
                    </div>
                </div>
                <div className='CirclesRow2'>
                    <div className='Circle'>
                        <img src={CrowdStrike} alt="CrowdStrike" />
                    </div>
                    <div className='Circle'>
                        <img src={eset} alt="eset" />
                    </div>
                    <div className='Circle'>
                        <img src={cisco} alt="Cisco" />
                    </div>
                    <div className='Circle'>
                        <img src={veritas} alt="Veritas" />
                    </div>
                </div>
                <div className='CirclesRow3'>
                    <div className='Circle'>
                        <img src={commvault} alt="CommVault" />
                    </div>
                    <div className='Circle'>
                        <img src={Barracuda} alt="Barracuda" />
                    </div>
                    <div className='Circle'>
                        <img src={veeam} alt="Veeam" />
                    </div>
                    <div className='Circle'>
                        <img src={NetApp} alt="NetApp" />
                    </div>
                </div>
            </body>
        </main>
    )
}
