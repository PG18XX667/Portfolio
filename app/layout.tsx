import type { Metadata } from "next";
import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import AppNavbar from "./components/navbar";
import Providers from "./components/providers";;

const inter = Inter({ subsets: ["latin"] });
// define inter className

export const metadata: Metadata = {
  title: "Wei",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Add any additional meta tags, stylesheets, or scripts here */}
      </head>
      <body className={`${inter.className} dark bg-dark`}>
        <Providers>
          {/* Include the navbar component */}
          <AppNavbar />
          {/* Render the children (page content) */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
