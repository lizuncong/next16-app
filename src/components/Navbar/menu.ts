interface NavItem {
  href?: string;
  label: string;
  target?: string;
  children?: NavItem[];
}

export const navItems: NavItem[] = [
  {
    href: "https://github.com/lizuncong/next16-app",
    label: "GitHub",
    target: "blank",
  },
  { href: "/", label: "首页" },
  {
    label: "路由",
    children: [
      // { href: "/routes/basic", label: "基础路由" },
      // { href: "/routes/dynamic", label: "动态路由" },
      // { href: "/routes/nested", label: "嵌套路由" },
    ],
  },
  {
    label: "缓存",
    children: [
      {
        href: "/cache/fetch/dynamic/12",
        label: "动态渲染-fetch请求默认不缓存",
      },
      { href: "/cache/fetch/static-render", label: "静态渲染" },
      // { href: "/cache/full-route", label: "全路由缓存" },
    ],
  },
];
