"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { CircleAlert } from "lucide-react";

// components
import { Alert } from "@/components/ui/alert";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Login } from "@/services/api";
import { useCreateInvitationStore } from "@/stores/useCreateInvitationStore";

export default function FormLogin() {
  const router = useRouter();

  const [loading, set_loading] = React.useState<boolean>(false);

  const STATE = useCreateInvitationStore((state) => state);

  const [email, set_email] = React.useState<string>("");
  const [email_msg_err, set_email_msg_err] = React.useState<string>("");
  const [password, set_password] = React.useState<string>("");
  const [password_msg_err, set_password_msg_err] = React.useState<string>("");

  React.useEffect(() => {
    STATE.resetStates();
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    set_loading(true);
    e.preventDefault();

    const data = await Login({ email, password });
    set_email_msg_err(data.validation_errors?.email || "");
    set_password_msg_err(data.validation_errors?.password || "");

    if (data.token) {
      Cookies.set("token", data.token);

      return router.push("/");
    }
    set_loading(false);
  }

  return (
    <form onSubmit={handleSubmit}>
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

      <Button type="submit" className="w-full" disabled={loading}>
        Login
      </Button>
    </form>
  );
}
