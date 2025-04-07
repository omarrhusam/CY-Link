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
                    <a href='' className='Row1Card1'>
                        <img src={SuazCanal} alt="" loading='lazy'/>
                        <h2>Suaz<br/>Canal</h2>
                    </a>
                    <a href='' className='Row1Card2'>
                        <img src={AAST} alt="" loading='lazy'/>
                        <h2>AAST</h2>
                    </a>
                    <a href='' className='Row1Card3'>
                        <img src={CACC} alt="" loading='lazy'/>
                        <h2>CACC Cargolinx</h2>
                    </a>
                </div>
                <div className='VCRow2'>
                    <a href='' className='Row2Card1'>
                        <img src={taqa} alt="" loading='lazy'/>
                        <h2>TAQA</h2>
                    </a>
                    <a href='' className='Row2Card2'>
                        <img src={natco} alt="" loading='lazy'/>
                        <h2>Natco</h2>
                    </a>
                    <a href='' className='Row2Card3'>
                        <img src={MisrItalia} alt="" loading='lazy'/>
                        <h2>Misr Italia</h2>
                    </a>
                </div>
                <div className='VCRow3'>
                    <a href='' className='Row3Card1'>
                        <img src={hospital} alt="" loading='lazy'/>
                        <h2>Nasaaem Hospital</h2>
                    </a>
                    <a href='' className='Row3Card2'>
                        <img src={arb} alt="" loading='lazy'/>
                        <h2>ARB Call Facilities</h2>
                    </a>
                    <a href='' className='Row3Card3'>
                        <img src={talabat} alt="" loading='lazy'/>
                        <h2>Talabat</h2>
                    </a>
                </div>
                <div className='VCRow4'>
                    <a href='' className='Row4Card1'>
                        <img src={mediterraneo} alt="" loading='lazy'/>
                        <h2>Mediterraneo</h2>
                    </a>
                    <a href='' className='Row4Card2'>
                        <img src={IDH} alt="" loading='lazy'/>
                        <h2>IDH</h2>
                    </a>
                    <a href='' className='Row4Card3'>
                        <img src={mazloum} alt="" loading='lazy'/>
                        <h2>Mazloum</h2>
                    </a>
                </div>
            </body>
        </main>
    )
}