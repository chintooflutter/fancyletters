import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <Link to="/" style={styles.logo}>
          FancyLetters<span style={styles.dot}>.org</span>
        </Link>

        <nav style={styles.nav}>
          <Link to="/about" style={styles.navLink}>About</Link>
          <Link to="/privacy" style={styles.navLink}>Privacy</Link>
          <Link to="/contact" style={styles.navLink}>Contact</Link>
        </nav>
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
  nav: {
    display: "flex",
    gap: "1.5rem",
  },
  navLink: {
    fontSize: "1rem",
    textDecoration: "none",
    color: "#333",
    transition: "color 0.2s ease",
  },
};