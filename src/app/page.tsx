import React from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import {
  MailOpen,
  CirclePlus,
  EllipsisVertical,
  Share2,
  Copy,
  Plus,
} from "lucide-react";

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
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogDescription,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import FormShareSocialMedia from "./_components/form-share-social-media";
import FormGenerateLink from "./_components/form-generate-link";
import CopyLink from "./_components/copy-link";
import CreateInvitationButton from "./_components/create-invitation-button";

import { Auth } from "@/services/auth";
import { GetInvitations } from "@/services/api";

export default async function Home() {
  const auth = await Auth();
  if (!auth.is_auth) {
    return redirect("/auth/login");
  }

  const { invitations } = await GetInvitations(auth.token);

  // console.log(invitations);

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
                      <TableCell>{invitation.title}</TableCell>
                      <TableCell>{invitation.location}</TableCell>
                      <TableCell>
                        {new Date(invitation.date).toISOString().split("T")[0]}
                      </TableCell>
                      <TableCell>
                        {new Date(invitation.time)
                          .toISOString()
                          .split("T")[1]
                          .slice(0, 8)}
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

                            {/* Generate Link */}
                            {invitation.InvitationLink.link ? (
                              <CopyLink link={invitation.InvitationLink.link} />
                            ) : (
                              <DropdownMenuItem asChild>
                                <Dialog>
                                  <DialogTrigger className="focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
                                    <CirclePlus />
                                    Generate Link
                                  </DialogTrigger>

                                  <DialogContent>
                                    <DialogHeader>
                                      <DialogTitle>Generate Link</DialogTitle>
                                      <DialogDescription>
                                        Anda akan men-generate link!
                                      </DialogDescription>
                                      <FormGenerateLink
                                        id_invitation={invitation.id_invitation}
                                      />
                                    </DialogHeader>
                                  </DialogContent>
                                </Dialog>
                              </DropdownMenuItem>
                            )}

                            {/* Share Social Media */}
                            <DropdownMenuItem
                              disabled={!invitation.InvitationLink.link}
                              asChild
                            >
                              <Dialog>
                                <DialogTrigger className="focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
                                  <Share2 />
                                  Bagikan ke Sosial Media
                                </DialogTrigger>

                                <DialogContent>
                                  <DialogHeader>
                                    <DialogTitle>
                                      Bagikan ke Sosial Media
                                    </DialogTitle>
                                    <DialogDescription>
                                      Pilih platform yang anda ingin bagikan!
                                    </DialogDescription>
                                    <FormShareSocialMedia />
                                  </DialogHeader>
                                  <DialogFooter>
                                    <DialogClose asChild>
                                      <Button variant="destructive">
                                        Tutup
                                      </Button>
                                    </DialogClose>
                                  </DialogFooter>
                                </DialogContent>
                              </Dialog>
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
