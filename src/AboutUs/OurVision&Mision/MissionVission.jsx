import './MissionVission.css'

export default function MissionVission() {
    return(
        <main id='OurVision&Mission' className='ourVisionMissionMain'>
             <div className='MVTitleGroup'>
                <h2 className='MVTitle'>Our Mission & Vision</h2>
                <div className='LineShape2'></div>
            </div>
            <body className='Body'>
                <div className='MissionCard'>
                    <h3>Mission</h3>
                    <p>CY-LINK is poised to excel in the rapidly
                    evolving fields of networking,
                    cybersecurity and cloud computing by
                    offering comprehensive, tailored
                    solutions backed by expert advice and
                    support. By focusing on client needs,
                    leveraging our extensive knowledge and
                    partnerships, and embracing continuous
                    improvement</p>
                </div>
                <div className='VisionCard'>
                    <h3>Vision</h3>
                    <p>Focus on Cybersecurity:<br/>
                    <br/>
                    As cyber threats evolve rapidly,
                    our primary focus is on offering cutting-edge
                    cybersecurity solutions that integrate AI and
                    machine learning to detect and respond to
                    threats in real-time.<br/>
                    <br/>
                    Cloud Services Expertise:<br/>
                    <br/>
                    We specialize in deploying and optimizing
                    cloud services, leveraging hybrid cloud
                    architectures to reduce costs
                    and improve efficiency
                    </p>
                </div>
            </body>
        </main>
    )
}