import HeaderImage from "@/components/layout/header-image/Header-Image";
import "../globals.css";
import "../env.css";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderImage />
      {children}
      <Footer />
    </>
  );
}
