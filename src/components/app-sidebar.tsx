import React from "react";
import Link from "next/link";
import { Home, Inbox, Power } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { Button } from "./ui/button";

// Menu items.
const items = [
  {
    title: "Beranda",
    url: "/",
    icon: Home,
  },
  {
    title: "Buat Undangan",
    url: "#",
    icon: Inbox,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup className="h-full justify-between">
          <SidebarGroupLabel className="justify-center text-3xl mt-10">
            Evowish
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-3">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className="flex justify-center [&_svg:not([class*='size-'])]:size-6"
                    >
                      <item.icon />
                      <span className="text-lg">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          <SidebarGroupContent className="mb-5">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Button
                    variant="destructive"
                    className="cursor-pointer hover:!bg-destructive/90 hover:!text-white"
                  >
                    <Power />
                    Logout
                  </Button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
