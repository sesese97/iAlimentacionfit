import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MealFit MX | Performance Fuel',
  description: 'Nutrición para tu ritmo: organiza tu plan de alimentación, recetas y lista de compras en México.',
  applicationName: 'MealFit MX',
  icons: { icon: '/icon.svg' },
  openGraph: {
    title: 'MealFit MX · Performance Fuel',
    description: 'Come para rendir. Vive a tu ritmo.',
    type: 'website',
    locale: 'es_MX',
  },
};
export const viewport: Viewport = { themeColor: '#101B2D' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es-MX"><body>{children}</body></html>;
}
