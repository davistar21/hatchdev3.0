import { useThemeContext } from "./ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";

const Card = () => {
  const { theme } = useThemeContext();
  return (
    <div className="card">
      <span>Theme Name: {theme}</span>
      <span>Card Name: Card#1</span>
      <ThemeSwitcher />
    </div>
  );
};

export default Card;
