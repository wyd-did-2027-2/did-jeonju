import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import "./globals.css";
import { siteConfig } from "@/lib/content";

const pretendard = localFont({
  src: [
    {
      path: "fonts/Pretendard-Regular.subset.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "fonts/Pretendard-Medium.subset.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "fonts/Pretendard-Bold.subset.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  preload: true,
  variable: "--font-pretendard",
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "ViecaQHkWxBVd-aqc-2r5F8YjPdMSRdMQntHcf7RaSs",
    other: {
      "naver-site-verification": "c81fc1529d4c98dd1c14ca78a44087bd1d3ba3a3",
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="lenis lenis-smooth">
      <body className={pretendard.className}>{children}</body>
    </html>
  );
}
