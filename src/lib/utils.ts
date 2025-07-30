import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function base64ToFile(base64: string): File | string {
  const isBase64 =
    base64.startsWith("data:image/") && base64.includes(";base64,");

  if (!isBase64) {
    // Jika bukan base64 valid, kembalikan string input asli
    return base64;
  }

  const arr = base64.split(",");
  const mimeMatch = arr[0].match(/:(.*?);/);
  const mime = mimeMatch ? mimeMatch[1] : "";

  // Validasi format gambar
  if (!["image/jpeg", "image/png"].includes(mime)) {
    throw new Error("Format gambar tidak didukung. Gunakan JPG atau PNG.");
  }

  // Tentukan ekstensi dari MIME type
  const extension = mime === "image/jpeg" ? "jpg" : "png";

  // Generate nama file default
  const filename = `background.${extension}`;

  // Konversi base64 ke binary
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
}

export interface InvitationLink {
  id_invitation_link: string;
  id_invitation: string;
  link: string;
  is_active: boolean;
  created_at: string;
  SharedSocial: any; // Ganti dengan tipe sebenarnya jika tidak null
  GuestView: any; // Ganti dengan tipe sebenarnya jika tidak null
}

export interface GetInvitationInterface {
  id_invitation: string;
  id_user: string;
  id_template: string;
  title: string;
  date: string; // Format ISO, misalnya: '2025-07-31T00:00:00Z'
  time: string; // Format ISO, misalnya: '0000-01-01T00:30:00Z'
  location: string;
  description: string;
  primary_color: string;
  secondary_color: string;
  background_image: string; // Bisa nama file atau base64
  created_at: string;
  updated_at: string;
  InvitationLink: InvitationLink | null;
}

export const BACKEND_URL = process.env.BACKEND || "http://localhost:3001";
