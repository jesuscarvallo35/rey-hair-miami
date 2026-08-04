export default function Brand({ light = false }: { light?: boolean }) {
  return (
    <a className={`brand ${light ? "brand--light" : ""}`} href="#top" aria-label="Rey Hair Miami home">
      <span className="brand__mark">RH</span>
      <span className="brand__type">
        <strong>REY HAIR</strong>
        <small>MIAMI</small>
      </span>
    </a>
  );
}
