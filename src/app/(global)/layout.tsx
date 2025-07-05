import Header from "@/components/layout/Header";
import "../globals.css";
import "../env.css";
import Footer from "@/components/layout/Footer";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import FilterSidebar from "@/components/layout/search/FilterSidebar";

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
      <SidebarProvider defaultOpen={false}>
        <FilterSidebar />
        {children}
      </SidebarProvider>
      <Footer />
    </>
  );
}
