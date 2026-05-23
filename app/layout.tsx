import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nesh Rochwani | Software Engineer",
  description: "Full-stack software engineer focused on AI-backed systems, backend reliability, cloud-native applications, and production software.",
  openGraph: {
    title: "Nesh Rochwani | Software Engineer",
    description: "Full-stack software engineer focused on AI-backed systems, backend reliability, cloud-native applications, and production software.",
    url: "https://neshrochwani.dev",
    siteName: "Nesh Rochwani",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nesh Rochwani | Software Engineer",
    description: "Full-stack software engineer focused on AI-backed systems, backend reliability, cloud-native applications, and production software.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
