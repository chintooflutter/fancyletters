export default function Contact() {
  return (
    <div
      style={{
        maxWidth: "768px",
        margin: "0 auto",
        padding: "2.5rem 1rem",
        color: "#1f2937",
      }}
    >
      <h1
        style={{
          fontSize: "1.875rem",
          fontWeight: "bold",
          marginBottom: "1.5rem",
        }}
      >
        Contact Us
      </h1>

      <p style={{ marginBottom: "1rem" }}>
        Have a question or suggestion? We'd love to hear from you!
      </p>

      <ul
        style={{
          paddingLeft: "1.5rem",
          listStyle: "disc",
          lineHeight: "1.75",
        }}
      >
        <li>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:support@fancyletters.org"
            style={{ color: "#2563eb", textDecoration: "underline" }}
          >
            support@fancyletters.org
          </a>
        </li>
        <li style={{ marginTop: "0.5rem" }}>
          <strong>Instagram:</strong>{" "}
          <a
            href="https://instagram.com/fancyletters"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#2563eb", textDecoration: "underline" }}
          >
            @fancyletters
          </a>
        </li>
      </ul>
    </div>
  );
}
