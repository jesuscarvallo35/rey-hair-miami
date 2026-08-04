const services = [
  ["01", "Signature Cut", "A precise, considered cut finished with styling guidance for your everyday look."],
  ["02", "The Full Service", "Haircut, beard detail, hot towel, and the kind of reset that changes your whole week."],
  ["03", "Beard Sculpting", "Clean lines and thoughtful shaping, designed to complement your features."],
];

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="shell">
        <div className="section-heading">
          <div><p className="eyebrow">The experience</p><h2>Service with<br /><em>intention.</em></h2></div>
          <p>From the first consultation to the final detail, every appointment is a study in personal style.</p>
        </div>
        <div className="service-list">
          {services.map(([number, title, copy]) => <article className="service" key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div><span className="service__arrow">↗</span></article>)}
        </div>
      </div>
    </section>
  );
}
