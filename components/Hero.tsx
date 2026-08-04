export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__image image-slot image-slot--hero" role="img" aria-label="Salon interior photo placeholder" />
      <div className="hero__veil" />
      <div className="hero__content shell">
        <p className="eyebrow eyebrow--light">Davie, Florida</p>
        <h1>Crafted for your<br /><em>best look.</em></h1>
        <p className="hero__copy">Precision grooming and a refined salon experience, tailored to the way you show up.</p>
        <a className="button button--light" href="#booking">Reserve your chair <span>↗</span></a>
      </div>
      <a className="hero__scroll" href="#services">Scroll to discover <span>↓</span></a>
    </section>
  );
}
