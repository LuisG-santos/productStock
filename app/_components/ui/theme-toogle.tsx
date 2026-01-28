"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "./switch";
import { MoonIcon, SunIcon } from "lucide-react";

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const isDark = (theme ?? resolvedTheme) === "dark";
    setChecked(isDark);
  }, [theme, resolvedTheme, mounted]);

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-2">
      <SunIcon width={20} height={20} />

      <Switch
        checked={checked}
        onCheckedChange={(value) => {
          setChecked(value);
          setTimeout(() => {
            setTheme(value ? "dark" : "light");
          }, 120);
        }}
      />

     <MoonIcon width={20} height={20}/>
    </div>
  );
}
