import HeaderMatches from "@/components/layout/Header-Matches";
import Header from "@/components/layout/Header";

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
    </>
  );
}
