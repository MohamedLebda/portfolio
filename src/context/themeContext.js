import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ initialColor, children }) => {
  const [color, setColor] = useState("hsl(var(--primary-hue), 89%, 41%)");
  const [bgColor, setBgColor] = useState("white");

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--color-primary", color);
    if (bgColor === "white") {
      root.style.setProperty(
        "--color-white",
        "hsl(0, 5%, var(--white-lightness))"
      );
      root.style.setProperty(
        "--color-light",
        "hsl(var(--primary-hue), 5%, var(--light-lightness))"
      );
      root.style.setProperty(
        "--color-black",
        "hsl(var(--primary-hue), 5%, var(--black-lightness))"
      );
      root.style.setProperty(
        "--color-dark",
        "hsl(var(--primary-hue), 5%, var(--dark-lightness))"
      );
    } else {
      root.style.setProperty(
        "--color-white",
        "hsl(var(--primary-hue), 5%, var(--black-lightness))"
      );
      root.style.setProperty(
        "--color-light",
        "hsl(var(--primary-hue), 5%, var(--dark-lightness))"
      );
      root.style.setProperty(
        "--color-black",
        "hsl(0, 5%, var(--white-lightness))"
      );
      root.style.setProperty(
        "--color-dark",
        "hsl(var(--primary-hue), 5%, var(--light-lightness))"
      );
    }
  }, [color, bgColor]);

  return (
    <ThemeContext.Provider value={{ color, setColor, bgColor, setBgColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
