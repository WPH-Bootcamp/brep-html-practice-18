import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

const Child = () => {
  const context = useContext(ThemeContext);

  if (!context) return null;
  const { theme } = context;

  return (
    <p style={{ color: theme === "dark" ? "white" : "black" }}>
      Theme : {theme}
    </p>
  );
};

export default Child;
