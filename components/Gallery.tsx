const photos = [
  ["/rey1.webp", "Rey Hair Miami client haircut"],
  ["/rey2.webp", "Precision fade haircut"],
  ["/rey3.webp", "Long hair styling"],
  ["/rey4.webp", "Curly hair fade"],
  ["/rey5.webp", "Styled client haircut"],
];

export default function Gallery() {
  return (
    <section id="gallery" style={{ padding: "110px 0", background: "#f6f4f0" }}>
      <div style={{ width: "min(1180px, calc(100% - 40px))", margin: "0 auto" }}>
        <p style={{ fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "#696761" }}>Our work</p>
        <h2 style={{ fontFamily: "Georgia, serif", fontWeight: 500, fontSize: "clamp(2.7rem, 5vw, 5rem)", lineHeight: .95, margin: "0 0 45px" }}>Made to be<br /><em>noticed.</em></h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
          {photos.map(([src, alt]) => <img key={src} src={src} alt={alt} style={{ width: "100%", height: 390, objectFit: "cover" }} />)}
        </div>
      </div>
    </section>
  );
}
