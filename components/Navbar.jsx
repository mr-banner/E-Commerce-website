"use client";

import Cookies from "js-cookie";
import { User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const userName = Cookies.get("userName");
  const [open, setOpen] = useState(false);

  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("userName");
    router.push("/login");
  };

  return (
    <nav className="flex justify-between items-center inline-padding p-4 bg-[#E1E9EE]">
      <span className="font-semibold sm:text-3xl text-lg">{userName}</span>

      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded-full cursor-pointer hover:bg-gray-200 transition"
        >
          <User />
        </button>

        {open && (
          <div className="absolute -right-10 w-32 bg-white rounded-md shadow-lg z-50">
            <button
              onClick={logout}
              className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
