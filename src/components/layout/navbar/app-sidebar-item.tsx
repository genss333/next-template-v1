"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

interface AppSideBarModel {
  name: string;
  path: string;
}

export function SidebarItem({ name, path }: AppSideBarModel) {
  const pathname = usePathname();
  const params = useParams(); // ✅ อ่าน lang จาก URL param
  const lang = params?.lang as string; // เช่น "en" หรือ "th"

  const fullPath = `/${lang}${path.startsWith("/") ? path : `/${path}`}`;
  const isActive = pathname === fullPath;

  return (
    <div
      className={cn(
        "rounded-md px-4 py-0.5",
        isActive ? "bg-accent" : "hover:bg-accent"
      )}
    >
      <Link href={fullPath}>
        <p>{name}</p>
      </Link>
    </div>
  );
}
