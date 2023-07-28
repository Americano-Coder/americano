## Cara Penggunaan
Dibuat menggunakan framework Next.js dengan bantuan NextUI sebagai library.

First, run the development server:
```bash
npm  run  dev
# or
yarn  dev
# or
pnpm  dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More
Ada 2 folder yang dapat diedit, yaitu component dan pages. Component untuk menaruh style dan kode jsx (mirip html, bedanya ini untuk format React.js). Pages untuk routing path. Mirip dengan React Router hanya saja sudah diatur menggunakan Next.js sehingga tidak perlu mengatur apapun lagi, cukup baca dokumentasi.

## Component
Ada beberapa folder, JANGAN UBAH apapun pada folder hero, icons, navbar, dan styles agar tidak terjadi error (kecuali dikonfirmasikan dahulu ke grup).<br/>
Untuk folder content bisa diisikan content yang ingin ditampilkan pada situs (bisa lihat registerContent sebagai contoh). Untuk folder modal bisa diisikan element modal (bisa pakai loginModal sebaga contoh). JANGAN UBAH apapun pada file (registerContent dan loginModal), cukup tambahkan saja file baru jika ingin membuat element/content baru.

## Pages
File _app.js, _document.js, dan index.js serta folder service JANGAN DIUBAH, kecuali sudah dikonfirmasikan ke grup.<br/>
Folder test hanya sebagai pengujian, boleh bebas dimodifikasi/ditambahkan file. Folder template sebagai template untuk membuat halaman web baru, bisa copas ke tempat yang mau dibikin.<br/>
Ada 2 jenis template, pakai navbar dan tidak pakai navbar serta 1 contoh content:<br/>
Dengan Navbar -> usingNavbar.js<br/>
Tanpa Navbar -> notUsingNavbar.js<br/>
Contoh Membuat Content -> contentExample.js

## Catatan Penting
JANGAN BUAT CONTENT PADA FOLDER PAGES BUAT PADA PATH "COMPONENT/CONTENT". contentExample hanya sebagai contoh saja.<br/>
Untuk dokumentasi lebih lengkap bisa baca di [official website](https://nextui.org/docs/guide/getting-started).

## API Docs
[API Docs Link](https://docs.google.com/document/d/1j9sLLyEsD414xDJsiWwrq5M7apNIlCMYTskJrmG54Ik/edit?usp=sharing)