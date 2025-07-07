import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  Layout,
  PenLine,
  Eraser,
  Feather,
  Type,
  Sparkles,
  Landmark,
  SprayCan,
  Wand2,
  Brush,
  Paintbrush2,
  Pencil,
  Star,
  Leaf,
  Mail,
} from "lucide-react";

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

  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(styles.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentStyles = styles.slice(startIndex, startIndex + itemsPerPage);

  const ideas = [
    { title: "Calligraphy Styles", desc: "Explore various calligraphy styles such as italic, copperplate, or modern calligraphy.", icon: PenLine },
    { title: "Vintage Script", desc: "Embrace the elegance of vintage scripts like Victorian-era cursive.", icon: Feather },
    { title: "Gothic Fonts", desc: "Bold and dramatic gothic fonts with intricate edges.", icon: Type },
    { title: "Bubble Letters", desc: "Rounded, playful letters with a fun look.", icon: Sparkles },
    { title: "Art Deco Lettering", desc: "Geometric, symmetrical alphabet inspired by the Art Deco era.", icon: Landmark },
    { title: "Graffiti-Inspired Fonts", desc: "Urban, bold, colorful graffiti-style lettering.", icon: SprayCan },
    { title: "Whimsical Serif Fonts", desc: "Serif fonts with curls, swirls and fantasy style.", icon: Wand2 },
    { title: "Minimalist Lettering", desc: "Clean, modern, elegant styles with sharp simplicity.", icon: Brush },
    { title: "Watercolor Alphabet", desc: "Blend colors and soft strokes using watercolor.", icon: Paintbrush2 },
    { title: "Hand-Drawn Doodles", desc: "Add doodles and illustrations for a personal touch.", icon: Pencil },
    { title: "Metallic Embellishments", desc: "Use gold or silver for shiny, luxury lettering.", icon: Star },
    { title: "Nature-Inspired Letters", desc: "Decorate your letters with vines, leaves and nature.", icon: Leaf },
  ];

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

      {/* Fancy Writing Alphabet Ideas Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Best Fancy Writing Alphabet Ideas 2025</h2>
        <div className="space-y-6 text-left">
          {ideas.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 bg-white p-5 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mt-1 text-indigo-600">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-1">
                    {index + 1}. {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Fancy Letter Writing Guide Section */}
      <section className="mt-16 text-left space-y-8">
        <h2 className="text-3xl font-bold text-gray-800">Fancy Letter Writing Guide</h2>

        <p className="text-gray-700">
          Fancy letter writing is a beautiful way to express your thoughts and emotions through a personalized and decorative medium.
          It can be a unique and thoughtful gift for a loved one or a creative way to communicate with friends and family.
          This guide will provide you with the necessary steps and tips to create your own fancy letters.
        </p>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Materials Needed</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>High-quality paper or cardstock</li>
            <li>Pen or calligraphy pen</li>
            <li>Ruler</li>
            <li>Pencil</li>
            <li>Eraser</li>
            <li>Decorative materials (e.g. stickers, washi tape, stamps, etc.)</li>
            <li>Envelope</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Step-by-Step Guide</h3>
          <ol className="space-y-6 text-gray-700">
            <li className="flex items-start gap-4">
              <FileText className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <p className="font-medium">Choose Your Paper</p>
                <p>Select high-quality paper or cardstock that suits your desired aesthetic. Consider the weight, texture, and color of the paper to ensure it complements your letter's content and design.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Layout className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <p className="font-medium">Plan Your Layout</p>
                <p>Using a ruler and pencil, lightly sketch guidelines for your letter's layout. Determine the margins, spacing, and placement of text and decorative elements. This will help you maintain a balanced and organized design.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <PenLine className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <p className="font-medium">Write Your Letter</p>
                <p>Write your letter using a pen or calligraphy pen. Be mindful of your handwriting and take your time to ensure legibility. If you're using a calligraphy pen, practice your strokes and letterforms before writing your final letter.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Eraser className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <p className="font-medium">Erase Guidelines</p>
                <p>Once your ink is dry, gently erase any visible pencil guidelines. Be careful not to smudge the ink or damage the paper.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Sparkles className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <p className="font-medium">Decorate Your Letter</p>
                <p>Add decorative elements to your letter, such as stickers, washi tape, or stamps. Consider the overall theme and color scheme of your letter when selecting decorations. Be mindful not to overcrowd the letter with too many elements, as this can detract from the message.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <p className="font-medium">Address and Seal Your Envelope</p>
                <p>Address your envelope using the same pen or calligraphy pen as your letter. Seal the envelope with a decorative sticker or wax seal for an extra touch of elegance.</p>
              </div>
            </li>
          </ol>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Tips for Fancy Letter Writing</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Practice your handwriting or calligraphy skills before writing your final letter.</li>
            <li>Experiment with different paper textures, weights, and colors to find the perfect match for your letter.</li>
            <li>Consider the recipient's preferences when selecting decorative elements.</li>
            <li>Maintain a balance between text and decorative elements to ensure readability.</li>
            <li>Take your time and enjoy the process of creating a personalized and decorative letter.</li>
          </ul>
        </div>

        <div className="space-y-4 text-gray-700">
          <p>
            Fancy letter writing is a beautiful and creative way to express your thoughts and emotions. By following this guide and incorporating your unique style, you can create stunning letters that will be cherished by your loved ones. Happy writing!
          </p>

          <p>
            Fancy letter fonts have captivated people for centuries, adding a touch of elegance and style to written communication. Whether it’s for personal correspondence, invitations, or artistic projects, fancy writing has a timeless appeal.
          </p>

          <p>
            The art of crafting fancy letters is not just about using a specific font; it involves a blend of creativity, precision, and an understanding of the visual impact of different styles. A simple character like a fancy letter "a" can become a piece of art with the right flourishes.
          </p>

          <p>
            The origins of fancy fonts go back to illuminated manuscripts. Today, with digital tools, designers can still apply those principles to modern typography. Every swirl and serif can reflect emotion and purpose.
          </p>

          <p>
            From elaborate and ornamental to sleek and minimal, the alphabet of fancy letters is vast. Designing these often starts on paper with drafts, eventually becoming polished digital artwork used in events, branding, or crafts.
          </p>

          <p>
            The beauty of fancy writing lies in its emotional tone. A well-designed letter “A” can set the entire theme for your creation. The joy of crafting fancy letters is growing, especially with the rise of tools like FancyLetters.org that make it accessible to everyone.
          </p>

          <p>
            In conclusion, fancy letter writing combines tradition, creativity, and innovation. Whether you’re just sketching or digitally generating, it’s about expressing beauty through letters that leave a lasting impression.
          </p>
        </div>
      </section>


      <footer className="text-xs text-gray-400 mt-16">
        © {new Date().getFullYear()} FancyLetters.org — Make Your Text Fancy ✨
      </footer>
    </main>
  );
}
