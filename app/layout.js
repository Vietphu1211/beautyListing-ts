

import "./globals.css";
import { Inter } from "next/font/google"


const inter = Inter({subsets: ["latin"]})


export const metadata = {
  title: "Booking làm nail, cắt tóc",
  description: "Khám phá hàng ngàn cửa hàng làm đẹp tại lamdep.vn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        </body>
    </html>
  );
}
