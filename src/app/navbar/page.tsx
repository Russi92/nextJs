

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];
  console.log(pathname)

  return (
    <nav className="flex gap-4 p-4 bg-gray-100">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`${
            pathname === link.href
              ? "text-blue-500 font-bold underline"
              : "text-gray-700"
          } hover:text-blue-400`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
