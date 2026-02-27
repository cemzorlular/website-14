import { Instrument_Serif, DM_Sans, IBM_Plex_Mono } from 'next/font/google';

export const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-serif',
});

export const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
});

export const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-mono',
});
