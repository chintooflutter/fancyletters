// src/components/Seo.jsx
import { Helmet } from "react-helmet-async";

export default function Seo({ title, description, keywords, author = "fancyletters.org" }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta httpEquiv="cache-control" content="public, max-age=2592000" />
    </Helmet>
  );
}
