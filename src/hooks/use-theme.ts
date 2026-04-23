import { useContext } from "react";
import { ThemeContext } from "@/lib/theme-context";

export const useTheme = () => useContext(ThemeContext);
