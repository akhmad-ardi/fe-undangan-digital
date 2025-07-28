import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function base64ToFile(base64: string): File {
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
