import './OurNetworkVendors.css'
import Fortinet from '../../assets/Fortinet.png'
import Aruba from '../../assets/aruba.png'
import Cisco from '../../assets/ciscoLogo.jpg'
import Huawei from '../../assets/huawei.jpg'
import F5 from '../../assets/F5.png'

export default function OurNetworkVendors(){
    return(
        <main id='OurNetworkVendors' className='MainNetworkVendors'>
            <div className='NetworkVendorsTitleGroup'>
                <h2 className='NetworkTitle'>Our Network Vendors</h2>
                <div className='LineShape3'></div>
            </div>
            <body className='NVBody'>
                <div className='NVRow1'>
                    <a href='https://www.fortinet.com/' className='Row1Cards'>
                        <img src={Fortinet} alt="Fortinet" loading='lazy'/>
                        <h2>Fortinet</h2>
                    </a>
                    <a href='https://www.hpe.com/us/en/networking/hpe-aruba-networking.html' className='Row1Cards'>
                        <img src={Aruba} alt="Aruba" loading='lazy'/>
                        <h2>Aruba</h2>
                    </a>
                </div>
                <div className='NVRow2'>
                    <a href='https://www.cisco.com/' className='Row2Cards'>
                        <img src={Cisco} alt="Cisco" loading='lazy'/>
                        <h2>Cisco</h2>
                    </a>
                    <a href='https://e.huawei.com/en/solutions/enterprise-network' className='Row2Cards'>
                        <img src={Huawei} alt="Huawei" loading='lazy'/>
                        <h2>Huawei</h2>
                    </a>
                </div>
                <div className='NVRow3'>
                <a href='' className='Row3Cards'>
                        <img src={F5} alt="F5" loading='lazy'/>
                        <h2>F5</h2>
                </a>
                </div>
            </body>
        </main>
    )
}