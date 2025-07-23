import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import SidebarDashbourd from "@/components/dashbourd/Sidebar";
import SidebarProfile from "@/components/dashbourd/ProfileSidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
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
          <div className="pl-10">{children}</div>
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
