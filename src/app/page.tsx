import React from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { MailOpen, EllipsisVertical, PenBoxIcon } from "lucide-react";

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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import DialogShareSocialMedia from "./_components/dialog-share-social-media";
import DialogGenerateLink from "./_components/dialog-generate-link";
import CopyLink from "./_components/copy-link";
import CreateInvitationButton from "./_components/create-invitation-button";
import DialogDeleteInvitation from "./_components/dialog-delete-invitation";

import { Auth } from "@/services/auth";
import { GetInvitations } from "@/services/api";

import { parseDate } from "@/lib/utils";

export default async function Home() {
  const auth = await Auth();
  if (!auth.is_auth) {
    return redirect("/auth/login");
  }

  const { invitations } = await GetInvitations(auth.token);

  // console.log(invitations[0].data_invitation.event.venue.address);

  return (
    <>
      <SidebarProvider>
        <AppSidebar />

        <main className="w-full px-5 py-5 lg:px-10">
          <SidebarTrigger className="[&_svg:not([class*='size-'])]:size-7" />

          <h1 className="mt-16 mb-7 text-center text-3xl">Daftar Undangan</h1>

          <div className="mb-3">
            <CreateInvitationButton />
          </div>

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
                {Array.isArray(invitations) &&
                  invitations.map((invitation, index) => (
                    <TableRow key={index}>
                      <TableCell>{invitation.name}</TableCell>
                      <TableCell>
                        {invitation.data_invitation.event.location
                          ? invitation.data_invitation.event.location.address
                          : invitation.data_invitation.event.venue.address}
                      </TableCell>
                      <TableCell>
                        {parseDate(invitation.data_invitation.event.date)}
                      </TableCell>
                      <TableCell>
                        {invitation.data_invitation.event.time}
                      </TableCell>
                      <TableCell
                        className={`text-center ${
                          invitation.InvitationLink.is_active
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {invitation.InvitationLink.is_active
                          ? "Aktif"
                          : "Tidak Aktif"}
                      </TableCell>
                      <TableCell className="text-center">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button>
                              <EllipsisVertical />
                            </Button>
                          </DropdownMenuTrigger>

                          <DropdownMenuContent>
                            {/* Lihat Undangan */}
                            <DropdownMenuItem
                              asChild
                              disabled={!invitation.InvitationLink.link}
                            >
                              <Link
                                href={invitation.InvitationLink.link}
                                target="_blank"
                              >
                                <MailOpen />
                                Lihat Undangan
                              </Link>
                            </DropdownMenuItem>

                            <DropdownMenuItem asChild>
                              <Link
                                href={`/create-invitation/data-invitation/${invitation.id_invitation}`}
                              >
                                <PenBoxIcon />
                                Data Undangan
                              </Link>
                            </DropdownMenuItem>

                            {/* Generate Link */}
                            {invitation.InvitationLink.link ? (
                              <CopyLink link={invitation.InvitationLink.link} />
                            ) : (
                              <DropdownMenuItem asChild>
                                <DialogGenerateLink
                                  id_invitation={invitation.id_invitation}
                                />
                              </DropdownMenuItem>
                            )}

                            {/* Share Social Media */}
                            <DropdownMenuItem
                              disabled={!invitation.InvitationLink.link}
                              asChild
                            >
                              <DialogShareSocialMedia
                                id_invitation={invitation.id_invitation}
                              />
                            </DropdownMenuItem>

                            {/* Delete Undangan */}
                            <DropdownMenuItem asChild>
                              <DialogDeleteInvitation
                                id_invitation={invitation.id_invitation}
                                title={invitation.title}
                              />
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
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
