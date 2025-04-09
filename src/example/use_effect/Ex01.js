import React, { useEffect } from "react";

export const Ex01 = () => {
  useEffect(() => {
    console.log("처음 화면에 나타났을 때만 실행됨 ✅");
  }, []);

  return <h3>👋 Hello useEffect</h3>;
};

