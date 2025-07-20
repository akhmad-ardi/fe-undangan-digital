import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2 className="text-4xl">
        <span className="font-bold">404</span> Halaman Tdak Ditemukan
      </h2>
      <Link href="/">Kembali ke Halaman Utama</Link>
    </div>
  );
}
