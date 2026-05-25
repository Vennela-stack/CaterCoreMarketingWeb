import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CaterCore — The operating system for modern caterers",
  description:
    "CaterCore replaces spreadsheets, email threads, and disconnected tools with one workspace for quotes, contracts, menus, staffing, and event delivery.",
  metadataBase: new URL("https://catercore.com"),
  openGraph: {
    title: "CaterCore — The operating system for modern caterers",
    description:
      "From inquiry to invoice — all in one place. Quotes, contracts, menus, staffing, and event delivery.",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#F6F6F3",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-ink-950">
      <head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body className="min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
