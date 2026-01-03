"use client";

import { addProduct } from "../action";

export const AddBtn = () => {
  return (
    <button className="text-blue-500" onClick={() => addProduct()}>
      点击添加商品
    </button>
  );
};
