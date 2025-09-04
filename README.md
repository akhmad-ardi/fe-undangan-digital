# 🎉 Platform Undangan Digital Berbasis Web - Frontend (Next.js)

Frontend untuk platform **undangan digital berbasis web** menggunakan **Next.js**, **shadcn/ui**, dan **TailwindCSS**.
Menyediakan antarmuka pengguna untuk membuat, mengelola, dan membagikan undangan digital ke berbagai platform (misalnya WhatsApp).

---

## 🚀 Fitur Utama

- **Manajemen Undangan**
  - Buat, edit, hapus, dan lihat undangan
- **Share Undangan**
  - Generate link undangan
  - Bagikan langsung ke WhatsApp

---

## 🛠️ Teknologi

- [Next.js 13+ (App Router)](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vitest](https://vitest.dev/) untuk testing

---

## 📂 Struktur Proyek

FE-UNDANGAN-DIGITAL/ <br>
├── test/ # Unit & integration tests <br>
├── .next/ # Build output (ignore) <br>
├── .vscode/ # VSCode config <br>
├── node_modules/ # Dependencies <br>
├── public/ # Static files (images, icons, dsb.) <br>
├── src/ # Source code utama <br>
│ ├── components/ # Komponen UI (shadcn/ui + custom) <br>
│ ├── pages/ # Halaman Next.js <br>
│ ├── styles/ # File Tailwind & styling tambahan <br>
│ └── utils/ # Helper/utility functions <br>
├── .env # Variabel environment (jangan commit) <br>
├── .env.example # Contoh konfigurasi environment <br>
├── .gitignore <br>
├── package.json <br>
├── pnpm-lock.yaml <br>
├── tsconfig.json <br>
├── next.config.ts <br>
├── postcss.config.mjs <br>
├── eslint.config.mjs <br>
├── vitest.config.ts <br>
└── README.md <br>

## ⚙️ Instalasi & Menjalankan

1. **Clone repositori**

```bash
git clone https://github.com/akhmad-ardi/fe-undangan-digital.git
cd fe-undangan-digital
```

2. **Install dependencies**

```bash
pnpm install
```

3. **Set environment**

- Copy file `.env.example` ke `.env`
- Isi variabel sesuai kebutuhan:

```env
BACKEND=
```

4. **Jalankan aplikasi**

```bash
pnpm dev
```

## 📜 Lisensi

Proyek ini dilisensikan di bawah [MIT License](./LICENSE).
