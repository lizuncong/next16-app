import Image from "next/image";

export default async function Home() {
  const res = await fetch("https://api.thecatapi.com/v1/images/search").then(
    (res) => res.json()
  );
  console.log("res....", res);
  const catInfo = res?.[0];
  return (
    <main className=" ">
      <Image
        src={catInfo?.url}
        alt="Next.js logo"
        width={catInfo?.width}
        height={catInfo?.height}
        // width={100}
        // height={20}
        // priority
      />
    </main>
  );
}
