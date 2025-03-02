import './MissionVission.css'

export default function MissionVission() {
    return(
        <main id='OurVision&Mission' className='ourVisionMissionMain'>
             <div className='MVTitleGroup'>
                <h2 className='MVTitle'>Our Vision & Mission</h2>
                <div className='LineShape2'></div>
            </div>
            <body className='Body'>
                <div className='MissionCard'>
                    <h3>Mission</h3>
                    <p>CY-LINK is poised to excel in the rapidly<br/>
                    evolving fields of networking,<br/>
                    cybersecurity and cloud computing by<br/>
                    offering comprehensive, tailored<br/>
                    solutions backed by expert advice and<br/>
                    support. By focusing on client needs,<br/>
                    leveraging our extensive knowledge and<br/>
                    partnerships, and embracing continuous<br/>
                    improvement</p>
                </div>
                <div className='VisionCard'>
                    <h3>Vision</h3>
                    <p>Focus on Cybersecurity:<br/>
                    As cyber threats evolve rapidly,<br/>
                    our primary focus is on offering cutting-edge<br/>
                    cybersecurity solutions that integrate AI and<br/>
                    machine learning to detect and respond to<br/>
                    threats in real-time.<br/>
                    <br/>
                    Cloud Services Expertise:<br/>
                    We specialize in deploying and optimizing<br/>
                    cloud services, leveraging hybrid cloud<br/>
                    architectures to reduce costs<br/>
                    and improve efficiency
                    </p>
                </div>
            </body>
        </main>
    )
}