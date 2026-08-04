const reviews = [
  ["Google Review", "Excellent service, professional atmosphere, and amazing attention to detail."],
  ["Google Review", "Best place for a fresh cut. Clean studio and great craftsmanship."],
  ["Google Review", "Highly recommended. Great experience from start to finish."],
];

export default function Reviews() {
  return (
    <section className="section reviews" id="reviews">
      <div className="shell">
        <div className="reviews__intro"><p className="eyebrow">Client notes</p><h2>Google <em>Reviews.</em></h2><div className="rating"><strong>5.0</strong><span>★★★★★</span><small>Google Rating</small></div></div>
        <div className="review-grid">
          {reviews.map(([name, quote]) => <figure className="review" key={quote}><span className="review__stars">★★★★★</span><blockquote>“{quote}”</blockquote><figcaption><strong>{name}</strong><small>Verified Google Review</small></figcaption></figure>)}
        </div>
        <div className="reviews__cta"><a className="button button--dark" href="https://www.google.com/search?q=rey+hair+salon" target="_blank" rel="noreferrer">Read all Google reviews <span>↗</span></a></div>
      </div>
    </section>
  );
}
