import { ways } from "../data";
import WayToTeach from "./WayToTeach";

export default function TeachingSelection() {
  return (
    <section>
      <h3>Наш подход к обучению</h3>
      <ul>
        {ways.map((way) => (
          <WayToTeach key={way.description} {...way} />
        ))}
      </ul>
    </section>
  );
}
