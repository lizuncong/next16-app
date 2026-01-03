import { NextResponse } from "next/server";
import { productList } from "../constant";
export async function POST() {
  const id = `${productList.length + 1}`;
  productList.unshift({
    productId: id,
    productName: `商品${id}`,
  });
  // 请求成功
  return NextResponse.json(
    {
      code: 200,
      message: "添加成功",
      data: productList,
    },
    {
      status: 200,
    }
  );
}
