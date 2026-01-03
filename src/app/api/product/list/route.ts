import { NextResponse } from "next/server";
import { productList } from "../constant";
export async function POST() {
  // 请求成功
  return NextResponse.json(
    {
      code: 200,
      message: "请求成功",
      data: productList,
    },
    {
      status: 200,
    }
  );
}
// export async function POST(request: NextRequest) {
//   const body = await request.json();

//   if (res.code !== 200) {
//     return NextResponse.json(
//       {
//         code,
//         message:
//           message ||
//           (code === StatusCode.UNAUTHORIZED ? "Login expired" : "System error"),
//       },
//       { status: code }
//     );
//   }

//   // 请求成功
//   return NextResponse.json(
//     {
//       code,
//       message,
//       ...(data !== null && { data }),
//     },
//     {
//       status: code,
//     }
//   );
// }
