import Header from "@/components/Header";
import ReduxProvider from "@/redux/reduxProvider";
import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

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
        <link rel="icon" href="/image/favicon.png" />
      </head>
      <body className={roboto.className}>
        <div id="modal" className="w-200" />
        <div id="map" />
        <Header />
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
