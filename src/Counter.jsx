import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  //   console.log(count);
  //   console.log(setCount);

  function handleIncrement() {
    console.log("hello");
    // setCount("heLLOO");
    setCount(count + 1);
  }

  function handleDecrement() {
    console.log("Decrease!!!");
    setCount(count - 1);
  }

  function toggleLight() {
    setIsOn((prev) => !prev);
    // setIsOn(!isOn);
  }

  return (
    <>
      <div className="counter">
        <h2>Counter</h2>

        <h3>Count: {count}</h3>

        <button onClick={handleIncrement}>Increase</button>

        {/* <button onClick={() => setCount((prev) => prev + 1)}>Increase</button> */}

        <button>Reset</button>

        <button onClick={handleDecrement}>Decrease</button>
      </div>

      {/*light switching */}
      <div className="lightSwitch">
        <h3>Light Switch</h3>
        <p>This light bulb is {isOn ? "ON" : "OFF"} </p>
        <button onClick={toggleLight}>
          Press to Switch {isOn ? "OFF" : "ON"}
        </button>
      </div>
    </>
  );
};

export default Counter;
