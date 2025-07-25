import React from "react";
import Link from "next/link";
import { MailOpen } from "lucide-react";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default function Home() {
  const invitations = [
    {
      title_event: "Test 0",
      date: "Senin, 29-01-2024",
      location: "Makassar",
      time: "03:10 AM",
      status: true,
    },
    {
      title_event: "Test 1",
      date: "Rabu, 29-02-2024",
      location: "Makassar",
      time: "05:10 AM",
      status: false,
    },
    {
      title_event: "Test 2",
      date: "Sabtu, 30-05-2024",
      location: "Makassar",
      time: "12:00 AM",
      status: true,
    },
  ];

  return (
    <>
      <SidebarProvider>
        <AppSidebar />

        <main className="w-full px-5 py-5 lg:px-10">
          <SidebarTrigger className="[&_svg:not([class*='size-'])]:size-7" />

          <h1 className="mt-16 mb-10 text-center text-3xl">Daftar Undangan</h1>

          <div className="w-full overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Judul Acara</TableHead>
                  <TableHead className="w-[180px]">Lokasi</TableHead>
                  <TableHead className="w-[100px]">Tanggal</TableHead>
                  <TableHead className="w-[100px]">Waktu</TableHead>
                  <TableHead className="w-[150px] text-center">
                    Status
                  </TableHead>
                  <TableHead className="w-[100px] text-center">#</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invitations.map((invitaion, index) => (
                  <TableRow key={index}>
                    <TableCell>{invitaion.title_event}</TableCell>
                    <TableCell>{invitaion.location}</TableCell>
                    <TableCell>{invitaion.date}</TableCell>
                    <TableCell>{invitaion.time}</TableCell>
                    <TableCell
                      className={`text-center ${
                        invitaion.status ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {invitaion.status ? "Aktif" : "Tidak Aktif"}
                    </TableCell>
                    <TableCell>
                      <Button asChild>
                        <Link href="/">
                          <MailOpen />
                          Lihat
                        </Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </main>
      </SidebarProvider>
    </>
  );
}
