'use client';

import { MenuItem } from "@/app/dashboard/layout";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface SideBarProps {
  menuItems: MenuItem[];
}

const Sidebar: React.FC<SideBarProps> = ({ menuItems }) => {
  const pathname = usePathname();

  return (
    <div className="w-64 h-screen bg-gradient-to-b from-blue-600 to-blue-800 text-white p-6 shadow-lg flex flex-col">
      <h2 className="text-3xl font-bold mb-8 tracking-wide">TagMe</h2>
      <hr className="border-blue-400 mb-8" />
      <nav className="flex-grow space-y-2">
        {menuItems.map((item) => (
          <Link key={item.name} href={item.path} passHref>
            <p
              className={clsx(
                "block py-3 px-4 rounded-lg transition duration-200 ease-in-out cursor-pointer",
                pathname === item.path
                  ? "bg-blue-500 text-white font-semibold shadow-md"
                  : "text-blue-100 hover:bg-blue-500 hover:bg-opacity-75"
              )}
            >
              {item.name}
            </p>
          </Link>
        ))}
      </nav>
      <footer className="mt-auto text-blue-200 text-sm">
        © 2024 TagMe, Inc.
      </footer>
    </div>
  );
};

export default Sidebar;
