import Flex from "@/components/layout/flex";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ReactNode } from "react";
import { SidebarItem } from "./app-sidebar-item";

interface SidebarLink {
  name: string;
  path: string;
  section?: string; // optional grouping
}

interface AppSidebarProps {
  children: ReactNode;
  items: SidebarLink[];
  defaultSectionTitle?: string;
}

const AppSidebar = ({
  children,
  items,
  defaultSectionTitle = "Navigation",
}: AppSidebarProps) => {
  // Group items by section
  const grouped = items.reduce<Record<string, SidebarLink[]>>((acc, item) => {
    const section = item.section ?? defaultSectionTitle;
    acc[section] = acc[section] || [];
    acc[section].push(item);
    return acc;
  }, {});

  return (
    <Flex direction={{ sm: "col", md: "row" }}>
      {/* Sidebar */}
      <ScrollArea style={{ height: "calc(100vh - 110px)" }}>
        <nav className="hidden md:block px-4 py-2 w-64 border-r border-gray-200">
          <Flex direction="col" gap={6}>
            {Object.entries(grouped).map(([section, links]) => (
              <div key={section}>
                <div className="text-xs font-semibold text-gray-500 px-2 my-2">
                  {section}
                </div>
                <Flex direction="col" gap={1.5}>
                  {links.map((link) => (
                    <SidebarItem
                      key={link.path}
                      name={link.name}
                      path={link.path}
                    />
                  ))}
                </Flex>
              </div>
            ))}
          </Flex>
        </nav>
      </ScrollArea>

      {/* Main content */}
      <main className="flex-1 p-4">
        <Flex justify="center">{children}</Flex>
      </main>
    </Flex>
  );
};

export default AppSidebar;
