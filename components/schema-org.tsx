import Script from "next/script";

interface SchemaOrgProps {
  url: string;
  title: string;
  description: string;
  images?: string[];
  datePublished?: string;
  dateModified?: string;
}

export function SchemaOrg({
  url,
  title,
  description,
  datePublished,
  dateModified,
}: SchemaOrgProps) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        url: url,
        name: title,
        description: description,
        potentialAction: {
          "@type": "SearchAction",
          target: `${url}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": `${url}/#webpage`,
        url: url,
        name: title,
        isPartOf: {
          "@id": `${url}/#website`,
        },
        description: description,
        datePublished: datePublished,
        dateModified: dateModified,
        inLanguage: "es-ES",
      },
      {
        "@type": "SoftwareApplication",
        name: "CV Builder",
        operatingSystem: "Web",
        applicationCategory: "BusinessApplication",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "EUR",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          ratingCount: "1024",
        },
      },
    ],
  };

  return (
    <Script
      id="schema-org"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
