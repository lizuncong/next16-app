import Image from "next/image";

export default async function Cat() {
  const res = await fetch("https://api.thecatapi.com/v1/images/search").then(
    (res) => res.json()
  );
  console.log("res....", res);
  const catInfo = res?.[0];
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src={catInfo?.url}
          alt="Next.js logo"
          width={catInfo?.width}
          height={catInfo?.height}
          // width={100}
          // height={20}
          // priority
        />
      </main>
    </div>
  );
}
