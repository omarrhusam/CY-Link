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
                    <div className='Row1Cards'>
                        <img src={Fortinet} alt="Fortinet" />
                        <h2>Fortinet</h2>
                    </div>
                    <div className='Row1Cards'>
                        <img src={Aruba} alt="Aruba" />
                        <h2>Aruba</h2>
                    </div>
                </div>
                <div className='NVRow2'>
                    <div className='Row2Cards'>
                        <img src={Cisco} alt="Cisco" />
                        <h2>Cisco</h2>
                    </div>
                    <div className='Row2Cards'>
                        <img src={Huawei} alt="Huawei" />
                        <h2>Huawei</h2>
                    </div>
                </div>
                <div className='NVRow3'>
                <div className='Row3Cards'>
                        <img src={F5} alt="F5" />
                        <h2>F5</h2>
                    </div>
                </div>
            </body>
        </main>
    )
}