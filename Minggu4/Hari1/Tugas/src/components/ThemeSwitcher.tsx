import { useTheme } from "./theme-provider"; // ⬅️ langsung dari components
import { Button } from "./ui/button";

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme}>
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </Button>
  );
}

