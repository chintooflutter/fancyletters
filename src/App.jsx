import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/index";
import About from "./pages/about";
import Privacy from "./pages/privacy";
import Contact from "./pages/contact";
import Header from "./components/Header";
import SubdomainPage from "./pages/subdomains";
import { getSubdomain } from "./pages/utils/getSubdomain"; // ✅ correct path

function AppContent() {
  const subdomain = getSubdomain();

  if (subdomain) {
    return <SubdomainPage />;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
