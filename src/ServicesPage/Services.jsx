import './Services.css'
import img1 from '../assets/1.png'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'
import img4 from '../assets/4.png'
import img5 from '../assets/5.png'

export default function Services() {
    return(
        <main id='Services' className='Mainervices'>
            <div className='TitleGroup'>
                <h2 className='ServicesTitle'>Our Services</h2>
                <div className='LineShape'></div>
            </div>
            <body className='body'>
                <div className='Row1'>
                    <div className='Card1'>
                        <img src={img1} className='Img1' />
                        <p>Consultation<br/>& Implementation services</p>
                    </div>
                    <div className='Card1'>
                        <img src={img2} className='Img2'/>
                        <p>Penetration Testing<br/>& Security assessment services</p>
                    </div>
                    <div className='Card1'>
                        <img src={img3} className='Img3'/>
                        <p>Solution Design, Configuration<br/>& Finetuning services</p>
                    </div>
                </div>
                <div className='Row2'>
                    <div className='Card2'>
                        <img src={img4} className='Img4'/>
                        <p>Deployment of Various Cybersecurity  solutions<br/>(cloud, OT, SecOps solutions).</p>
                    </div>
                    <div className='Card2'>
                        <img src={img5} className='Img5'/>
                        <p>Educational Recourses & after sale support.</p>
                    </div>
                </div>
            </body>
        </main>
    )
}



