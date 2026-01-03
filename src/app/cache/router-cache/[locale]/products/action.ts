"use server";
import { IProductItem } from "@/types/product";

export async function getProductList() {
  const result = await fetch("https://next16-app.vercel.app/api/product/list", {
    method: "POST",
    cache: "no-store",
  });
  const res: { data: IProductItem[] } = await result.json();

  return res.data;
}
