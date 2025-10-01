import { useThemeContext } from "./ThemeContext";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useThemeContext();
  const isLight = theme === "light";
  return (
    <div className="switcher">
      <button
        onClick={() => {
          if (isLight) setTheme("dark");
          else setTheme("light");
        }}
      >
        {isLight ? "Light" : "Dark"}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
