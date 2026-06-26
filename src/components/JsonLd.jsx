import { SEO, FAQ_DATA } from '../constants/seo';

function JsonLdBlock({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function JsonLd() {
  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SEO.siteName,
    url: SEO.siteUrl,
    description: SEO.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SEO.siteUrl}/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SEO.siteName,
    url: SEO.siteUrl,
    logo: `${SEO.siteUrl}/favicon.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      email: SEO.contact.email,
      contactType: SEO.contact.type,
    },
    sameAs: [SEO.socials.twitter, SEO.socials.linkedin, SEO.socials.instagram],
  };

  const product = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: SEO.siteName,
    url: SEO.siteUrl,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: SEO.description,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/PreOrder',
      price: '0',
      priceCurrency: 'INR',
    },
  };

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_DATA.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: a,
      },
    })),
  };

  return (
    <>
      <JsonLdBlock data={website} />
      <JsonLdBlock data={organization} />
      <JsonLdBlock data={product} />
      <JsonLdBlock data={faqPage} />
    </>
  );
}
