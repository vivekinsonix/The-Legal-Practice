'use client';

import { ALTERNATE_UI_URL, SEO_IMAGE } from '@/app/constants/appconstants';
import Head from 'next/head';
interface SeoProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  author?: string;
}

export default function SeoHead({
  title = 'Dolcera - Leading Patent Analytics Company',
  description = 'Dolcera is one of world’s largest patent analytics companies. Our team of in-house subject-matter experts analyze several million patents a year using our machine-learning platform.',
  keywords = 'Dolcera, Patent Analytics, Intellectual Property, Patent Research, Patent Search, Patent Filing, Patent Strategy, IP Management, Patent Portfolio Management, Competitive Intelligence, Technology Landscaping, Patent Valuation, Freedom to Operate, FTO Analysis, Patent Infringement Analysis, Patent Monitoring, Patent Drafting Services',
  image = SEO_IMAGE,
  url = ALTERNATE_UI_URL,
  author = 'Dolcera',
}: SeoProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {url && <link rel="canonical" href={url} />}
    </Head>
  );
}
