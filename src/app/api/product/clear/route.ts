import { NextResponse } from "next/server";
import { productList } from "../constant";
export async function POST() {
  productList.length = 0;
  // 请求成功
  return NextResponse.json(
    {
      code: 200,
      message: "清除成功",
      data: productList,
    },
    {
      status: 200,
    }
  );
}
