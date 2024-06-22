

import "./globals.css";
import { Nunito } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"

const nunito = Nunito({subsets: ["latin"]})


export const metadata = {
  title: "Đặt lịch làm nail, cắt tóc",
  description: "Khám phá hàng ngàn cửa hàng làm đẹp tại lamdep.vn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vn">
      <body className={nunito.className}>
        <main>
        {children}
        </main>
        <Toaster />
        </body>
    </html>
  );
}
