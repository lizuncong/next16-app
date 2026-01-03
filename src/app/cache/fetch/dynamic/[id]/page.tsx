import Image from "next/image";
import Link from "next/link";
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const res = await fetch("https://api.thecatapi.com/v1/images/search").then(
    (res) => res.json()
  );
  console.log("res....", res);
  const catInfo = res?.[0];
  return (
    <main>
      <div>
        服务器渲染的时间：{new Date().toLocaleString()}{" "}
        <span className="text-red-500">每次请求，这个渲染时间都会重新生成</span>
      </div>
      <div>参数slug：{id}</div>
      <div>
        这是一个动态渲染的页面(cache/fetch/dynamic/[id])，每次刷新页面都会重新渲染。在Next16中，fetch请求默认不会缓存。因此每次刷新页面，显示的图片都是不同的
      </div>
      <div>
        在Next
        14中，fetch请求默认是缓存的，因此同样的代码，在Next14中表现会不一样，具体可以看：
        <Link
          target="blank"
          className="text-blue-500 underline"
          href="https://next14-app-nu.vercel.app/cache/fetch/dynamic/12"
        >
          Next14，fetch请求默认缓存
        </Link>
      </div>
      <Image
        src={catInfo?.url}
        alt="Next.js logo"
        width={catInfo?.width}
        height={catInfo?.height}
      />
    </main>
  );
}
