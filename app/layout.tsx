import Navbar from "@/components/Navbar";
import "./globals.css";
import { Oxanium } from 'next/font/google';

const oxanium = Oxanium({ 
  subsets: ['latin'],
  variable: '--font-cyber', 
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={oxanium.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;