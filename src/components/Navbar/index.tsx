"use client";

import { useState } from "react";
import Link from "next/link";

interface NavItem {
  href?: string;
  label: string;
  children?: NavItem[];
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems: NavItem[] = [
    { href: "/", label: "首页" },
    {
      label: "路由",
      children: [
        { href: "/routes/basic", label: "基础路由" },
        { href: "/routes/dynamic", label: "动态路由" },
        { href: "/routes/nested", label: "嵌套路由" },
      ],
    },
    {
      label: "缓存",
      children: [
        { href: "/cache/request", label: "请求缓存" },
        { href: "/cache/data", label: "数据缓存" },
        { href: "/cache/full-route", label: "全路由缓存" },
      ],
    },
    { href: "/contact", label: "联系" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-black/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="shrink-0">
            <Link
              href="/"
              className="text-xl font-bold text-gray-900 dark:text-white"
            >
              Next 16教程
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item) => (
                <div
                  key={item.href || item.label}
                  className="relative"
                  onMouseEnter={() =>
                    item.children && setHoveredItem(item.label)
                  }
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white flex items-center gap-1">
                      {item.label}
                      <svg
                        className={`h-4 w-4 transition-transform ${
                          hoveredItem === item.label ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </button>
                  )}

                  {/* Desktop Dropdown Menu */}
                  {item.children && hoveredItem === item.label && (
                    <div className="absolute left-0 mt-1 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-800 dark:ring-gray-700">
                      <div className="py-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href || "#"}
                            className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
              aria-expanded="false"
              aria-label="切换菜单"
            >
              <span className="sr-only">打开主菜单</span>
              {!isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 border-t border-gray-200 px-2 pb-3 pt-2 dark:border-gray-800">
            {navItems.map((item) => (
              <div key={item.href || item.label}>
                {item.href ? (
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div>
                    <button
                      onClick={() =>
                        setOpenSubmenu(
                          openSubmenu === item.label ? null : item.label
                        )
                      }
                      className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                    >
                      <span>{item.label}</span>
                      <svg
                        className={`h-5 w-5 transition-transform duration-300 ease-in-out ${
                          openSubmenu === item.label ? "rotate-180" : "rotate-0"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openSubmenu === item.label
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="ml-4 mt-1 space-y-1 pb-1">
                        {item.children?.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href || "#"}
                            onClick={() => {
                              setIsOpen(false);
                              setOpenSubmenu(null);
                            }}
                            className="block rounded-md px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
