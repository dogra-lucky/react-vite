import {useState} from "react";
import { InnerComponent } from "./InnerComponenet";
export const OuterComponent = () => {
  const [count, setCount] = useState(0);
  const addCount = (currentCount: number) => {
    setCount(currentCount+1);
  };
  const subtractCount = (currentCount: number) => {
    setCount(currentCount-1);
  };
  console.log("outer component re-rendered", count);
  return(
  <>
    <div>OuterComponent {count}</div>
    <button onClick={()=>addCount(count)}>ADD</button>
    <button onClick={()=>subtractCount(count)}>SUBTRACT</button>
    <InnerComponent  />
  </>);
};
