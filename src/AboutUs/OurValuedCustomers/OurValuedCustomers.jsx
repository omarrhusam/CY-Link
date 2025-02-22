import './OurValuedCustomers.css'
import SuazCanal from '../../assets/suazCanal.jpg'
import AAST from '../../assets/AAST.png'
import CACC from '../../assets/cacc.jpg'
import taqa from '../../assets/taqa.jpeg'
import natco from '../../assets/natco.png'
import MisrItalia from '../../assets/MisrItalia.jpg'
import hospital from '../../assets/hospital.png'
import arb from '../../assets/arb.jpeg'
import talabat from '../../assets/talabat.jpg'
import mediterraneo from '../../assets/mediterraneo.png'
import IDH from '../../assets/IDH.png'
import mazloum from '../../assets/mazloum.png'

export default function OurValuedCustomers() {
    return(
        <main id='OurValuedCustomers' className='VCMain'>
             <div className='VCTitleGroup'>
                <h2 className='VCTitle'>Our Valued Customers</h2>
                <div className='LineShape7'></div>
            </div>
            <body className='VCBody'>
                <div className='VCRow1'>
                    <div className='Row1Card1'>
                        <img src={SuazCanal} alt="" />
                        <h2>Suaz Canal</h2>
                    </div>
                    <div className='Row1Card2'>
                        <img src={AAST} alt="" />
                        <h2>AAST</h2>
                    </div>
                    <div className='Row1Card3'>
                        <img src={CACC} alt="" />
                        <h2>CACC Cargolinx</h2>
                    </div>
                </div>
                <div className='VCRow2'>
                    <div className='Row2Card1'>
                        <img src={taqa} alt="" />
                        <h2>TAQA</h2>
                    </div>
                    <div className='Row2Card2'>
                        <img src={natco} alt="" />
                        <h2>Natco</h2>
                    </div>
                    <div className='Row2Card3'>
                        <img src={MisrItalia} alt="" />
                        <h2>Misr Italia</h2>
                    </div>
                </div>
                <div className='VCRow3'>
                    <div className='Row3Card1'>
                        <img src={hospital} alt="" />
                        <h2>Nasaaem Hospital</h2>
                    </div>
                    <div className='Row3Card2'>
                        <img src={arb} alt="" />
                        <h2>ARB Call Facilities</h2>
                    </div>
                    <div className='Row3Card3'>
                        <img src={talabat} alt="" />
                        <h2>Talabat</h2>
                    </div>
                </div>
                <div className='VCRow4'>
                    <div className='Row4Card1'>
                        <img src={mediterraneo} alt="" />
                        <h2>Mediterraneo</h2>
                    </div>
                    <div className='Row4Card2'>
                        <img src={IDH} alt="" />
                        <h2>IDH</h2>
                    </div>
                    <div className='Row4Card3'>
                        <img src={mazloum} alt="" />
                        <h2>Mazloum</h2>
                    </div>
                </div>
            </body>
        </main>
    )
}