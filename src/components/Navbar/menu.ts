interface NavItem {
  href?: string;
  label: string;
  children?: NavItem[];
}

export const navItems: NavItem[] = [
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
