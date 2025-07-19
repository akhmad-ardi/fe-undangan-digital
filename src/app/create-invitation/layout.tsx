import React from "react";

// components
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />

        <main className="px-5 lg:px-10 py-5 w-full">
          <SidebarTrigger className="[&_svg:not([class*='size-'])]:size-7" />

          {children}
        </main>
      </SidebarProvider>
    </>
  );
}
