import { LangSaver } from "@/components/lang/lang-saver";
import ThemeHandler from "@/components/themes/theme-handler";
import ThemeScript from "@/components/themes/theme-script";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Noto_Sans_Thai, Poppins } from "next/font/google";
import "../globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const notoThai = Noto_Sans_Thai({
  subsets: ["thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-noto-thai",
});

export const metadata: Metadata = {
  title: "Next.js Template Starter",
  description: "My next templates for started new project",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: "en" | "th" }>;
}>) {
  const { lang } = await params;

  return (
    <html
      lang={lang}
      className={`${poppins.variable} ${notoThai.variable}`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body>
        <ThemeHandler />
        {children}
        <LangSaver lang={lang} />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
