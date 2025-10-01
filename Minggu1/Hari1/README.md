Nomer 2

# Perbedaan JSX dengan HTML

**JSX (JavaScript XML)** adalah ekstensi sintaks JavaScript yang digunakan di React untuk menuliskan struktur UI dengan cara mirip HTML, tetapi sebenarnya JSX akan dikompilasi menjadi JavaScript.  
**HTML** adalah bahasa markup standar untuk membuat halaman web dan dijalankan langsung oleh browser tanpa kompilasi.

### Perbedaan Utama:
1. **JSX** harus ditulis di dalam file JavaScript, sedangkan **HTML** berdiri sendiri.
2. **JSX** menggunakan `className` untuk atribut CSS, sedangkan **HTML** menggunakan `class`.
3. **JSX** dapat menyisipkan ekspresi JavaScript dengan `{}`, sedangkan **HTML** tidak bisa.

Contoh Kode:

HTML:
```html
<div class="container">
  <h1>Hello World</h1>
</div>

JSX:

```jsx
<div className="container">
  <h1>Hello World</h1>
</div>
const element = (
  <div className="container">
    <h1>{2 + 3}</h1>
  </div>
);


Nomer 3

Konsep Virtual DOM

Virtual DOM adalah representasi ringan dari DOM asli yang dibuat oleh React.
Ketika ada perubahan state, React akan membuat versi baru Virtual DOM, lalu membandingkannya dengan versi sebelumnya menggunakan algoritma diffing. Setelah itu, hanya bagian yang berubah yang akan diperbarui ke DOM asli, bukan seluruh halaman.

Keuntungan Virtual DOM:

-Lebih cepat karena tidak melakukan render ulang seluruh halaman.
-Membuat UI lebih responsif dan efisien.

Nomer 4

Perbedaan SPA vs MPA
Single Page Application (SPA)

Aplikasi yang hanya memuat satu halaman HTML utama. Navigasi antar-halaman dilakukan secara dinamis menggunakan JavaScript tanpa reload penuh.

Kelebihan SPA:

1.Navigasi lebih cepat (tidak reload penuh).
2.Pengalaman pengguna lebih baik, mirip aplikasi mobile.

Kekurangan SPA:

1.SEO lebih sulit karena konten di-render dengan JavaScript.
2.Ukuran file awal bisa besar (loading pertama lebih lama).

Multi Page Application (MPA)

Aplikasi yang memiliki banyak halaman HTML. Setiap kali pengguna berpindah halaman, browser akan memuat ulang halaman dari server.

Kelebihan MPA:

1.SEO lebih mudah karena setiap halaman memiliki URL dan konten terpisah.
2.Cocok untuk aplikasi besar dengan banyak fitur.

Kekurangan MPA:

1.Navigasi lebih lambat karena butuh reload penuh.
2.Perlu pengaturan server-side yang lebih kompleks.
