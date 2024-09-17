import Button from "./Button/Button";
import { diff } from "../data";
import { useState } from "react";

export default function ButtonsSection() {
  let [textType, setTextType] = useState();
  function handleClick(type) {
    setTextType(type);
  }

  return (
    <section>
      <h3>Чем мы отличаемся от других?</h3>
      <Button
        isActive={textType == "first"}
        onClick={() => handleClick("first")}
      >
        Проектно-ориентированный подход
      </Button>
      <Button
        isActive={textType == "second"}
        onClick={() => handleClick("second")}
      >
        Интерактивная поддержка
      </Button>
      {textType ? <p>{diff[textType]}</p> : <p>Нажми на кнопку</p>}
    </section>
  );
}
