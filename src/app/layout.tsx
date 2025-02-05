import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import { SanityLive } from "@/sanity/lib/live";
import HeaderCategorySelector from "@/components/layout/HeaderCategorySelector";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-white min-h-[125vh]`}>
        <Header categorySelector={<HeaderCategorySelector />} />
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="(YOUR UMAMI WEBSITE ID)"
          strategy="beforeInteractive"
        />

        {children}

        <SanityLive />
      </body>
    </html>
  );
};

export default RootLayout;
