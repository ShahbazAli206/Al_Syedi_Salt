import './globals.css';
import { Playfair_Display, Inter } from 'next/font/google';
import ScrollAnimator from '@/components/ScrollAnimator';
import LightModeBackground from '@/components/LightModeBackground';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-playfair',
  display: 'swap',
});
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'Al Syedi Group — Premium Himalayan Pink Salt Manufacturer & Wholesaler',
  description:
    'Al Syedi Group is an ISO 22000 & HACCP certified manufacturer of premium Himalayan Pink Salt, edible salts, bath blends, salt lamps and industrial salts — bulk supply to 42+ countries including the UK, USA & Canada.',
  keywords: [
    'Himalayan Pink Salt',
    'Bulk Salt Supplier',
    'Salt Manufacturer Pakistan',
    'Khewra Salt',
    'Salt Wholesale UK',
    'Salt Importer USA',
    'Private Label Salt',
    'Al Syedi Group',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <LightModeBackground />
        {children}
        <ScrollAnimator />
      </body>
    </html>
  );
}
