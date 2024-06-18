import React from "react";
import Link from "next/link";

export default function TheAdminNav() {
  const adminNavLinks = [
    { title: "Home", href: "/" },
    { title: "Design", href: "/admin/design" },
    { title: "Contact", href: "/admin/contact" },
    { title: "Reviews", href: "/admin/reviews" },
  ];

  const navlinks = [
    { title: "Announcement", href: "/admin/design/announcement" },
    { title: "Hero Banner", href: "/admin/design/hero-banner" },
    { title: "Footer", href: "/admin/design/footer" },
    { title: "Reviews", href: "/admin/reviews" },
  ];

  return (
    <div className="w-[80%]">
      <ul className="flex flex-col gap-2 relative w-full">
        {adminNavLinks.map((link) => (
          <li
            key={link.href}
            className="flex items-center text-left uppercase p-3 w-full rounded-sm transition duration-300 ease-out hover:bg-gray-100"
          >
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
