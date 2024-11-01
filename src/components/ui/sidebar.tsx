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
    <div className="w-64 bg-white text-black p-6">
      <h2 className="text-2xl font-bold mb-6">TagMe</h2>
      <hr className="pb-6" />
      <nav>
        {menuItems.map((item) => (
          <Link key={item.name} href={item.path} passHref>
            <p
              className={clsx("block py-2 px-4 rounded", {
                "bg-gray-200": pathname === item.path
              })}
            >
              {item.name}
            </p>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
