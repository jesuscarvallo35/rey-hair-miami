export default function Brand({ light = false }: { light?: boolean }) {
  return (
    <a className={`brand ${light ? "brand--light" : ""}`} href="#top" aria-label="Rey Hair Miami home">
      <img src="/IMG_5410.PNG" alt="Rey Hair Miami" style={{ width: 54, height: 54, borderRadius: "50%", objectFit: "cover", display: "block" }} />
    </a>
  );
}
