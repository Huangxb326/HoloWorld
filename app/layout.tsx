import type { Metadata } from 'next';
import './globals.css';
import { siteAsset } from './sitePath';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
const canonicalUrl = `${siteUrl.replace(/\/$/, '')}/`;
const paperTitle = 'To See a World in a Living Context: Unified Indoor-Outdoor Urban World Generation';
const pageTitle = `HoloWorld | ${paperTitle}`;
const pageDescription =
  `Official project page for HoloWorld and “${paperTitle},” a framework for coherent 3D urban worlds with explicitly corresponding exteriors and building-specific interiors.`;
const paperAuthors = [
  'Xiaobin Huang',
  'Zilong Huang',
  'Yang Luo',
  'Hongchao Fan',
  'Yiping Chen',
  'Ting Han',
];

const scholarlyArticle = {
  '@context': 'https://schema.org',
  '@type': 'ScholarlyArticle',
  headline: paperTitle,
  name: paperTitle,
  alternateName: 'HoloWorld',
  description: pageDescription,
  url: canonicalUrl,
  mainEntityOfPage: canonicalUrl,
  identifier: 'arXiv:2608.05879',
  datePublished: '2026-08-06',
  author: paperAuthors.map((name) => ({ '@type': 'Person', name })),
  sameAs: [
    'https://arxiv.org/abs/2608.05879',
    'https://github.com/Huangxb326/HoloWorld',
  ],
  keywords: [
    'HoloWorld',
    '3D urban world generation',
    'unified indoor-outdoor generation',
    'living world context',
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: pageTitle,
  description: pageDescription,
  authors: paperAuthors.map((name) => ({ name })),
  keywords: ['HoloWorld', paperTitle, '3D generation', 'urban world generation', 'indoor-outdoor generation'],
  alternates: { canonical: canonicalUrl },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  icons: {
    icon: [{ url: siteAsset('/holoworld-tab-emblem-v4.png'), type: 'image/png', sizes: '64x64' }],
    shortcut: siteAsset('/holoworld-tab-emblem-v4.png'),
    apple: [{ url: siteAsset('/holoworld-touch-emblem-v4.png'), type: 'image/png', sizes: '180x180' }],
  },
  openGraph: {
    type: 'website',
    siteName: 'HoloWorld',
    title: pageTitle,
    description: pageDescription,
    url: canonicalUrl,
    images: [{ url: siteAsset('/og.png'), width: 1731, height: 909, alt: 'HoloWorld — See a world, inside and out.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [siteAsset('/og.png')],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(scholarlyArticle).replace(/</g, '\\u003c') }}
        />
        {children}
      </body>
    </html>
  );
}
