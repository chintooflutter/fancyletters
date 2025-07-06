import { useState } from "react";

export default function Design({ title, fontStyles }) {
  const [input, setInput] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [copiedText, setCopiedText] = useState("");

  const categories = ["All", ...new Set(fontStyles.map((s) => s.category))];

  const filteredStyles =
    activeCategory === "All"
      ? fontStyles
      : fontStyles.filter((s) => s.category === activeCategory);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(""), 1500); // Clear after 1.5s
  };

  return (
    <main style={styles.main}>
      {/* Title */}
      <header style={styles.header}>
        <h1 style={styles.title}>{title} ✨</h1>
        <p style={styles.description}>
          Type your text below and instantly see it transformed into cute font styles. Copy and paste wherever you want!
        </p>
      </header>

      {/* Category Filter */}
      <div style={styles.categoryWrap}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              ...styles.button,
              ...(activeCategory === cat ? styles.activeButton : {}),
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Input */}
      <div style={styles.inputWrap}>
        <label htmlFor="input" style={styles.label}>With Text</label>
        <textarea
          id="input"
          rows={3}
          placeholder="Type your text here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={styles.textarea}
        />
      </div>

      {/* Output List */}
      <div style={styles.outputList}>
        {filteredStyles.map(({ name, transform }) => {
          const output = transform(input);
          return (
            <div key={name} style={styles.card}>
              <div style={styles.cardLeft}>
                <p style={styles.fontName}>{name}</p>
                <p style={styles.outputText}>{output}</p>
              </div>
              <div style={styles.copyWrapper}>
                <button
                  onClick={() => handleCopy(output)}
                  style={styles.copyButton}
                >
                  Copy
                </button>
                {copiedText === output && (
                  <span style={styles.copiedText}>Copied!</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        © {new Date().getFullYear()} FancyLetters.org — Make Your Text Fancy ✨
      </footer>
    </main>
  );
}

// Inline Styles
const styles = {
  main: {
    maxWidth: "960px",
    margin: "0 auto",
    padding: "2rem 1rem",
  },
  header: {
    textAlign: "center",
    marginBottom: "2rem",
  },
  title: {
    fontSize: "2.5rem",
    color: "#ec4899",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  },
  description: {
    fontSize: "1.1rem",
    color: "#555",
    maxWidth: "600px",
    margin: "0 auto",
  },
  categoryWrap: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "0.5rem",
    marginBottom: "2rem",
  },
  button: {
    padding: "0.5rem 1rem",
    fontSize: "0.875rem",
    border: "1px solid #ccc",
    borderRadius: "999px",
    background: "#f3f4f6",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
  },
  activeButton: {
    backgroundColor: "#ec4899",
    color: "#fff",
    borderColor: "#ec4899",
  },
  inputWrap: {
    maxWidth: "640px",
    margin: "0 auto 3rem",
  },
  label: {
    display: "block",
    marginBottom: "0.5rem",
    fontWeight: "600",
    fontSize: "0.875rem",
    color: "#333",
  },
  textarea: {
    width: "100%",
    padding: "1rem",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "1px solid #ccc",
    resize: "none",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    outline: "none",
  },
  outputList: {
    display: "grid",
    gap: "1rem",
  },
  card: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    border: "1px solid #eee",
    borderRadius: "10px",
    padding: "1rem",
    backgroundColor: "#fff",
    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
  },
  cardLeft: {
    flex: 1,
    marginRight: "1rem",
  },
  fontName: {
    fontSize: "0.75rem",
    color: "#999",
    marginBottom: "0.25rem",
  },
  outputText: {
    fontSize: "1.25rem",
    wordBreak: "break-word",
    whiteSpace: "pre-wrap",
    lineHeight: 1.5,
  },
  copyWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: "0.25rem",
  },
  copyButton: {
    padding: "0.4rem 1rem",
    borderRadius: "6px",
    border: "1px solid #ddd",
    background: "#ec4899",
    color: "#fff",
    fontSize: "0.875rem",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.2s",
  },
  copiedText: {
    fontSize: "0.75rem",
    color: "#16a34a",
    fontWeight: "bold",
  },
  footer: {
    marginTop: "4rem",
    textAlign: "center",
    fontSize: "0.875rem",
    color: "#aaa",
  },
};
