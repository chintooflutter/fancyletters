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
              <div style={styles.cardContent}>
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
    padding: "1rem",
    "@media (min-width: 768px)": {
      padding: "1.5rem",
    },
  },
  header: {
    textAlign: "center",
    marginBottom: "1.5rem",
    "@media (min-width: 768px)": {
      marginBottom: "2rem",
    },
  },
  title: {
    fontSize: "1.75rem",
    fontWeight: "bold",
    color: "#ec4899",
    marginBottom: "0.5rem",
    lineHeight: "1.2",
    "@media (min-width: 768px)": {
      fontSize: "2rem",
    },
    "@media (min-width: 1024px)": {
      fontSize: "2.25rem",
    },
  },
  description: {
    fontSize: "0.875rem",
    color: "#555",
    maxWidth: "600px",
    margin: "0 auto",
    lineHeight: "1.5",
    padding: "0 1rem",
    "@media (min-width: 768px)": {
      fontSize: "1rem",
      padding: "0",
    },
  },
  categoryWrap: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "0.5rem",
    marginBottom: "1.5rem",
    padding: "0 0.5rem",
    "@media (min-width: 768px)": {
      gap: "0.75rem",
      padding: "0",
    },
  },
  categoryButton: {
    padding: "0.5rem 0.75rem",
    fontSize: "0.75rem",
    border: "1px solid #ccc",
    borderRadius: "999px",
    backgroundColor: "#f3f4f6",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
    whiteSpace: "nowrap",
    minWidth: "fit-content",
    "@media (min-width: 768px)": {
      padding: "0.5rem 1rem",
      fontSize: "0.875rem",
    },
    "@media (hover: hover)": {
      ":hover": {
        backgroundColor: "#e5e7eb",
        transform: "translateY(-1px)",
      },
    },
  },
  activeCategory: {
    backgroundColor: "#ec4899",
    color: "#fff",
    borderColor: "#ec4899",
  },
  inputWrap: {
    maxWidth: "640px",
    margin: "0 auto 2rem",
    padding: "0 0.5rem",
    "@media (min-width: 768px)": {
      marginBottom: "2.5rem",
      padding: "0",
    },
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
    padding: "0.75rem",
    fontSize: "0.875rem",
    borderRadius: "8px",
    border: "1px solid #ccc",
    resize: "none",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    outline: "none",
    fontFamily: "inherit",
    "@media (min-width: 768px)": {
      padding: "1rem",
      fontSize: "1rem",
    },
    ":focus": {
      borderColor: "#ec4899",
      boxShadow: "0 0 0 3px rgba(236, 72, 153, 0.1)",
    },
  },
  outputList: {
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
    padding: "0 0.5rem",
    "@media (min-width: 768px)": {
      gap: "1rem",
      padding: "0",
    },
  },
  card: {
    border: "1px solid #eee",
    borderRadius: "10px",
    padding: "1rem",
    backgroundColor: "#fff",
    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
    transition: "all 0.2s ease-in-out",
    "@media (hover: hover)": {
      ":hover": {
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        transform: "translateY(-1px)",
      },
    },
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
    "@media (min-width: 640px)": {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: "1rem",
    },
  },
  cardLeft: {
    flex: "1",
    minWidth: "0",
  },
  fontName: {
    fontSize: "0.75rem",
    color: "#999",
    marginBottom: "0.25rem",
    fontWeight: "500",
  },
  outputText: {
    fontSize: "1rem",
    wordBreak: "break-word",
    whiteSpace: "pre-wrap",
    lineHeight: "1.5",
    "@media (min-width: 768px)": {
      fontSize: "1.25rem",
    },
  },
  copyButton: {
    alignSelf: "flex-start",
    padding: "0.5rem 1rem",
    borderRadius: "6px",
    border: "1px solid #ddd",
    fontSize: "0.75rem",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
    whiteSpace: "nowrap",
    minWidth: "70px",
    textAlign: "center",
    "@media (min-width: 640px)": {
      alignSelf: "center",
      padding: "0.5rem 1.25rem",
      fontSize: "0.875rem",
      minWidth: "80px",
    },
    "@media (hover: hover)": {
      ":hover": {
        transform: "translateY(-1px)",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      },
    },
    ":active": {
      transform: "translateY(0)",
    },
  },
  footer: {
    marginTop: "2rem",
    textAlign: "center",
    fontSize: "0.75rem",
    color: "#aaa",
    padding: "1rem 0.5rem",
    "@media (min-width: 768px)": {
      marginTop: "3rem",
      fontSize: "0.875rem",
      padding: "1rem 0",
    },
  },
};