export default function About() {
  return (
    <section className="studio" id="studio">
      <div className="studio__visual image-slot image-slot--portrait" style={{ overflow: "hidden" }}>
        <img src="/IMG_5413.PNG" alt="Inside the Rey Hair Miami studio" style={{ position: "relative", zIndex: 1, width: "100%", height: "100%", minHeight: 600, display: "block", objectFit: "cover" }} />
      </div>
      <div className="studio__content">
        <p className="eyebrow">Meet Rey</p>
        <h2>More than a<br /><em>fresh cut.</em></h2>
        <p>Rey Hair Miami is a private barber studio for men’s care and styling. We offer personalized haircuts, classic and royal shaves with hot and cold towels, facial treatments, children’s grooming, hair treatments, full color and highlights, plus a curated range of gels, pomades, and waxes.</p>
        <a className="text-link" href="#location">Visit the studio <span>→</span></a>
      </div>
    </section>
  );
}
