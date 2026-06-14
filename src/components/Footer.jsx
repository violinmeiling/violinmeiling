import { useState } from "react";
import "./Footer.css";

export default function Footer() {
  const [showBinary, setShowBinary] = useState(false);

  const binaryLines = [
    "01001101",
    "01100001",
    "01110000",
    "01101111",
    "00100000",
    "01010100",
    "01101111",
    "01100110",
    "01110101",
  ];

  return (
    <>
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
            <a
              href="https://github.com/violinmeiling"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://linkedin.com/in/meilingmathur"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>

            <a
  href="#"
  className="footer-link"
  onClick={(e) => {
    e.preventDefault();
    setShowBinary(true);
  }}
>
  ???
</a>
          </div>
        </div>
      </footer>

      {showBinary && (
        <div className="modal-overlay" onClick={() => setShowBinary(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setShowBinary(false)}
            >
              ×
            </button>

            <div className="binary-list">
              {binaryLines.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}