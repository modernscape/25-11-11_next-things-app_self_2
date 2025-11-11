import type {Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "25-11-11_next-things-app_self2",
  description: "Next.js App 自分で2回目",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
