import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";
import Footer from "./components/Footer";
import SocialNetworkComp from "./components/SocialNetworkComp";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ALPHAA MATHS",
  description: "A place for mathematical solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth scroll-p-20">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <SocialNetworkComp />
        <Footer />
      </body>
    </html>
  );
}
