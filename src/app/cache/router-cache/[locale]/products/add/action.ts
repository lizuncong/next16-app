"use server";
export async function addProduct() {
  const result = await fetch("https://next16-app.vercel.app/api/product/add", {
    method: "POST",
    cache: "no-store",
  });
  const res = await result.json();
  return res;
}
