import type { Metadata } from 'next';
import './globals.css';
import { siteAsset } from './sitePath';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(`${siteUrl}/`),
  title: 'HoloWorld',
  description:
    'HoloWorld generates coherent 3D urban worlds with explicitly corresponding exteriors and building-specific interiors.',
  authors: [
    { name: 'Xiaobin Huang' },
    { name: 'Zilong Huang' },
    { name: 'Yang Luo' },
    { name: 'Hongchao Fan' },
    { name: 'Yiping Chen' },
    { name: 'Ting Han' },
  ],
  keywords: ['HoloWorld', '3D generation', 'urban world generation', 'indoor-outdoor generation'],
  icons: {
    icon: [{ url: siteAsset('/holoworld-tab-emblem-v4.png'), type: 'image/png', sizes: '64x64' }],
    shortcut: siteAsset('/holoworld-tab-emblem-v4.png'),
    apple: [{ url: siteAsset('/holoworld-touch-emblem-v4.png'), type: 'image/png', sizes: '180x180' }],
  },
  openGraph: {
    type: 'website',
    title: 'To See a World in a Living Context: Unified Indoor-Outdoor Urban World Generation',
    description: 'Unified indoor-outdoor urban world generation through a living cross-scale context.',
    url: siteUrl,
    images: [{ url: siteAsset('/og.png'), width: 1731, height: 909, alt: 'HoloWorld — See a world, inside and out.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'To See a World in a Living Context: Unified Indoor-Outdoor Urban World Generation',
    description: 'Unified indoor-outdoor urban world generation through a living cross-scale context.',
    images: [siteAsset('/og.png')],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
