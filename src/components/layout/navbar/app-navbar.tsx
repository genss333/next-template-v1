"use client";

import { switchLang } from "@/components/lang/lang-context";
import Flex from "@/components/layout/flex";
import { dark, light, system } from "@/components/themes/theme-switcher";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Languages, Laptop, Sun, SunMoon } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface NavItemProps {
  name: string;
  path: string;
}

function NavItem({ name, path }: NavItemProps) {
  return (
    <Link href={path} target="_blank">
      <div className="text-md font-medium">{name}</div>
    </Link>
  );
}

const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className="size-5"
    >
      <rect width="256" height="256" fill="none" />
      <line
        x1="208"
        y1="128"
        x2="128"
        y2="208"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <line
        x1="192"
        y1="40"
        x2="40"
        y2="192"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
    </svg>
  );
};

const NavChangeLangs = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Languages size={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => switchLang("th", pathname, router)}>
          Thai
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLang("en", pathname, router)}>
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const ButtonThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark" | "system">(
    "system"
  );

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "light" || theme === "dark") setCurrentTheme(theme);
    else setCurrentTheme("system");
  }, []);

  const handleClick = () => {
    if (currentTheme === "light") {
      dark();
      setCurrentTheme("dark");
    } else if (currentTheme === "dark") {
      system();
      setCurrentTheme("system");
    } else {
      light();
      setCurrentTheme("light");
    }
  };

  return (
    <div onClick={handleClick} className="border rounded-md p-2">
      {currentTheme === "light" ? (
        <Sun />
      ) : currentTheme === "dark" ? (
        <SunMoon />
      ) : (
        <Laptop />
      )}
    </div>
  );
};

const AppNavbar = () => {
  return (
    <Flex
      direction={"row"}
      align={"center"}
      justify={"between"}
      className="px-6 pt-4 pb-10 pr-16"
    >
      <Flex direction={"row"} align={"center"} gap={4}>
        <Logo />
        <NavItem name="Docs" path="https://ui.shadcn.com/docs/installation" />
        <NavItem
          name="Components"
          path="https://ui.shadcn.com/docs/components"
        />
      </Flex>
      <Flex direction={"row"} align={"center"} gap={4}>
        <NavChangeLangs />
        <ButtonThemeSwitcher />
      </Flex>
    </Flex>
  );
};

export default AppNavbar;
