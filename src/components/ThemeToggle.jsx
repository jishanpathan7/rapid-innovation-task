// src/components/ThemeToggle.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../features/themeSlice";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <span
      onClick={() => dispatch(toggleTheme())}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        background: "none",
        border: "none",
        color: "#fff",
        cursor: "pointer"
      }}
    >
      {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
    </span>
  );
};

export default ThemeToggle;
