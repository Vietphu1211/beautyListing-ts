

import "./globals.css";
import { Nunito } from "next/font/google"


const nunito = Nunito({subsets: ["latin"]})


export const metadata = {
  title: "Booking làm nail, cắt tóc",
  description: "Khám phá hàng ngàn cửa hàng làm đẹp tại lamdep.vn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vn">
      <body className={nunito.className}>
        {children}
        </body>
    </html>
  );
}
