import Design from "../components/Design";

const aestheticFontStyles = [
  {
    name: "Aesthetic Sparkles",
    category: "Aesthetic Fonts",
    transform: (text) => `✧･ﾟ${text}･ﾟ✧`,
  },
  {
    name: "Pastel Clouds",
    category: "Aesthetic Fonts",
    transform: (text) => `☁️ ${text} ☁️`,
  },
  {
    name: "Fairy Dust",
    category: "Aesthetic Fonts",
    transform: (text) => `⁂ ${text} ⁂`,
  },
  {
    name: "Elegant Cursive",
    category: "Aesthetic Fonts",
    transform: (text) =>
      text.replace(/./g, (c) => {
        const cursive = {
          A: "𝓐", B: "𝓑", C: "𝓒", D: "𝓓", E: "𝓔", F: "𝓕", G: "𝓖",
          H: "𝓗", I: "𝓘", J: "𝓙", K: "𝓚", L: "𝓛", M: "𝓜", N: "𝓝",
          O: "𝓞", P: "𝓟", Q: "𝓠", R: "𝓡", S: "𝓢", T: "𝓣", U: "𝓤",
          V: "𝓥", W: "𝓦", X: "𝓧", Y: "𝓨", Z: "𝓩",
          a: "𝓪", b: "𝓫", c: "𝓬", d: "𝓭", e: "𝓮", f: "𝓯", g: "𝓰",
          h: "𝓱", i: "𝓲", j: "𝓳", k: "𝓴", l: "𝓵", m: "𝓶", n: "𝓷",
          o: "𝓸", p: "𝓹", q: "𝓺", r: "𝓻", s: "𝓼", t: "𝓽", u: "𝓾",
          v: "𝓿", w: "𝔀", x: "𝔁", y: "𝔂", z: "𝔃",
        };
        return cursive[c] || c;
      }),
  },
  {
    name: "Aesthetic Dots",
    category: "Aesthetic Fonts",
    transform: (text) => text.split("").join("·"),
  },
  {
    name: "Cute Lines",
    category: "Aesthetic Fonts",
    transform: (text) => `⟡ ${text} ⟡`,
  },
  {
    name: "Vaporwave",
    category: "Aesthetic Fonts",
    transform: (text) =>
      text.replace(/[A-Za-z]/g, (c) =>
        String.fromCharCode(c.charCodeAt(0) + 0xFEE0)
      ),
  },
  {
    name: "Chic Double",
    category: "Aesthetic Fonts",
    transform: (text) => text.replace(/[A-Za-z]/g, (c) => {
      const offset = c === c.toUpperCase() ? 0x1D538 : 0x1D552;
      return String.fromCodePoint(offset + c.toLowerCase().charCodeAt(0) - 97);
    }),
  },
  {
    name: "Kawaii Wrap",
    category: "Aesthetic Fonts",
    transform: (text) => `૮₍ ´• ˕ •\` ₎ა ${text} ૮₍ ´• ˕ •\` ₎ა`,
  },
  {
    name: "Soft Glow",
    category: "Aesthetic Fonts",
    transform: (text) => `∘₊✧ ${text} ✧₊∘`,
  },
  {
    name: "Romantic Hearts",
    category: "Aesthetic Fonts",
    transform: (text) => `♡ ${text} ♡`,
  },
  {
    name: "Lovely Stars",
    category: "Aesthetic Fonts",
    transform: (text) => `★ ${text} ★`,
  },
  {
    name: "Sunset Mood",
    category: "Aesthetic Fonts",
    transform: (text) => `🌇 ${text} 🌇`,
  },
  {
    name: "Pastel Dream",
    category: "Aesthetic Fonts",
    transform: (text) => `💭 ${text} 💭`,
  },
  {
    name: "Angel Aesthetic",
    category: "Aesthetic Fonts",
    transform: (text) => `😇 ${text} 😇`,
  },
  {
    name: "Ocean Vibes",
    category: "Aesthetic Fonts",
    transform: (text) => `🌊 ${text} 🌊`,
  },
  {
    name: "Pink Sparkle",
    category: "Aesthetic Fonts",
    transform: (text) => `🌸 ${text} 🌸`,
  },
  {
    name: "Dreamy Moon",
    category: "Aesthetic Fonts",
    transform: (text) => `🌙 ${text} 🌙`,
  },
  {
    name: "Sweet Love",
    category: "Aesthetic Fonts",
    transform: (text) => `💕 ${text} 💕`,
  },
  {
    name: "Minimal Space",
    category: "Aesthetic Fonts",
    transform: (text) => text.split("").join(" "),
  },
];

export default function AestheticFontsPage() {
  return <Design title="Aesthetic Fonts Generator" fontStyles={aestheticFontStyles} />;
}
