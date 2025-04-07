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
                <a href='https://azure.microsoft.com/en-us/' className='CVCard1'>
                    <img src={MicrosoftAzura} alt="" loading='lazy'/>
                    <h2>Microsoft Azura</h2>
                </a>
                <a href='https://aws.amazon.com/' className='CVCard2'>
                    <img src={aws} alt="" loading='lazy'/>
                    <h2>Amazon Web Services</h2>
                </a>
                <a href='https://www.huaweicloud.com/intl/en-us/' className='CVCard3'>
                    <img src={huawei} alt="" loading='lazy'/>
                    <h2>Huawei</h2>
                </a>
            </body>
        </main>
    )
}