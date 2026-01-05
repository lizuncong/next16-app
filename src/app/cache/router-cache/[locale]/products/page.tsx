import { getProductList } from "./action";
import List from "./components/List";
import Link from "next/link";
export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const productList = await getProductList();
  return (
    <main className="md">
      <h1 className="text-lg font-bold">
        Next 16 客户端路由缓存功能(Router Cache)
      </h1>
      <p>本篇文章演示了Next16的客户端路由缓存功能。默认情况下，页面不会缓存</p>
      <div>
        服务器渲染的时间：{new Date().toLocaleString()}{" "}
        <span className="text-red-500">每次请求，这个渲染时间都会重新生成</span>
      </div>
      <div>locale: {locale}</div>
      <div className="my-4">
        <Link
          className="text-blue-500"
          href="/cache/router-cache/en/products/add"
        >
          Add
        </Link>
      </div>
      <List
        defaultList={productList}
        renderTime={new Date().toLocaleString()}
      />
    </main>
  );
}
