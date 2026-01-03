"use client";

import { useState } from "react";
import { addProduct } from "../action";

export const AddBtn = () => {
  const [list, setList] = useState([]);
  return (
    <button
      className="text-blue-500"
      onClick={async () => {
        const res = await addProduct();
        console.log("res...1", res);
        setList(res.data);
      }}
    >
      点击添加商品{list.length}
    </button>
  );
};
