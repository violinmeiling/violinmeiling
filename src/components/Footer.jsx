import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-text">
          © {new Date().getFullYear()} Meiling Mathur
        </p>

        <p className="footer-text">
          Made with <span role="img" aria-label="coffee">☕</span> using Vite, React, and a bit of vanilla CSS
        </p>

        <div className="footer-links">
          <a href="/">Top</a>
          <a href="https://github.com/violinmeiling" target="_blank" rel="noreferrer">
            Github
          </a>
          <a href="https://linkedin.com/in/meilingmathur" target="_blank" rel="noreferrer">
            Linkedin
          </a>
        </div>
      </div>
    </footer>
  );
}