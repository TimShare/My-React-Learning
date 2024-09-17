import "./Button.css";

export default function Button({ children, isActive, ...props }) {
  const handleMouseEnter = () => console.log("Entered");

  return (
    <button {...props} className={isActive ? "button active" : "button"}>
      {children}
    </button>
  );
}
