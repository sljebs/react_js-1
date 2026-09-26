import type { Metadata } from "next";
import Navbar from "../components/Navbar";

import "./globals.css";

export const metadata: Metadata = {
  title: "Products App",
  description: "Products list with Navbar",
};

const list = ["Home", "About", "Contact", "Cart"];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar list={list} />

        {children}
      </body>
    </html>
  );
}