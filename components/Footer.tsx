import Brand from "./Brand";
export default function Footer() { return <footer className="footer"><div className="shell footer__inner"><Brand light /><p>© {new Date().getFullYear()} Rey Hair Miami. All rights reserved.</p><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram ↗</a></div></footer>; }
