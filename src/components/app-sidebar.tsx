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
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
  DialogClose,
} from "./ui/dialog";
import { Button } from "./ui/button";
import FormLogout from "./form-logout";

// Menu items.
const items = [
  {
    title: "Beranda",
    url: "/",
    icon: Home,
  },
  {
    title: "Buat Undangan",
    url: "/create-invitation",
    icon: Inbox,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup className="h-full justify-between">
          <SidebarGroupLabel className="mt-10 justify-center text-center text-3xl">
            Undangan Digital
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
                <Dialog>
                  <DialogTrigger asChild>
                    <SidebarMenuButton asChild>
                      <Button
                        variant="destructive"
                        className="hover:!bg-destructive/90 cursor-pointer hover:!text-white"
                      >
                        <Power />
                        Logout
                      </Button>
                    </SidebarMenuButton>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Logout</DialogTitle>
                    </DialogHeader>
                    <DialogDescription>
                      Apakah kamu ingin logout?
                    </DialogDescription>
                    <DialogFooter>
                      <FormLogout />
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
