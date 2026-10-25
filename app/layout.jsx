import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SideBar from "./components/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});
export const metadata = {
  title: "Ettu Habeebullahi portfolio",
  description: "The professsional development portfolio of Ettu Habeebullahi Ajibola",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={` h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col bg-brand ${spaceGrotesk.className}`}> <SideBar /> {children}</body>
    </html>
  );
}
