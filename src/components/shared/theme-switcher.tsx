"use client";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [mount, setMount] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMount(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  if (!mount) return null;

  return (
    <div suppressHydrationWarning>
      <Button
        suppressHydrationWarning
        variant={"outline"}
        size="icon"
        onClick={toggleTheme}
        className="w-16 h-16 p-0"
      >
        {theme === "light" ? <SunIcon size={28} /> : <MoonIcon size={28} />}
      </Button>
    </div>
  );
};

export default ThemeSwitcher;
