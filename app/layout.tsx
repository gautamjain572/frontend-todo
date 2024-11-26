import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My calendar",
  description: "Creating My new project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
