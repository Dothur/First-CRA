import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("i run all the time");
  useEffect(() => {
    console.log("call the api...");
    // 맨 처음 단 한번만 실행됨!
  }, []);
  //useEffect 를 사용하는 이유!
  return (
    <div>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>click me</button>
      <Button text={"Continue!"} />
    </div>
  );
}

export default App;
