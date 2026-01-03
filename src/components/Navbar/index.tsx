"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "./menu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  // 防止背景滚动
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // 自动展开包含当前路径的父菜单
  useEffect(() => {
    navItems.forEach((item) => {
      if (item.children) {
        const hasActiveChild = item.children.some(
          (child) => pathname === child.href
        );
        if (hasActiveChild) {
          setOpenSubmenu(item.label);
        }
      }
    });
  }, [pathname]);

  return (
    <>
      {/* 菜单按钮 */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed left-4 top-4 z-50 inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white bg-white/80 backdrop-blur-sm dark:bg-black/80 shadow-lg"
        aria-expanded={isOpen}
        aria-label="打开菜单"
      >
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
      </button>

      {/* 遮罩层 */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* 抽屉 */}
      <div
        className={`fixed left-0 top-0 z-50 h-full w-80 transform bg-white shadow-xl transition-transform duration-300 ease-in-out dark:bg-gray-900 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* 抽屉头部 */}
          <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4 dark:border-gray-800">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-xl font-bold text-gray-900 dark:text-white"
            >
              Next 16教程
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
              aria-label="关闭菜单"
            >
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
            </button>
          </div>

          {/* 导航内容 */}
          <nav className="flex-1 overflow-y-auto px-4 py-6">
            <div className="space-y-2">
              {navItems.map((item) => {
                // 检查是否有子项匹配当前路径
                const hasActiveChild = item.children?.some(
                  (child) => pathname === child.href
                );

                return (
                  <div key={item.href || item.label}>
                    {item.href ? (
                      <Link
                        href={item.href}
                        onClick={() => {
                          setIsOpen(false);
                          setOpenSubmenu(null);
                        }}
                        className={`block rounded-md px-4 py-3 text-base font-medium transition-colors ${
                          pathname === item.href
                            ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white"
                            : "text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                        }`}
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
                          className={`flex w-full items-center justify-between rounded-md px-4 py-3 text-base font-medium transition-colors ${
                            hasActiveChild
                              ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white"
                              : "text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                          }`}
                        >
                          <span>{item.label}</span>
                          <svg
                            className={`h-5 w-5 transition-transform duration-300 ease-in-out ${
                              openSubmenu === item.label
                                ? "rotate-180"
                                : "rotate-0"
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
                                className={`block rounded-md px-4 py-2 text-sm transition-colors ${
                                  pathname === child.href
                                    ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white font-medium"
                                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
                                }`}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
