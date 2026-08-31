Ringkasan perubahan dan langkah selanjutnya

Saya menambahkan beberapa file helper pada branch tidy-html-20260831 untuk memulai proses perapihan:

- assets/js/init-charts.js  — memindahkan inisialisasi global Chart.js (Chart.defaults) ke file JS terpisah.
- assets/js/skiplink.js    — menambahkan skip-link secara dinamis untuk aksesibilitas.

Langkah yang saya rekomendasikan selanjutnya (bisa saya lanjutkan jika Anda setuju):

1) Memperbarui file jurnal_tahfidz19_v37.html agar:
   - Menghapus blok inisialisasi Chart.js yang sekarang ada inline dan menambahkan <script defer src="/assets/js/init-charts.js"></script> setelah Chart.js.
   - Menambahkan <script defer src="/assets/js/skiplink.js"></script> di head atau sebelum akhir body.
   - Mengekstrak blok <style> besar ke assets/css/design-system.css dan mengganti dengan <link rel="stylesheet" href="/assets/css/design-system.css"> untuk memperkecil HTML.
2) Setelah perubahan HTML selesai, buat PR dari tidy-html-20260831 → main untuk review.

Jika Anda ingin, saya bisa lanjut dan mengubah jurnal_tahfidz19_v37.html secara langsung di branch ini (non-destructive: saya akan menyimpan versi asli dan hanya menyisipkan/menautkan file baru), lalu membuat PR. Balas "lanjut ubah HTML" dan saya akan melakukan commit berikutnya.
