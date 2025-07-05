export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="mb-4">
        Have a question or suggestion? We'd love to hear from you!
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Email:</strong>{' '}
          <a href="mailto:support@fancyletters.org" className="text-blue-600 hover:underline">
            support@fancyletters.org
          </a>
        </li>
        <li>
          <strong>Instagram:</strong>{' '}
          <a
            href="https://instagram.com/fancyletters"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            @fancyletters
          </a>
        </li>
      </ul>
    </div>
  );
}
