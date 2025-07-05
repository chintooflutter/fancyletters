import { useState } from "react";

export default function Home() {
  const styles = [
    { name: "Cute Fonts", preview: "ⓒⓤⓣⓔ", subdomain: "cutefonts" },
    { name: "Zalgo Text", preview: "Ḧ̴̱̞́̾e̵̠͎͠l̶̺̦̾l̸̍ͅo̴̡", subdomain: "zalgotext" },
    { name: "Cursive Fonts", preview: "𝓗𝓮𝓵𝓵𝓸", subdomain: "cursivefonts" },
    { name: "Pretty Text", preview: "P҉R҉E҉T҉T҉Y", subdomain: "prettytext" },
    { name: "Cool Fonts", preview: "C͟O͟O͟L͟", subdomain: "cool" },
    { name: "Font Changer", preview: "Fσит Cнαиgєя", subdomain: "fontchanger" },    
    { name: "Tattoo Fonts", preview: "𝕿𝖆𝖙𝖙𝖔𝖔", subdomain: "tattoofonts" },
    { name: "Calligraphy Fonts", preview: "𝒞𝒶𝓁𝓁𝒾𝑔𝓇𝒶𝓅𝒽𝓎", subdomain: "calligraphyfonts" },
    { name: "Aesthetic Text", preview: "H e l l o", subdomain: "aesthetictext" },
    { name: "Bold Text", preview: "𝗕𝗢𝗟𝗗", subdomain: "boldtext" },
    { name: "Italics Text", preview: "𝑖𝑡𝑎𝑙𝑖𝑐", subdomain: "italic" },
    { name: "Tiny Text", preview: "ᴛɪɴʏ", subdomain: "tiny" },
    { name: "Strikethrough Text", preview: "̶H̶e̶l̶l̶o̶", subdomain: "strikethrough" },
    { name: "Capitalization Tool", preview: "Title Case", subdomain: "capitalize" },
    { name: "Title Generator", preview: "The Fancy Title", subdomain: "title" },
    { name: "Bubble Letters", preview: "ⓗⓔⓛⓛⓞ", subdomain: "bubble" },
    { name: "Font Generator (Main)", preview: "Fancy Text", subdomain: "main" },
    { name: "PNG Text Generator", preview: "🅟🅝🅖", subdomain: "png" },
    { name: "Dummy Text Generator", preview: "Lorem ipsum", subdomain: "dummy" },
    { name: "ASCII Text Generator", preview: "▀▄▀▄▀▄", subdomain: "ascii" },
    { name: "Anagram Generator", preview: "silent → listen", subdomain: "anagram" },
    { name: "Random Letter Generator", preview: "Z, X, Q", subdomain: "random" },
    { name: "Morse Code Translator", preview: "... --- ...", subdomain: "morse" },
    { name: "Binary Translator", preview: "01001000", subdomain: "binary" },
    { name: "Snapchat Font", preview: "𝓢𝓷𝓪𝓹", subdomain: "snapchat" },
    { name: "Fortnite Font", preview: "𝐅𝐨𝐫𝐭𝐧𝐢𝐭𝐞", subdomain: "fortnite" },
    { name: "Character Counter", preview: "123 characters", subdomain: "counter" },
    { name: "Symbol Generator", preview: "★✿❖☂", subdomain: "symbols" },
    { name: "Christmas Fonts", preview: "🎄𝒳𝓂𝒶𝓈🎅", subdomain: "christmas" },
    { name: "Subscript Generator", preview: "H₂O", subdomain: "subscript" },
    { name: "Weird Text", preview: "ωεเя๔ тεאt", subdomain: "weird" }
  ];

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(styles.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentStyles = styles.slice(startIndex, startIndex + itemsPerPage);

  return (
    <main style={stylesMain.container}>
      <section style={stylesMain.hero}>
        <h1 style={stylesMain.title}>Fancy Letters Generator</h1>
        <p style={stylesMain.subtitle}>
          Stylish and Unicode font generators for Instagram, Snapchat, Fortnite & more!
        </p>
      </section>

      <section style={stylesMain.grid}>
        {currentStyles.map((style) => (
          <a
            key={style.subdomain}
            href={`https://${style.subdomain}.fancyletters.org`}
            style={stylesMain.card}
          >
            <h2 style={stylesMain.cardTitle}>{style.name}</h2>
            <p style={stylesMain.cardPreview}>{style.preview}</p>
            <p style={stylesMain.cardLink}>Try Now →</p>
          </a>
        ))}
      </section>

      <section style={stylesMain.pagination}>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          ⟵ Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next ⟶
        </button>
      </section>

      <footer style={stylesMain.footer}>
        <p>© {new Date().getFullYear()} FancyLetters.org — Make Your Text Fancy ✨</p>
      </footer>
    </main>
  );
}

const stylesMain = {
  container: {
    fontFamily: "'Segoe UI', sans-serif",
    padding: "2rem",
    maxWidth: "960px",
    margin: "0 auto",
    textAlign: "center",
  },
  hero: {
    marginBottom: "2rem",
  },
  title: {
    fontSize: "2.6rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#555",
    maxWidth: "600px",
    margin: "0 auto",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "1.5rem",
    marginBottom: "2rem",
  },
  card: {
    border: "1px solid #eee",
    borderRadius: "8px",
    padding: "1.5rem",
    textAlign: "center",
    textDecoration: "none",
    color: "#000",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
  },
  cardTitle: {
    fontSize: "1.3rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  },
  cardPreview: {
    fontSize: "1.4rem",
    marginBottom: "0.5rem",
  },
  cardLink: {
    color: "#0070f3",
    fontWeight: "bold",
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "1.5rem",
    marginBottom: "2rem",
  },
  footer: {
    fontSize: "0.9rem",
    color: "#777",
  },
};