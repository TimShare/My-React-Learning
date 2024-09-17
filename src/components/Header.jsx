import { useState } from "react";
import { useEffect } from "react";

export default function Header() {
  const [now, newDate] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => newDate(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <header>
      <img
        style={{ width: 50 }}
        src={
          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSvwSBVy9R1y9fQ1Mz-5OBva6euqr3wUGsU-VQVQN8CRgINRY7x"
        }
        alt=""
      />
      {/* <h3>My World</h3> */}
      <span>Время сейчас: {now.toLocaleTimeString()}</span>
    </header>
  );
}
