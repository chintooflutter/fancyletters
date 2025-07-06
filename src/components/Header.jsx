import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Check if current domain is a subdomain
  const isSubdomain = window.location.hostname.split(".").length > 2;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        {isSubdomain ? (
          <a href="https://fancyletters.org" style={styles.logo}>
            FancyLetters<span style={styles.dot}>.org</span>
          </a>
        ) : (
          <Link to="/" style={styles.logo}>
            FancyLetters<span style={styles.dot}>.org</span>
          </Link>
        )}

        {isMobile && (
          <button onClick={() => setIsOpen(!isOpen)} style={styles.hamburger}>
            ☰
          </button>
        )}

        {(isOpen || !isMobile) && (
          <nav style={isMobile ? styles.navMobile : styles.navDesktop}>
            {isSubdomain ? (
              <>
                <a href="https://fancyletters.org/about" style={styles.navLink}>About</a>
                <a href="https://fancyletters.org/privacy" style={styles.navLink}>Privacy</a>
                <a href="https://fancyletters.org/contact" style={styles.navLink}>Contact</a>
              </>
            ) : (
              <>
                <Link to="/about" style={styles.navLink} onClick={() => setIsOpen(false)}>About</Link>
                <Link to="/privacy" style={styles.navLink} onClick={() => setIsOpen(false)}>Privacy</Link>
                <Link to="/contact" style={styles.navLink} onClick={() => setIsOpen(false)}>Contact</Link>
              </>
            )}
          </nav>
        )}
      </div>
    </header>
  );
}

const styles = {
  header: {
    padding: "1rem 0",
    borderBottom: "1px solid #eee",
    backgroundColor: "#fff",
    position: "sticky",
    top: 0,
    zIndex: 10,
  },
  container: {
    maxWidth: "960px",
    margin: "0 auto",
    padding: "0 1.5rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    textDecoration: "none",
    color: "#000",
  },
  dot: {
    color: "#0070f3",
  },
  hamburger: {
    background: "none",
    border: "none",
    fontSize: "1.5rem",
    cursor: "pointer",
    color: "#333",
    marginLeft: "auto",
  },
  navDesktop: {
    display: "flex",
    gap: "1.5rem",
  },
  navMobile: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    marginTop: "1rem",
    gap: "1rem",
  },
  navLink: {
    fontSize: "1rem",
    textDecoration: "none",
    color: "#333",
    padding: "0.5rem 0",
    transition: "color 0.2s ease",
  },
};
