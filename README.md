# dasar2_web
🗻 Proyek Web Gunung Fuji
Proyek web sederhana yang menampilkan keindahan Gunung Fuji dengan sentuhan interaktif. Pengguna diwajibkan mengisi data diri terlebih dahulu sebelum bisa menikmati animasi pemandangan yang bergerak.

🚀 Fitur Utama
Animasi Background Bergerak: Gambar Gunung Fuji yang bergeser secara halus menggunakan requestAnimationFrame.

Validasi Form: Tombol animasi terkunci sampai kamu mengisi Nama dan Umur.

Update Tabel Dinamis: Data yang kamu masukkan akan langsung muncul di tabel tanpa perlu refresh halaman.

Desain Responsif: Tampilan tetap rapi dan penuh warna dengan CSS yang eye-catching.

📁 Struktur File
index.html: Struktur utama halaman, form, dan tabel.

style.css: Memberikan warna langit biru, styling form, dan bingkai untuk animasi.

javascript.js: Otak di balik logika validasi dan kontrol animasi.

🛠️ Cara Menjalankan
Pastikan kamu memiliki file gambar bernama gunung fuji copy.jpg di folder yang sama agar gambarnya muncul.

Buka file index.html di browser kesayanganmu.

Langkah Penting:

Isi kolom Nama dan Umur.

Klik tombol Submit.

Jika sudah muncul alert "Alhamdulillah...", silakan klik tombol Start Animasi.

Selamat menikmati pemandangan! 🌸

🎨 Detail Teknis
Animasi: Menggunakan sistem koordinat positionX yang berkurang secara berkala untuk menciptakan efek looping gambar.

Keamanan Sederhana: Status tombol dikunci menggunakan variabel sudahSubmit untuk memastikan urutan interaksi pengguna benar.
