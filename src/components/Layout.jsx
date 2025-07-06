import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "2rem 1rem",
        }}
      >
        {children}
      </div>
    </>
  );
}
