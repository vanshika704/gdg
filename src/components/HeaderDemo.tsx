"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { AlignRight, X } from "lucide-react";

const HeaderDemo = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (pathname.startsWith("/admin")) return null;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" },
  ];

  // Move the selected nav link to the beginning of the array
  const reorderedNavLinks = [
    ...navLinks.filter((link) => link.path === pathname),
    ...navLinks.filter((link) => link.path !== pathname),
  ];

  return (
    <nav className="relative p-4 sm:p-10 bg-black z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-white">
          <Image src="/images/logo.png" alt="GDG Logo" width={40} height={40} />
          <div className="text-sm">
            <div className="font-bold text-md">Google Developer Groups</div>
            <div className="text-gray-400 text-xs sm:block">
              Maharishi Markendeshwar University
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4 border border-gray-700 rounded-full text-md bg-black">
          {reorderedNavLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`px-4 py-1 rounded-full transition-colors ${
                pathname === link.path
                  ? "bg-white text-black font-semibold px-7 py-2" // Highlight selected link with white background
                  : "text-gray-300 hover:text-gray-100 px-7 py-2"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <AlignRight size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black border-t border-gray-800">
          <div className="flex flex-col p-4 space-y-3">
            {reorderedNavLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  pathname === link.path
                    ? "bg-white text-black font-semibold" // Highlight selected link with white background
                    : "text-gray-300 hover:text-gray-100"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default HeaderDemo;