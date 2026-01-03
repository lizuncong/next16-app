"use client";

import { IProductItem } from "@/types/product";
import { useState } from "react";
import { clearProductList } from "../action";

interface Props {
  defaultList: IProductItem[];
  renderTime: string;
}
export default function List(props: Props) {
  const { defaultList, renderTime } = props;
  const [list] = useState(defaultList);
  return (
    <div>
      <div>渲染的时间：{renderTime} </div>
      <button
        className="text-blue-500"
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
