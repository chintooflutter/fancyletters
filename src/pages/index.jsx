import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const styles = [
    { name: "Cute Fonts", preview: "ⓒⓤⓣⓔ", subdomain: "cutefonts", type: "subdomain" },
    { name: "Zalgo Text", preview: "Ḧ̴̱̞́̾e̵̠͎͠l̶̺̦̾l̸̍ͅo̴̡", subdomain: "zalgotext", type: "subdomain" },
    { name: "Aesthetic Fonts", preview: "✧･ﾟHᴇʟʟᴏ･ﾟ✧", path: "/aesthetic-fonts", type: "page" },
    { name: "Cursive Fonts", preview: "𝓗𝓮𝓵𝓵𝓸", subdomain: "cursivefonts", type: "subdomain" },
    { name: "Pretty Text", preview: "P҉R҉E҉T҉T҉Y", subdomain: "prettytext", type: "subdomain" },
    { name: "Cool Fonts", preview: "C͟O͟O͟L͟", subdomain: "cool", type: "subdomain" },
    { name: "Font Changer", preview: "Fσит Cнαиgєя", subdomain: "fontchanger", type: "subdomain" },
    { name: "Tattoo Fonts", preview: "𝕿𝖆𝖙𝖙𝖔𝖔", subdomain: "tattoofonts", type: "subdomain" },
    { name: "Calligraphy Fonts", preview: "𝒞𝒶𝓁𝓁𝒾𝑔𝓇𝒶𝓅𝒽𝓎", subdomain: "calligraphyfonts", type: "subdomain" },
    { name: "Aesthetic Text", preview: "H e l l o", subdomain: "aesthetictext", type: "subdomain" },
    { name: "Bold Text", preview: "𝗕𝗢𝗟𝗗", subdomain: "boldtext", type: "subdomain" },
    { name: "Italics Text", preview: "𝑖𝑡𝑎𝑙𝑖𝑐", subdomain: "italic", type: "subdomain" },
    { name: "Tiny Text", preview: "ᴛɪɴʏ", subdomain: "tiny", type: "subdomain" },
    { name: "Strikethrough Text", preview: "̶H̶e̶l̶l̶o̶", subdomain: "strikethrough", type: "subdomain" },
    { name: "Capitalization Tool", preview: "Title Case", subdomain: "capitalize", type: "subdomain" },
    { name: "Title Generator", preview: "The Fancy Title", subdomain: "title", type: "subdomain" },
    { name: "Bubble Letters", preview: "ⓗⓔⓛⓛⓞ", subdomain: "bubble", type: "subdomain" },
    { name: "Font Generator (Main)", preview: "Fancy Text", subdomain: "main", type: "subdomain" },
    { name: "PNG Text Generator", preview: "🅟🅝🅖", subdomain: "png", type: "subdomain" },
    { name: "Dummy Text Generator", preview: "Lorem ipsum", subdomain: "dummy", type: "subdomain" },
    { name: "ASCII Text Generator", preview: "▀▄▀▄▀▄", subdomain: "ascii", type: "subdomain" },
    { name: "Anagram Generator", preview: "silent → listen", subdomain: "anagram", type: "subdomain" },
    { name: "Random Letter Generator", preview: "Z, X, Q", subdomain: "random", type: "subdomain" },
    { name: "Morse Code Translator", preview: "... --- ...", subdomain: "morse", type: "subdomain" },
    { name: "Binary Translator", preview: "01001000", subdomain: "binary", type: "subdomain" },
    { name: "Snapchat Font", preview: "𝓢𝓷𝓪𝓹", subdomain: "snapchat", type: "subdomain" },
    { name: "Fortnite Font", preview: "𝐅𝐨𝐫𝐭𝐧𝐢𝐭𝐞", subdomain: "fortnite", type: "subdomain" },
    { name: "Character Counter", preview: "123 characters", subdomain: "counter", type: "subdomain" },
    { name: "Symbol Generator", preview: "★✿❖☂", subdomain: "symbols", type: "subdomain" },
    { name: "Christmas Fonts", preview: "🎄𝒳𝓂𝒶𝓈🎅", subdomain: "christmas", type: "subdomain" },
    { name: "Subscript Generator", preview: "H₂O", subdomain: "subscript", type: "subdomain" },
    { name: "Weird Text", preview: "ωεเя๔ тεאt", subdomain: "weird", type: "subdomain" }
  ];

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(styles.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentStyles = styles.slice(startIndex, startIndex + itemsPerPage);

  return (
    <main className="max-w-5xl mx-auto px-4 py-8 text-center">
      <section className="mb-10">
        <h1 className="text-4xl font-bold mb-3">Fancy Letters Generator 2025</h1>
        <p className="text-gray-600 text-base max-w-xl mx-auto">
          Stylish and Unicode font generators for Instagram, Snapchat, Fortnite & more!
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
        {currentStyles.map((style) => {
          const isPage = style.type === "page";
          const key = style.name;
          const href = isPage ? style.path : `https://${style.subdomain}.fancyletters.org`;

          const Card = (
            <div className="border border-gray-200 rounded-lg p-5 text-center shadow-sm hover:shadow-md transition">
              <h2 className="text-lg font-bold mb-1">{style.name}</h2>
              <p className="text-xl mb-1">{style.preview}</p>
              <p className="text-blue-600 font-medium">Try Now →</p>
            </div>
          );

          return isPage ? (
            <Link key={key} to={href}>{Card}</Link>
          ) : (
            <a key={key} href={href}>{Card}</a>
          );
        })}
      </section>

      <section className="flex justify-center items-center gap-6 mb-8 text-sm">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded disabled:opacity-40"
        >
          ⟵ Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border rounded disabled:opacity-40"
        >
          Next ⟶
        </button>
      </section>

      <footer className="text-xs text-gray-400">
        © {new Date().getFullYear()} FancyLetters.org — Make Your Text Fancy ✨
      </footer>
    </main>
  );
}