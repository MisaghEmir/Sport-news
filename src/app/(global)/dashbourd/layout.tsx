import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import SidebarDashbourd from "@/components/dashbourd/Sidebar";
import SidebarProfile from "@/components/dashbourd/ProfileSidebar";


export default function RootLayout({
  children,
  nav,
}: Readonly<{
  children: React.ReactNode;
  nav: React.ReactNode;
}>) {
  return (
    <>
      <div className=" relative "></div>
      <SidebarProvider defaultOpen={true}>
        <SidebarDashbourd />
        <div className="flex flex-col p-2 w-full">
          <div className="flex w-full">
            <SidebarTrigger />
          </div>
          <div>{children}</div>
          <div className="pl-10">{nav}</div>
        </div>
        <div>
          <SidebarProvider open={true}>
            <SidebarProfile />
          </SidebarProvider>
        </div>
      </SidebarProvider>
    </>
  );
}
