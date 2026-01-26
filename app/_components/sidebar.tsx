"use client";
import { LayoutGrid, Package, ShoppingBasket } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { label: "dashboard", href: "/", icon: LayoutGrid },
  { label: "produtos", href: "/products", icon: Package },
  { label: "vendas", href: "/sales", icon: ShoppingBasket },
];

const Sidebar = () => {
  const path = usePathname();
  return (
    <div className="w-64 rounded-r-lg bg-white text-start">
      <div className="rounded-lg border-b border-zinc-200 px-5 py-1">
        <h1 className="p-4 text-2xl font-bold text-black">STOCK</h1>
      </div>

      <div className="flex flex-col gap-2 p-2">
        {menuItems.map((item) => {
          const isActive = path === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-md px-6 py-3 text-start hover:bg-zinc-200 hover:text-black ${isActive ? "bg-zinc-200 text-black" : "text-black"}`}
            >
              <item.icon className="mb-1 mr-2 inline" size={16} />
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
