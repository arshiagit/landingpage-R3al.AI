import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'R3al.AI Pitch Deck - Next Generation AI',
  description: 'View our comprehensive pitch deck showcasing R3al.AI\'s innovative AI solutions and vision for the future.',
  robots: 'index, follow',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function PitchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 