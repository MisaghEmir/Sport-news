import Header from "@/components/layout/Header";
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
      <div className=" relative ">
        <Header />
      </div>
      {children}
      <Footer />
    </>
  );
}
