import { useState } from "react";
import "./style.css";
const Squarerandom = () => {
  const [qbox, setQbox] = useState(["box1", "box2", "box3", "box4"]);

  const addBtn = (index) => {
    alert(index);
    const red = Math.floor(Math.random() * 256);
    const pink = Math.floor(Math.random() * 256);
    const yellow = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${red}, ${pink}, ${yellow})`;
    setQbox(randomColor);
  };
  return (
    <>
      <section>
        {qbox.map((item, index) => {
          return <div key={index}>
            <div
              onClick={() => addBtn(index)}
              className={"box"}

            >{item}</div>
          </div>
        }
         
         
        )}
      </section>
    </>
  );
};
export default Squarerandom;
