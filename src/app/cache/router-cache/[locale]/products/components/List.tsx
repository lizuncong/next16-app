"use client";

import { IProductItem } from "@/types/product";
import { useEffect, useState } from "react";
import { clearProductList } from "../action";

interface Props {
  defaultList: IProductItem[];
  renderTime: string;
}
export default function List(props: Props) {
  const { defaultList, renderTime } = props;
  const [list] = useState(defaultList);
  const [innerTime, setInnerTime] = useState("");
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("product list page useEffect=====");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setInnerTime(new Date().toLocaleString());
  }, []);
  return (
    <div className="border rounded border-gray-200 p-4">
      <div>服务器渲染的时间：{renderTime}</div>
      <div>客户端useEffect执行的时间：{innerTime}</div>
      <div>
        计数器：{count}{" "}
        <button
          className="ml-2 text-blue-500 cursor-pointer"
          onClick={() => setCount(count + 1)}
        >
          增加
        </button>
      </div>
      <button
        className="text-blue-500 cursor-pointer"
        onClick={() => {
          clearProductList();
        }}
      >
        Clear
      </button>
      <div>
        defaultList: {defaultList.map((item) => item.productId).join(",")}
      </div>
      <div>list: {list.map((item) => item.productId).join(",")}</div>
      {list.map((item) => {
        return <div key={item.productId}>{item.productName}</div>;
      })}
    </div>
  );
}
