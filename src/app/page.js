import { Inter, Actor, Roboto } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });
const actor = Actor({ subsets: ["latin"], weight: ["400"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400"] });

export const metadata = {
  title: "MentMeet",
  description: "MentMeet",
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
