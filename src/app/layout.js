import "./globals.css";

import { Roboto } from "next/font/google";
import { Prata } from "next/font/google";

const prata = Prata({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Horea Matei",
  description: "Horea Matei",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={prata.className}>{children}</body>
    </html>
  );
}
