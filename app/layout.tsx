import NavbarComponent from "../components/Navbar";
import { Roboto } from "next/font/google";

export const metadata = {
  title: "Basic app with Next Js",
  description: "This is the principal page of my app",
};

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NavbarComponent />
        {children}
      </body>
    </html>
  );
}
