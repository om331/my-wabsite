"use client";
import { useState } from "react";

export default function About() {
  const [response, setResponse] = useState([]);
  const callApi = async (method: string) => {
    
      const res = await fetch("/api/slider", {
        method,
        headers: {
          "Content-Type": "application/json",
        },

      });

      const data = await res.json();
      setResponse(data);
     
  };
  const show = () => {
    callApi("GET");
   };
   
   
return (
    <>
    <h2>tell me what do you want</h2>
    <button onClick={show}>
         show images
    </button>
    
    <div>
        
      {response.map((ind, i)=><img key={i}src={"../"+ind}/>)}
    </div>
    </>
  );
}
