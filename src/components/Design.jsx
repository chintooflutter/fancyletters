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
    <main className="max-w-3xl mx-auto px-4 py-4">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold text-pink-500 mb-2 leading-snug">
          {title} ✨
        </h1>
        <p className="text-sm text-gray-600 max-w-xl mx-auto leading-relaxed px-4">
          Type your text below and instantly see it transformed into cute font styles. Copy and paste wherever you want!
        </p>
      </header>

      <div className="flex flex-wrap justify-center gap-2 mb-6 px-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-2 text-xs rounded-full border whitespace-nowrap min-w-fit transition-all
              ${activeCategory === cat
                ? "bg-pink-500 text-white border-pink-500"
                : "bg-gray-100 text-black border-gray-300"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="max-w-2xl mx-auto mb-8 px-2">
        <label htmlFor="input" className="block mb-2 font-semibold text-sm text-gray-800">
          With Text
        </label>
        <textarea
          id="input"
          rows={3}
          placeholder="Type your text here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-3 text-sm rounded-lg border border-gray-300 resize-none shadow-sm outline-none font-inherit"
        />
      </div>

      <div className="flex flex-col gap-3 px-2">
        {filteredStyles.map(({ name, transform }, index) => {
          const output = transform(input);
          return (
            <div
              key={name}
              className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm transition-all"
            >
              <div className="flex flex-col gap-3">
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 font-medium mb-1">{name}</p>
                  <p className="text-base whitespace-pre-wrap break-words leading-relaxed">
                    {output}
                  </p>
                </div>
                <button
                  onClick={() => handleCopy(output, index)}
                  className={`self-start px-4 py-2 rounded-md border text-xs font-medium transition-all min-w-[70px] text-center whitespace-nowrap
                    ${copiedIndex === index
                      ? "bg-pink-500 text-white border-pink-500"
                      : "bg-gray-50 text-black border-gray-300"
                    }`}
                >
                  {copiedIndex === index ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-pink-500 text-white p-4 rounded-lg">
        Tailwind is working!
      </div>

      <footer className="mt-8 text-center text-xs text-gray-400 px-2 py-4">
        © {new Date().getFullYear()} FancyLetters.org — Make Your Text Fancy ✨
      </footer>
    </main>
  );
}
