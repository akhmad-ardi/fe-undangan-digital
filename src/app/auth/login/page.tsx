import React from "react";

import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <Card className="mx-auto w-[90%] md:w-[50%] lg:w-[35%] p-10 shadow">
      <h1 className="text-3xl text-center">Login</h1>

      <form action="">

        <div className="mb-4">
          <Label className="ms-2 mb-2">Email</Label>
          <Input type="emmil" id="email" placeholder="Email" />
        </div>

        <div className="mb-4">
          <Label className="ms-2 mb-2">Kata Sandi</Label>
          <Input type="password" id="password" placeholder="Kata Sandi" />
        </div>

        <Button type="submit" className="w-full">Submit</Button>
      </form>
    </Card>
  )
}