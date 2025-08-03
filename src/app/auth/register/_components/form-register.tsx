"use client";

import React from "react";
import { CheckIcon, CircleAlert } from "lucide-react";
import { toast } from "sonner";

// components
import { Alert } from "@/components/ui/alert";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Register } from "@/services/api";

export default function FormRegister() {
  const [loading, set_loading] = React.useState<boolean>(false);

  const [name, set_name] = React.useState<string>("");
  const [name_msg_err, set_name_msg_err] = React.useState<string>("");
  const [email, set_email] = React.useState<string>("");
  const [email_msg_err, set_email_msg_err] = React.useState<string>("");
  const [password, set_password] = React.useState<string>("");
  const [password_msg_err, set_password_msg_err] = React.useState<string>("");
  const [confirm_password, set_confirm_password] = React.useState<string>("");
  const [confirm_password_msg_err, set_confirm_password_msg_err] =
    React.useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    set_loading(true);
    e.preventDefault();

    const data = await Register({ name, email, password, confirm_password });

    set_name_msg_err(data.validation_errors?.name || "");
    set_email_msg_err(data.validation_errors?.email || "");
    set_password_msg_err(data.validation_errors?.password || "");
    set_confirm_password_msg_err(
      data.validation_errors?.confirm_password || "",
    );

    if (data.message) {
      toast(data.message, {
        position: "top-center",
        icon: <CheckIcon />,
        className: "bg-green-100",
      });
    }

    set_loading(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <Label className="ms-2 mb-2">Nama</Label>
        <Input
          type="text"
          id="name"
          value={name}
          onChange={(e) => set_name(e.target.value)}
          placeholder="Nama"
        />
        {name_msg_err && (
          <Alert variant="destructive" className="mt-1 bg-red-100 p-2">
            <CircleAlert />
            {name_msg_err}
          </Alert>
        )}
      </div>

      <div className="mb-4">
        <Label className="ms-2 mb-2">Email</Label>
        <Input
          type="emmil"
          id="email"
          value={email}
          onChange={(e) => set_email(e.target.value)}
          placeholder="Email"
        />
        {email_msg_err && (
          <Alert variant="destructive" className="mt-1 bg-red-100 p-2">
            <CircleAlert />
            {email_msg_err}
          </Alert>
        )}
      </div>

      <div className="mb-4">
        <Label className="ms-2 mb-2">Kata Sandi</Label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => set_password(e.target.value)}
          placeholder="Kata Sandi"
        />
        {password_msg_err && (
          <Alert variant="destructive" className="mt-1 bg-red-100 p-2">
            <CircleAlert />
            {password_msg_err}
          </Alert>
        )}
      </div>

      <div className="mb-4">
        <Label className="ms-2 mb-2">Konfirmasi Kata Sandi</Label>
        <Input
          type="password"
          id="confirmPassword"
          value={confirm_password}
          onChange={(e) => set_confirm_password(e.target.value)}
          placeholder="Konfirmasi Kata Sandi"
        />
        {confirm_password_msg_err && (
          <Alert variant="destructive" className="mt-1 bg-red-100 p-2">
            <CircleAlert />
            {confirm_password_msg_err}
          </Alert>
        )}
      </div>

      <Button type="submit" className="w-full" disabled={loading}>
        Daftar
      </Button>
    </form>
  );
}
