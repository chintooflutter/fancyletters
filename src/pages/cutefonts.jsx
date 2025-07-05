import Design from "../components/Design";

const cuteFontStyles = [
  // Group: Styling & Fonts
  {
    name: "Heart Border",
    category: "Styling & Fonts",
    transform: (text) => `♡ ${text} ♡`,
  },
  {
    name: "Bubble Letters",
    category: "Styling & Fonts",
    transform: (text) => text.split("").map(c => c + "⃝").join(""),
  },
  {
    name: "Tiny Text",
    category: "Styling & Fonts",
    transform: (text) => text.toLowerCase().split("").map(c => {
      const tiny = {
        a:"ᵃ",b:"ᵇ",c:"ᶜ",d:"ᵈ",e:"ᵉ",f:"ᶠ",g:"ᵍ",h:"ʰ",i:"ⁱ",j:"ʲ",k:"ᵏ",l:"ˡ",m:"ᵐ",
        n:"ⁿ",o:"ᵒ",p:"ᵖ",q:"ᑫ",r:"ʳ",s:"ˢ",t:"ᵗ",u:"ᵘ",v:"ᵛ",w:"ʷ",x:"ˣ",y:"ʸ",z:"ᶻ"
      };
      return tiny[c] || c;
    }).join(""),
  },
  {
    name: "Cursive Style",
    category: "Styling & Fonts",
    transform: (text) => text.normalize("NFD").replace(/./g, c => {
      const cursive = {
        A:"𝒜",B:"𝐵",C:"𝒞",D:"𝒟",E:"𝐸",F:"𝐹",G:"𝒢",H:"𝐻",I:"𝐼",J:"𝒥",K:"𝒦",L:"𝐿",
        M:"𝑀",N:"𝒩",O:"𝒪",P:"𝒫",Q:"𝒬",R:"𝑅",S:"𝒮",T:"𝒯",U:"𝒰",V:"𝒱",W:"𝒲",X:"𝒳",
        Y:"𝒴",Z:"𝒵",
        a:"𝒶",b:"𝒷",c:"𝒸",d:"𝒹",e:"𝑒",f:"𝒻",g:"𝑔",h:"𝒽",i:"𝒾",j:"𝒿",k:"𝓀",l:"𝓁",
        m:"𝓂",n:"𝓃",o:"𝑜",p:"𝓅",q:"𝓆",r:"𝓇",s:"𝓈",t:"𝓉",u:"𝓊",v:"𝓋",w:"𝓌",x:"𝓍",
        y:"𝓎",z:"𝓏"
      };
      return cursive[c] || c;
    }),
  },
  {
    name: "Monospace",
    category: "Styling & Fonts",
    transform: (text) => text.replace(/./g, c =>
      String.fromCharCode(0xFF00 + c.charCodeAt(0) - 0x20)
    ),
  },
  {
    name: "Spaced",
    category: "Styling & Fonts",
    transform: (text) => text.split("").join(" "),
  },

  // Group: Social Media Fonts
  {
    name: "Bold Italic",
    category: "Social Media Fonts",
    transform: (text) =>
      text.replace(/[a-z]/gi, (c) => {
        const base = c === c.toLowerCase() ? 0x1D482 : 0x1D468;
        return String.fromCodePoint(base + c.toLowerCase().charCodeAt(0) - 97);
      }),
  },
  {
    name: "Strikethrough",
    category: "Social Media Fonts",
    transform: (text) => text.split("").map(c => c + "\u0336").join(""),
  },
  {
    name: "Underline",
    category: "Social Media Fonts",
    transform: (text) => text.split("").map(c => c + "\u0332").join(""),
  },
  {
    name: "Upside Down",
    category: "Social Media Fonts",
    transform: (text) => text.split("").reverse().join(""),
  },

  // Group: Text Generators
  {
    name: "Zalgo Glitch",
    category: "Text Generators",
    transform: (text) => text.split("").map(c => c + "̴̶̷").join(""),
  },
  {
    name: "Reverse Letters",
    category: "Text Generators",
    transform: (text) => [...text].reverse().join(""),
  },
  {
    name: "Emoji Spacer",
    category: "Text Generators",
    transform: (text) => text.split("").join(" ✨ "),
  },
  {
    name: "Boxed",
    category: "Text Generators",
    transform: (text) => text.split("").map(c => `🅰️`.replace("A", c.toUpperCase())).join(" "),
  },

  // Group: Tech & Encoding
  {
    name: "Binary Code",
    category: "Tech & Encoding",
    transform: (text) =>
      text
        .split("")
        .map((c) => c.charCodeAt(0).toString(2).padStart(8, "0"))
        .join(" "),
  },
  {
    name: "Morse Code",
    category: "Tech & Encoding",
    transform: (text) => {
      const morse = {
        a: ".-", b: "-...", c: "-.-.", d: "-..", e: ".", f: "..-.",
        g: "--.", h: "....", i: "..", j: ".---", k: "-.-", l: ".-..",
        m: "--", n: "-.", o: "---", p: ".--.", q: "--.-", r: ".-.",
        s: "...", t: "-", u: "..-", v: "...-", w: ".--", x: "-..-",
        y: "-.--", z: "--..", " ": "/", 0: "-----", 1: ".----",
        2: "..---", 3: "...--", 4: "....-", 5: ".....", 6: "-....",
        7: "--...", 8: "---..", 9: "----."
      };
      return text
        .toLowerCase()
        .split("")
        .map((c) => morse[c] || c)
        .join(" ");
    },
  },
  {
    name: "Hexadecimal",
    category: "Tech & Encoding",
    transform: (text) =>
      text
        .split("")
        .map((c) => c.charCodeAt(0).toString(16))
        .join(" "),
  },

  // Group: Themes & Symbols
  {
    name: "Snowflake Wrap",
    category: "Themes & Symbols",
    transform: (text) => `❄️ ${text} ❄️`,
  },
  {
    name: "Rainbow Hearts",
    category: "Themes & Symbols",
    transform: (text) => `❤️🧡💛💚💙💜 ${text} 💜💙💚💛🧡❤️`,
  },
  {
    name: "Magic Stars",
    category: "Themes & Symbols",
    transform: (text) => `✨ ${text} ✨`,
  },
  {
    name: "Flower Power",
    category: "Themes & Symbols",
    transform: (text) => `🌸 ${text} 🌸`,
  },
  {
    name: "Teddy Bear Hug",
    category: "Themes & Symbols",
    transform: (text) => `ʕ•ᴥ•ʔ ${text} ʕ•ᴥ•ʔ`,
  },
  {
    name: "Moonlight",
    category: "Themes & Symbols",
    transform: (text) => `🌙 ${text} 🌙`,
  },

  // More fun
  {
    name: "Sparkle Sand",
    category: "Styling & Fonts",
    transform: (text) => `⸝⸝ ${text} ⸝⸝`,
  },
  {
    name: "Cat Ears",
    category: "Themes & Symbols",
    transform: (text) => `ฅ^•ﻌ•^ฅ ${text} ฅ^•ﻌ•^ฅ`,
  },
  {
    name: "Love Arrows",
    category: "Themes & Symbols",
    transform: (text) => `➶➶ ${text} ➷➷`,
  },
  {
    name: "Cloud Puff",
    category: "Themes & Symbols",
    transform: (text) => `☁️ ${text} ☁️`,
  },
];

export default function CuteFontsPage() {
  return <Design title="Cute Fonts Generator" fontStyles={cuteFontStyles} />;
}
