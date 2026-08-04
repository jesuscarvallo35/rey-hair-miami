const hours = [
  ["Monday", "12–7 PM"],
  ["Tuesday", "12–7 PM"],
  ["Wednesday", "12–7 PM"],
  ["Thursday", "12–7 PM"],
  ["Friday", "12–7 PM"],
  ["Saturday", "10 AM–6 PM"],
  ["Sunday", "11 AM–6 PM"],
];

export default function Location() {
  return (
    <section className="location" id="location">
      <div className="location__details">
        <p className="eyebrow eyebrow--light">Find us</p>
        <h2>Come in.<br /><em>Feel at home.</em></h2>
        <p>11336 W State Rd 84, Ste 3<br />Davie, FL 33325</p>
        <div className="hours" aria-label="Business hours">
          {hours.map(([day, time]) => <p key={day}><span>{day}</span><strong>{time}</strong></p>)}
        </div>
        <a className="button button--light" href="https://www.google.com/maps/search/?api=1&query=Rey+Hair+Miami+11336+W+State+Rd+84+Davie+FL" target="_blank" rel="noreferrer">Get directions <span>↗</span></a>
      </div>
      <div className="map-placeholder" role="img" aria-label="Map location placeholder"><div className="map-placeholder__grid" /><div className="map-pin">RH</div><span>Davie, Florida</span></div>
    </section>
  );
}
