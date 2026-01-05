"use client";

import { useEffect, useState } from "react";
import { addProduct } from "../action";

export const AddBtn = () => {
  const [list, setList] = useState([]);
  const [innerTime, setInnerTime] = useState("");
  useEffect(() => {
    console.log("add pageuseEffect=====");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setInnerTime(new Date().toLocaleString());
  }, []);
  return (
    <>
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
      <div>客户端useEffect执行的时间：{innerTime}</div>
    </>
  );
};
