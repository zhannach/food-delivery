import Header from "@/components/Header";
import ReduxProvider from "@/redux/reduxProvider";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Delivery app",
  description: "Delivery food app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/image/favicon.png"/>
      </head>
      <body className={inter.className}>
        <div id="modal" className="w-200" />
        <Header />
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
