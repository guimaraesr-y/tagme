'use client';

import Link from "next/link";
import Logo from "./logo";
import { useAuth } from "@/context/AuthContext";
import { MenuItem } from "@/app/dashboard/layout";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import clsx from "clsx";


interface HeaderProps {
  menuItems?: MenuItem[];
}

export default function Header({ menuItems }: HeaderProps) {
  const pathname = usePathname();
  const [title, setTitle] = useState<string>();
  const { user } = useAuth();

  useEffect(() => {
    if(!menuItems) return;

    const item = menuItems.find((item) => item.path === pathname);
    setTitle(item?.name);
  }, [pathname, menuItems]);

  return (
    <header className={clsx("z-30 w-full", {
      "relative": title,
      "fixed top-2 md:top-6": !title,
    })}>
      <div className={clsx("mx-auto", {'max-w-6xl px-4 sm:px-6': !title})}>
        <div className="relative px-6 flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            {(!user && !title) && (
              <>
                <li>
                  <Link
                    href="/signin"
                    className="btn-sm bg-white text-gray-800 shadow hover:bg-gray-50"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    href="/signup"
                    className="btn-sm bg-gray-800 text-gray-200 shadow hover:bg-gray-900"
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
            
            {(user && !title) && (
              <li>
                <Link
                  href="/dashboard"
                  className="btn-sm bg-gray-800 text-white shadow hover:bg-gray-500"
                >
                  Dashboard
                </Link>
              </li>
            )}

            {title && (
              <li>
                <p className="font-light">
                  {title}
                </p>
              </li>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
}
