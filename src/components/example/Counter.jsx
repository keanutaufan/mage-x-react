import { useState } from "react";

export default function Counter() {
  const [nilai, setNilai] = useState(0);
  
  function handleClick() {
    setNilai(prev => prev + 1);
    setNilai(prev => prev + 1); 
    setNilai(prev => prev + 1); 
  }

  return (
    <div>
      <button onClick={handleClick}>Nilai: {nilai}</button>
    </div>
  );
}