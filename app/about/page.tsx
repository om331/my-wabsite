"use client";
import { useState } from "react";

export default function About() {
  const [response, setResponse] = useState<string[] | null>(null);
  const [slider] = useState<string[] | null>(null);

  const [formedata, setformateDeta] = useState({ name: "" }); //form

  const callApi = async (method: string) => {
    try {
      const res = await fetch("/api/user", {
        method,
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formedata),
      });

      const data = await res.json();
      setResponse(data);
    } catch (e:unknown) {
      console.log(e);
    }
  };
  const show = () => {
    console.log(formedata);
    callApi("POST");
   };
   
   const img = (event: React.MouseEvent<HTMLInputElement>): void => {
    event.preventDefault(); // Prevents the default action of the event
    console.log(slider);    // Assumes `slider` is defined elsewhere in the scope
    callApi("GET");         // Assumes `callApi` is a function defined elsewhere
  };
return (
    <>
      <div>
        <h1>Test API Routes</h1>
       
        <div>
          <h2>Response:</h2>

          {response && JSON.stringify(response)}

           {slider &&
            slider.map((image: string, index: number) => (
              <img src={image} key={index} />
            ))} 
        </div>
        <br />
        <br />
        <form onSubmit={show}>
          <input
            type="text"
            placeholder="enter name"
            value={formedata.name || ""}
            onChange={(e) => {
              setformateDeta({ name: e.target.value });
            }}
            style={{ color: "black" }}
          />

          <input type="submit"></input>
        </form>

           <div>
        <input onClick={img} type="button" value="show images"/>
        </div>

        {response}
        {slider}
      </div>
    </>
  );
}
