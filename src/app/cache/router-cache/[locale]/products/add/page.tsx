import { AddBtn } from "./components/Add";
import Link from "next/link";
export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <main>
      <div>
        服务器渲染的时间：{new Date().toLocaleString()}{" "}
        <span className="text-red-500">每次请求，这个渲染时间都会重新生成</span>
      </div>
      <div>locale: {locale}</div>
      <AddBtn />
      <Link
        className="text-blue-500 underline"
        href="/cache/router-cache/en/products"
      >
        返回上一页
      </Link>
    </main>
  );
}
