"use client";

import { signOut } from "firebase/auth";
import { auth } from "@/firebase/client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { serverLogout } from "@/lib/actions/auth.action";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      // 🔹 Clear Firebase session (client)
      await signOut(auth);

      // 🔹 Clear session cookie (server)
      await serverLogout();

      toast.success("Logged out successfully.");

      // 🔹 Force redirect
      router.replace("/sign-in");
      router.refresh();
    } catch (error) {
      toast.error("Failed to log out. Please try again.");
    }
  };

  return (
    <Button 
      onClick={handleLogout} 
      className="bg-red-500 hover:bg-red-600 text-white"
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
