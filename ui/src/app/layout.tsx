import type { Metadata } from "next";
import { Open_Sans , Great_Vibes, Geist, Geist_Mono, Inter, Nunito, Lato, Playfair_Display, Lora, Merriweather, Cormorant_Garamond, Source_Serif_4  } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer/footer";

//defined fonts
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' });

const lato = Lato({
  subsets: ['latin'], variable: '--font-lato',
  weight: ['400', '700', '900'],
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  weight: ['400', '600', '700'], // Common weights
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  variable: '--font-great-vibes',
  weight: ['400'], // Common weight
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  weight: ['400', '700', '900'], // Common weights for headlines
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  weight: ['400','500', '600', '700'], // Common weights for body or sub-headlines
});

const merriweather = Merriweather({
  subsets: ['latin'],
  variable: '--font-merriweather',
  weight: ['400', '700', '900'], // Good for body or headlines
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant-garamond',
  weight: ['400', '600', '700'], // Elegant weights
});
const sourceSerif4 = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif-4',
  weight: ['400', '600', '700'], // Versatile weights
});

export const metadata: Metadata = {
  title: "Grace Family",
  description: "In Grace Family, God is raising an Army of Champions from ordinary people.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${nunito.variable} ${lato.variable} ${playfairDisplay.variable} ${lora.variable} ${openSans.variable} ${greatVibes.variable} ${merriweather.variable} ${cormorantGaramond.variable} ${sourceSerif4.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
