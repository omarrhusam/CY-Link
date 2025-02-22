import { useState } from "react";
import "./OurTractions.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export default function OurTractons() {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
      <main id="OurTraction" className="TractionsMain">
        <div className="TractionsTitleGroup">
          <h2 className="TractionsTitle">Our Tractions</h2>
          <div className="LineShape6"></div>
        </div>
        <body className="TractionBody">
          <div className="NetRevenueCard">
            <h2>Net Revenue (In USD)</h2>
            <p>
              ${counterOn && <CountUp start={0} end={500000} duration={3} delay={0} />}
            </p>
          </div>
          <div className="CSCard">
            <h2>Customers Served</h2>
            <p>
              {counterOn && <CountUp start={0} end={20} duration={3} delay={0} />}+
            </p>
          </div>
          <div className="TPVCard">
            <h2>Total Partnerships with Vendors</h2>
            <p>
              {counterOn && <CountUp start={0} end={15} duration={3} delay={0} />}+
            </p>
          </div>
        </body>
      </main>
    </ScrollTrigger>
  );
}
