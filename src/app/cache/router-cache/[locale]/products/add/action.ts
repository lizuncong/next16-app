"use server";

import { ApiHost } from "@/constant";

export async function addProduct() {
  const result = await fetch(`${ApiHost}/api/product/add`, {
    method: "POST",
    cache: "no-store",
  });
  const res = await result.json();
  return res;
}
