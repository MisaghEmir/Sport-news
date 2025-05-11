"use client"
import { useThemeMode } from "@/context/ThemeMode";

export default function Home() {
  const {ThemeMode} = useThemeMode()
  return (
    <div className="">
      Hello
      <button onClick={ThemeMode.toggleThemeMode}>
        Darked
      </button>
    </div>
  );
}
