import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1.5rem", color: "#1f2937" }}>
          About Fancy Letter Generator Tool
        </h1>

        <p style={{ marginBottom: "1rem", color: "#374151", lineHeight: "1.7" }}>
          Welcome to the Fancy Letter Generator, a tool designed to add a touch of creativity and style to your text!
          Whether you're looking to enhance your social media posts, create unique headlines, or just have some fun with
          your writing, this generator has you covered.
        </p>

        <h2 style={{ fontSize: "1.25rem", fontWeight: "600", marginTop: "2rem", marginBottom: "0.5rem", color: "#1f2937" }}>
          How It Works
        </h2>
        <p style={{ marginBottom: "1rem", color: "#374151", lineHeight: "1.7" }}>
          The Fancy Letter Generator allows you to transform ordinary text into stylized and decorative fonts. You can input
          your desired text, and the generator will produce an aesthetically pleasing version with various fonts and styles
          to choose from. It's a simple and intuitive tool that requires no technical expertise.
        </p>

        <h2 style={{ fontSize: "1.25rem", fontWeight: "600", marginTop: "2rem", marginBottom: "0.5rem", color: "#1f2937" }}>
          Features
        </h2>
        <ul style={{ paddingLeft: "1.5rem", marginBottom: "1rem", color: "#374151", lineHeight: "1.7", listStyleType: "disc" }}>
          <li><strong>Multiple Styles:</strong> Choose from a variety of styles, including cursive, bold, decorative, and more.</li>
          <li><strong>Copy-Paste Ease:</strong> The generated fancy text is easily copy-pasteable. Simply click the copy button.</li>
          <li><strong>Customization:</strong> Some styles allow for color, shadow effects, and more.</li>
          <li><strong>Free and Accessible:</strong> Use from any device. No install needed.</li>
        </ul>

        <h2 style={{ fontSize: "1.25rem", fontWeight: "600", marginTop: "2rem", marginBottom: "0.5rem", color: "#1f2937" }}>
          Why Use Fancy Text?
        </h2>
        <p style={{ marginBottom: "1rem", color: "#374151", lineHeight: "1.7" }}>
          Fancy text helps your content stand out—whether for social media, branding, or personal messages. It adds
          personality and style to otherwise plain text.
        </p>

        <h2 style={{ fontSize: "1.25rem", fontWeight: "600", marginTop: "2rem", marginBottom: "0.5rem", color: "#1f2937" }}>
          Usage Ideas
        </h2>
        <ul style={{ paddingLeft: "1.5rem", marginBottom: "1rem", color: "#374151", lineHeight: "1.7", listStyleType: "disc" }}>
          <li><strong>Social Media:</strong> Use eye-catching captions and bios.</li>
          <li><strong>Blogs:</strong> Make headings more appealing.</li>
          <li><strong>Messages:</strong> Impress friends with cool fonts.</li>
          <li><strong>Branding:</strong> Create memorable taglines and logos.</li>
        </ul>

        <h2 style={{ fontSize: "1.25rem", fontWeight: "600", marginTop: "2rem", marginBottom: "0.5rem", color: "#1f2937" }}>
          Conclusion
        </h2>
        <p style={{ color: "#374151", lineHeight: "1.7" }}>
          The Fancy Letter Generator is a fun, creative, and practical tool. Whether you're a casual user or a business
          owner, it's designed to make your text pop!
        </p>
      </div>
    </Layout>
  );
}
