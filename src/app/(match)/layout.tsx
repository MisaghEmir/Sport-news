import HeaderMatches from "@/components/layout/Header-Matches";
import Header from "@/components/layout/Header";
import "../globals.css";
import "../env.css"
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <HeaderMatches />
    <Header />
    {children}
    <Footer />
    </>
  );
}
