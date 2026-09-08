import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Harmony Harikesh — Identity of Science City | 4 BHK Sky Living",
  description:
    "Gujarat's first iconic project by Advaitya Projects. 4 BHK Sky Living with 2 Living Room Concept and 360° Panoramic Views at Science City Road, Ahmedabad.",
  keywords: [
    "Harmony Harikesh",
    "Advaitya Projects",
    "4 BHK Ahmedabad",
    "Science City Road",
    "luxury apartments Ahmedabad",
    "sky living",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
