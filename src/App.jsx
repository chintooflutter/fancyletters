import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import About from './pages/about';
import Privacy from './pages/privacy';
import Contact from './pages/contact';
import Header from './components/Header';
import SubdomainPage from './pages/subdomains';
import { getSubdomain } from './pages/utils/getSubdomain'; // ✅ correct path

function App() {
  const subdomain = getSubdomain();

  if (subdomain) {
    return <SubdomainPage />;
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;