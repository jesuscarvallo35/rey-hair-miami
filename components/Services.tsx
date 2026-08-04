const services = [
  {
    number: "01",
    title: "Haircuts",
    copy: "Precision cuts shaped around your features, style, and routine.",
    items: ["Custom Cut", "Fade Cut", "Scissor Cut", "Long Haircut", "Military Haircut", "Kids Cuts", "Hair Shape Up"],
  },
  {
    number: "02",
    title: "Hair Care",
    copy: "Thoughtful care and styling for healthy hair at every length and texture.",
    items: ["Shampoo & Conditioning", "Hair Coloring", "Hair Straightening", "Curly Hair Services"],
  },
  {
    number: "03",
    title: "Grooming",
    copy: "Refined details and classic techniques for a clean, confident finish.",
    items: ["Beard Conditioning", "Shave", "Straight Razor Shave"],
  },
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
          {services.map((service) => (
            <article className="service" key={service.number}>
              <span>{service.number}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
                <ul className="service__items">
                  {service.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
              <span className="service__arrow">↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
