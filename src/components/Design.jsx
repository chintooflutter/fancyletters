import { useState } from "react";

export default function Design({ title, fontStyles }) {
  const [input, setInput] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [copiedIndex, setCopiedIndex] = useState(null);

  const categories = ["All", ...new Set(fontStyles.map((s) => s.category))];

  const filteredStyles =
    activeCategory === "All"
      ? fontStyles
      : fontStyles.filter((s) => s.category === activeCategory);

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  return (
    <main style={styles.main}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.title}>{title} ✨</h1>
        <p style={styles.description}>
          Type your text below and instantly see it transformed into cute font styles. Copy and paste wherever you want!
        </p>
      </header>

      {/* Category Buttons */}
      <div style={styles.categoryWrap}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              ...styles.categoryButton,
              ...(activeCategory === cat ? styles.activeCategory : {}),
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Input */}
      <div style={styles.inputWrap}>
        <label htmlFor="input" style={styles.label}>
          With Text
        </label>
        <textarea
          id="input"
          rows={3}
          placeholder="Type your text here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={styles.textarea}
        />
      </div>

      {/* Font Output */}
      <div style={styles.outputList}>
        {filteredStyles.map(({ name, transform }, index) => {
          const output = transform(input);
          return (
            <div key={name} style={styles.card}>
              <div style={styles.cardLeft}>
                <p style={styles.fontName}>{name}</p>
                <p style={styles.outputText}>{output}</p>
              </div>
              <button
                onClick={() => handleCopy(output, index)}
                style={{
                  ...styles.copyButton,
                  backgroundColor:
                    copiedIndex === index ? "#ec4899" : "#f9fafb",
                  color: copiedIndex === index ? "#fff" : "#000",
                  borderColor:
                    copiedIndex === index ? "#ec4899" : "#ddd",
                }}
              >
                {copiedIndex === index ? "Copied!" : "Copy"}
              </button>
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

const styles = {
  main: {
    maxWidth: "960px",
    margin: "0 auto",
    padding: "1.5rem 1rem",
  },
  header: {
    textAlign: "center",
    marginBottom: "2rem",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#ec4899",
    marginBottom: "0.5rem",
  },
  description: {
    fontSize: "1rem",
    color: "#555",
    maxWidth: "600px",
    margin: "0 auto",
  },
  categoryWrap: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "0.5rem",
    marginBottom: "1.5rem",
  },
  categoryButton: {
    padding: "0.5rem 1rem",
    fontSize: "0.875rem",
    border: "1px solid #ccc",
    borderRadius: "999px",
    backgroundColor: "#f3f4f6",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
  },
  activeCategory: {
    backgroundColor: "#ec4899",
    color: "#fff",
    borderColor: "#ec4899",
  },
  inputWrap: {
    maxWidth: "640px",
    margin: "0 auto 2.5rem",
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
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    border: "1px solid #eee",
    borderRadius: "10px",
    padding: "1rem",
    backgroundColor: "#fff",
    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
  },
  cardLeft: {
    marginBottom: "0.75rem",
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
  copyButton: {
    alignSelf: "flex-start",
    padding: "0.5rem 1.25rem",
    borderRadius: "6px",
    border: "1px solid #ddd",
    fontSize: "0.875rem",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
  },
  footer: {
    marginTop: "3rem",
    textAlign: "center",
    fontSize: "0.875rem",
    color: "#aaa",
  },
};
