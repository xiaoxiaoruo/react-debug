import { useRef } from "react";
import { useState } from "react";
import { createRoot } from "react-dom/client";

// function FunctionComponent() {
//   // const ref = useRef
//   // const [count, setCount] = useState(0)
//   return (
//     <h1>
//       hello<span style={{ color: "red" }}>world</span>
//     </h1>
//   );
// }

function App() {
  debugger

  const [value, setValue] = useState(0);
  const ref = useRef();
  ref.current = "some value";
  return (
    <div className="App">
      <h1>目前值：{value}</h1>
        <div>
            <button onClick={() => { 
              setValue(v => v + 1)
            }}>增加</button>
        </div>
  </div>
  );
}

// let element = <FunctionComponent />;
let appElement = <App />;
// console.log("🚀 ~ file: main.jsx:26 ~ element:", element)
debugger
const root = createRoot(document.getElementById("root"), {
  // unstable_concurrentUpdatesByDefault: true 开启时间分片
});
console.log("🚀 ~ file: main.jsx:28 ~ root:", root)

debugger
root.render(appElement);

// import { render } from 'react-dom'
// debugger;
// render('hello word', document.getElementById('root'))
