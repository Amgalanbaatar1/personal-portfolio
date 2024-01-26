import { useEffect, useState } from "react";
import { LuMoonStar } from "react-icons/lu";
import { GoSun } from "react-icons/go";

export function ThemeChanger() {
  const [theme, setTheme] = useState("light"); //dark

  function changeTheme() {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    setTheme(localTheme);
    document.documentElement.classList.add(localTheme);
  }, []);
  2;
  return (
    <button onClick={changeTheme}>
      {theme === "light" && <GoSun />}
      {theme === "dark" && <LuMoonStar />}
    </button>
  );
}
