import Menu from "@/components/menu";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Books",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="flex flex-col items-center justify-between w-full p-8 min-h-screen">
          <div className="flex flex-col gap-8 w-full max-w-3xl">
            <Menu />
            <div className="animate-fade-in-up">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
