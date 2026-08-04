import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rey Hair Miami | Modern Grooming in Davie",
  description: "Precision cuts, premium grooming, and a refined salon experience in Davie, Florida.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
