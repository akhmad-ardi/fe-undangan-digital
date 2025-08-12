"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import {
  AlertCircle,
  AlertTriangle,
  ArrowLeft,
  CheckCircle,
} from "lucide-react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { AddDataInvitation, GenerateLink } from "@/services/api";

type Props = {
  id_invitation: string;
  initial_data: any;
};

export default function FormDataInvitation({
  id_invitation,
  initial_data,
}: Props) {
  const router = useRouter();

  const [form_data, set_form_data] = React.useState(initial_data);
  const [loading, set_loading] = React.useState(false);

  const token = Cookies.get("token") || "";

  function handleChange(path: string[], value: any) {
    set_form_data((prev: any) => {
      const newData = { ...prev };
      let current: any = newData;
      for (let i = 0; i < path.length - 1; i++) {
        current = current[path[i]];
      }
      current[path[path.length - 1]] = value;
      return newData;
    });
  }

  function renderFields(obj: any, path: string[] = []) {
    return Object.entries(obj).map(([key, value]) => {
      const currentPath = [...path, key];

      // Jika nested object → rekursif
      if (
        typeof value === "object" &&
        value !== null &&
        !Array.isArray(value)
      ) {
        return (
          <div
            key={currentPath.join(".")}
            className="mb-4 rounded-lg border p-3"
          >
            <h3 className="mb-5 font-semibold capitalize">{key}</h3>
            {renderFields(value, currentPath)}
          </div>
        );
      }

      // Pilih tipe input berdasarkan tipe value
      let inputType: "text" | "date" | "time" | "color" | "url" = "text";
      if (key.toLowerCase().includes("date")) inputType = "date";
      else if (key.toLowerCase().includes("time")) inputType = "time";
      else if (key.toLowerCase().includes("color")) inputType = "color";

      // Kalau string panjang atau key tertentu → textarea
      const isTextarea =
        typeof value === "string" &&
        (value.length > 50 ||
          key.toLowerCase().includes("message") ||
          key.toLowerCase().includes("description"));

      return (
        <div key={currentPath.join(".")} className="mb-3">
          <Label htmlFor={currentPath.join(".")} className="mb-2 capitalize">
            {key.replace(/_/g, " ")}
          </Label>

          {isTextarea ? (
            <Textarea
              id={currentPath.join(".")}
              value={value}
              onChange={(e) => handleChange(currentPath, e.target.value)}
              rows={5}
              placeholder={value}
            />
          ) : (
            <Input
              id={currentPath.join(".")}
              type={inputType}
              value={String(value)}
              onChange={(e) => handleChange(currentPath, e.target.value)}
              placeholder={String(value)}
            />
          )}
        </div>
      );
    });
  }

  async function handleSubmitDataInvitation(e: React.FormEvent) {
    e.preventDefault();
    set_loading(true);

    const data_invitation = form_data;

    const data = await AddDataInvitation(id_invitation, data_invitation, token);

    if (!data.message) {
      toast("Gagal menambahkan data undangan", {
        icon: <AlertCircle />,
        position: "top-center",
      });
    }

    toast(data.message, {
      icon: <CheckCircle />,
      position: "top-center",
    });

    set_loading(false);
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Data Undangan</CardTitle>
          <CardDescription>Silahkan isi data undangan</CardDescription>
        </CardHeader>

        <CardContent>
          <form
            onSubmit={handleSubmitDataInvitation}
            className="mx-auto max-w-xl"
          >
            {renderFields(form_data)}

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Loading..." : "Submit"}
            </Button>

            <Button
              type="button"
              className="mt-1 w-full"
              variant="destructive"
              disabled={loading}
              onClick={() => router.push("/create-invitation")}
            >
              {loading ? (
                "Loading..."
              ) : (
                <>
                  <ArrowLeft /> Pilih Template{" "}
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
}
