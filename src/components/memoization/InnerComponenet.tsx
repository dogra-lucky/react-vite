import {memo,useState} from "react";
export const InnerComponent = memo(() => {
    const [count, setCount] = useState(0);
    const add = ()=>{
        setCount(count+1)
    }
    const reduce = ()=>{
        setCount(count-1)
    }
  console.log("inner component re-rendered");
  return (
  <>
  <div>InnerComponent {count}</div>
  <button onClick={add}>add</button>
  <button onClick={reduce}>reduce</button>

  </>
  );
});