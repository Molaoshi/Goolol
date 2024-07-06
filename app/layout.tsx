import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";

const neueRegrade = localFont({
  src: [
    {
      path: "../public/assets/fonts/Neue-Regrade-Regular-BF65af35d81f2ff.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/Neue-Regrade-Medium-BF65af35d843ed6.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/Neue-Regrade-Semibold-BF65af35d8354a8.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/Neue-Regrade-Bold-BF65af35d84e111.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/Neue-Regrade-ExtraBold-Italic-BF65af35d8315f8.otf",
      weight: "800",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Goolol",
  description: "An app by dexifier",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={neueRegrade.className}>{children}</body>
    </html>
  );
}
