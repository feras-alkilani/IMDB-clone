import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900"
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900"
});

export const metadata = {
  title: "IMDB Clone",
  description: "This is the IMDB clone website"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Header */}
        <Header />
        {/* Navbar */}
        <Navbar />

        {/* SearchBox */}
        <SearchBox />

        {children}
      </body>
    </html>
  );
}
