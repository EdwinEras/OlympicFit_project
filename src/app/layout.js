import { Mulish } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const mulish = Mulish({
  weight: ["200", "300", "400", "600", "800"], 
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-mulish",
});


export const metadata = {
  title: 'Olympic Fit - Home',
  description: 'Join expert-led fitness classes at Olympic Fit and train to reach your peak performance.'
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${mulish.variable} scrollbar`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
