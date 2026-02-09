import Link from "next/link";
import React from "react";
import Image from "next/image";
import { ReactNode } from "react";
import { redirect } from "next/navigation";
import LogoutButton from "@/components/LogoutButton";
import { isAuthenticated } from "@/lib/actions/auth.action";
const Layout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");
  return (
    <div className="root-layout">
      <nav className="flex justify-between items-center px-8 py-4 shadow ">
        {/* Left side: Logo + Nav Links */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="PrepX Logo" width={50} height={40} />
            <h5 className="text-white font-bold !text-3xl">PrepX...</h5>

          </Link>
         </div>

         <div className="flex items-center gap-4">
          <Link
            href="/dashboard"
            className="px-2 py-1 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
          >
            Dashboard
          </Link>
           {/* Right side: Logout */}
        <LogoutButton />
        </div>
      </nav>

      <main className="p-6">{children}</main>
    </div>
  );
};

export default Layout;


