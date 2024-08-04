import { useEffect } from "react";
import { useState } from "react";

export default function UseEffectDemo({ nilai, nilaiLain }) {
  useEffect(() => {
    console.log("Mount");

    return () => {
      console.log("Unmount")
    }
  }, [nilai]);
  
  return (
    <div></div>
  );
}