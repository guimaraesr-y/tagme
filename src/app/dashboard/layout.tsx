import Sidebar from "@/components/ui/sidebar";
import { ReactNode } from "react";
import NavbarHeader from "@/components/ui/dashboard-header";

export const metadata = {
    title: "Dashboard",
    description: "Dashboard",
};

export interface MenuItem {
  name: string;
  path: string;
}

interface DashboardLayoutProps {
  children?: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const menuItems: MenuItem[] = [
    { name: "Home", path: "/dashboard" },
    { name: "Clients", path: "/dashboard/clients" },
    { name: "QR Code", path: "/dashboard/qrcode" },
    { name: "Notifications", path: "/dashboard/notifications" },
    { name: "Profile", path: "/dashboard/profile" }
  ]  
  
  return (
    <div className="flex min-h-screen">
      <Sidebar menuItems={menuItems} />
      <main className="flex-1 p-6">
        <NavbarHeader menuItems={menuItems} />
        <div className="mt-4">{children}</div>
      </main>
    </div>
  )
}

export default DashboardLayout;
