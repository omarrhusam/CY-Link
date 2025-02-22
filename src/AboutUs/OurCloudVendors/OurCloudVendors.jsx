import './OurCloudVendors.css'
import MicrosoftAzura from '../../assets/Microsoft_Azure.png'
import aws from '../../assets/AWS.png'
import huawei from '../../assets/huawei2.png'

export default function OurCloudVendors() {
    return(
        <main id='OurCloudVendors' className='CVMain'>
            <div className='CVTitleGroup'>
                <h2 className='CVTitle'>Our Cloud Vendors</h2>
                <div className='LineShape5'></div>
            </div>
            <body className='CVBody'>
                <div className='CVCard1'>
                    <img src={MicrosoftAzura} alt="" />
                    <h2>Microsoft Azura</h2>
                </div>
                <div className='CVCard2'>
                    <img src={aws} alt="" />
                    <h2>Amazon Web Services</h2>
                </div>
                <div className='CVCard3'>
                    <img src={huawei} alt="" />
                    <h2>Huawei</h2>
                </div>
            </body>
        </main>
    )
}