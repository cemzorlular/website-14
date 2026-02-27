import type { Metadata } from 'next';
import { instrumentSerif, dmSans, ibmPlexMono } from '@/lib/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Er-Kim | Complexity, simplified. Patients, reached.',
  description:
    'Er-Kim İlaç Sanayi ve Ticaret A.Ş. — Pharmaceutical partner navigating regulatory, commercial, and access pathways across 49 Nordic-CEE markets.',
  openGraph: {
    title: 'Er-Kim | Pharmaceutical excellence across 49 markets',
    description:
      'Navigating regulatory, commercial, and access pathways across Nordic-CEE. Complexity, simplified. Patients, reached.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${dmSans.variable} ${ibmPlexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
