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
    <main className="max-w-3xl mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-pink-500 mb-2">{title} ✨</h1>
        <p className="text-base text-gray-700 max-w-xl mx-auto">
          Type your text below and instantly see it transformed into cute font styles. Copy and paste wherever you want!
        </p>
      </header>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1 text-sm rounded-full border transition ${
              activeCategory === cat
                ? "bg-pink-500 text-white border-pink-500"
                : "bg-gray-100 text-gray-800 border-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Input Textarea */}
      <div className="max-w-2xl mx-auto mb-12">
        <label htmlFor="input" className="block mb-2 font-semibold text-sm text-gray-700">
          With Text
        </label>
        <textarea
          id="input"
          rows={3}
          placeholder="Type your text here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-4 rounded border border-gray-300 shadow-sm text-base focus:outline-pink-400"
        />
      </div>

      {/* Output Grid */}
      <div className="grid gap-4">
        {filteredStyles.map(({ name, transform }, index) => {
          const output = transform(input);
          return (
            <div key={name} className="bg-white border rounded-lg shadow-sm p-4 flex flex-col">
              <p className="text-xs text-gray-500 mb-1">{name}</p>

              <p className="text-xl break-words whitespace-pre-wrap leading-snug">{output}</p>

              <button
                onClick={() => handleCopy(output, index)}
                className={`mt-3 self-start px-4 py-1 rounded border text-sm font-medium transition ${
                  copiedIndex === index
                    ? "bg-pink-500 text-white border-pink-500"
                    : "bg-gray-100 text-black border-gray-300"
                }`}
              >
                {copiedIndex === index ? "Copied!" : "Copy"}
              </button>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} FancyLetters.org — Make Your Text Fancy ✨
      </footer>
    </main>
  );
}
