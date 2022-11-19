import {useState} from "react";



export const UseState = () => {
    let[a, setA] = useState(1);
    const x = () => {
        setA(++a)
    }
     const z = () => {
        setA(a = 0)
    }


  return(

      <div>
         <h1>{a}</h1>
          <button onClick={x}>Calaculation</button>
          <button onClick={z}>0</button>

      </div>
  )
}