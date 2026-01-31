"use client";

import Cookies from "js-cookie";
import { User } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const userName = Cookies.get("userName");

  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("userName");
    router.push("/login");
  };

  return (
    <nav className="flex justify-between items-center inline-padding p-4 bg-[#E1E9EE]">
      <span className="font-semibold sm:text-3xl text-lg">{userName}</span>
      <div className="relative group">
        <button
          className="p-2 rounded-full cursor-pointer hover:bg-gray-200 transition"
          aria-haspopup="true"
        >
          <User />
        </button>
        <div
          className="
        absolute right-0  w-32
        bg-white border border-gray-200 rounded-md shadow-lg
        opacity-0 scale-95 pointer-events-none
        group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto
        transition-all duration-150 ease-out
        z-50
      "
        >
          <button
            onClick={logout}
            className="w-full text-left px-4 py-2 text-sm
                   hover:bg-gray-100 transition cursor-pointer"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
