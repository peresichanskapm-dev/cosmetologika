import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";

// ── Локальні шрифти (файли в app/fonts/) ──
// CalligraphRuss   → каліграфічний акцент/лого   (--font-script)
// Galliard Antiqua → serif-заголовки (NEXT GEN…) (--font-display)
// Fixel Text       → основний текст / UI          (--font-body)

const script = localFont({
  variable: "--font-script",
  display: "swap",
  src: [{ path: "./fonts/CalligraphRuss-Regular.woff2", weight: "400", style: "normal" }],
});

const display = localFont({
  variable: "--font-display",
  display: "swap",
  src: [
    { path: "./fonts/GalliardAntiqua-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/GalliardAntiqua-Bold.ttf", weight: "700", style: "normal" },
  ],
});

const body = localFont({
  variable: "--font-body",
  display: "swap",
  src: [
    { path: "./fonts/FixelText-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/FixelText-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/FixelText-SemiBold.woff2", weight: "600", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: "EstyDerm",
  description: "EstyDerm — косметологія та догляд за шкірою",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uk"
      className={`${script.variable} ${display.variable} ${body.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
