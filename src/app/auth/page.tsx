import React from "react";
import { redirect } from "next/navigation";

export default function page() {
  return redirect('/auth/login');
}