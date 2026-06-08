import {
  Cormorant_Garamond,
  Dancing_Script,
  Great_Vibes,
  Montserrat,
  Outfit,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-dancing",
  display: "swap",
});

export const metadata = {
  title: "ANA LAURA — Eu te amo, minha filha ❤️",
  description: "Um cantinho especial de amor para ANA LAURA.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://www.google.com" />
      </head>
      <body
        className={`${outfit.variable} ${playfair.variable} ${greatVibes.variable} ${montserrat.variable} ${cormorant.variable} ${dancing.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
