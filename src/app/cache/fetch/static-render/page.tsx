import Image from "next/image";

export default async function Page() {
  const res = await fetch("https://api.thecatapi.com/v1/images/search").then(
    (res) => res.json()
  );
  console.log("res....", res);
  const catInfo = res?.[0];
  return (
    <main>
      <div>
        服务器渲染的时间：{new Date().toLocaleString()}{" "}
        <span className="text-red-500">
          在构建时生成，每次刷新，这个时间都不会变
        </span>
      </div>
      <div>
        这是一个静态渲染的页面(cache/fetch/static-render)，在构建时生成，因此即使每次刷新页面，图片都不会变
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
