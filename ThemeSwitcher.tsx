import React, { useEffect, useState } from "react";

interface Icon {
  size: number;
}

const Moon = ({ size }: Icon) => {
  return (
    <svg
      width={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={"gainsboro"}>
      <g>
        <path fill="none" stroke="none" d="M0 0h24v24H0z" />
        <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
      </g>
    </svg>
  );
};
const Sun = ({ size }: Icon) => {
  return (
    <svg
      width={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={"yellow"}>
      <g>
        <path stroke="none" fill="none" d="M0 0h24v24H0z" />
        <circle cx="12" cy="12" r="4" />
        <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
      </g>
    </svg>
  );
};

interface ThemeSwitcherProps {
  size?: "S" | "M" | "L";
}

const ThemeSwitcher = ({ size = "M" }: ThemeSwitcherProps) => {
  const [theme, setTheme] = useState<string>();
  const [iconSize, setIconSize] = useState(30);

  useEffect(() => {
    if (size === "S") setIconSize(15);
    if (size === "L") setIconSize(45);
    const actualTheme = document.documentElement.getAttribute("data-theme");
    if (actualTheme) setTheme(actualTheme);
    else setTheme("light");
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme ?? "");
    if (theme === "dark") document.documentElement.classList.add("dark");
    if (theme === "light") document.documentElement.classList.remove("dark");
  }, [theme]);

  const handleClick = () => {
    if (theme === "dark") setTheme("light");
    if (theme === "light") setTheme("dark");
  };

  return (
    <>
      <div className="p-3" style={{ padding: "0.75rem" }} onClick={handleClick}>
        {theme === "light" ? <Sun size={iconSize} /> : <Moon size={iconSize} />}{" "}
      </div>
    </>
  );
};
export default ThemeSwitcher;
