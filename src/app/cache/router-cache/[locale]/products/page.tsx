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
    <main>
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
