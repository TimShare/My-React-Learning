import Button from "./Button/Button";

export default function TabsSection({ active, onChange }) {
  return (
    <section>
      <Button isActive={active == "main"} onClick={() => onChange("main")}>
        Главная
      </Button>
      <Button
        isActive={active == "feedback"}
        onClick={() => onChange("feedback")}
      >
        О нас
      </Button>
      <Button isActive={active == "effect"} onClick={() => onChange("effect")}>
        Effect
      </Button>
    </section>
  );
}
