import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import SidebarDashbourd from "@/components/dashbourd/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className=" relative ">
      </div>
      <SidebarProvider defaultOpen={false}>
        <SidebarDashbourd />
         <SidebarTrigger />
        {children}
      </SidebarProvider>
    </>
  );
}
