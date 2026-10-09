console.log("////////////////////////////");

// --- Proyek 3 (Level Mahir): Sistem Kasir Kedai Kopi ☕ ---
// Konsep yang dipelajari: Iterasi Array dengan for...of, Kondisional Bersarang (Nested if), dan Kalkulasi Total.

// Skenario: Kamu membuat sistem mesin kasir. Pelanggan membeli beberapa pesanan. Sistem harus menjumlahkan total harga. 
// Tetapi, ada promo: Jika total belanjaan lebih dari Rp 100.000, pelanggan dapat diskon 10%.

// 1. Data pesanan dalam bentuk Array of Object
const keranjangBelanja = [
    { nama: "Kopi Americano", harga: 25000, jumlah: 2 },
    { nama: "Croissant", harga: 30000, jumlah: 1 },
    { nama: "Caramel Macchiato", harga: 45000, jumlah: 1 },
];

let totalHarga = 0;

// 2. Looping untuk menghitung total setiap barang di keranjang
for (let item of keranjangBelanja) {
    let subTotal = item.harga * item.jumlah;
    totalHarga = totalHarga + subTotal;
    console.log(`Menghitung ${item.nama}: Rp ${subTotal}`);
}

console.log("----------------------------");
console.log(`Total Awal: Rp ${totalHarga}`);

// Kondisional untuk mengecek apakah dapat diskon
if (totalHarga > 100000) {
    let diskon = totalHarga * 0.10; // Diskon 10%
    let totalAkhir = totalHarga - diskon;
    
    console.log(`Selamat! Anda mendapatkan diskon: Rp ${diskon}`);
    console.log(`Total Bayar: Rp ${totalAkhir}`);
} else {
    console.log(`Total Bayar: Rp ${totalHarga}`);
    console.log("Beli sedikit lagi untuk dapat diskon 10%!");
}

// Inti pelajaran: Di dunia nyata (seperti Toko Online atau Aplikasi Kasir), data selalu berbentuk kumpulan (Array/Daftar). 
// Kita menggunakan Looping untuk membaca data satu per satu, menjumlahkannya, 
// lalu menggunakan Kondisional di akhir untuk menentukan aturan bisnis (seperti diskon atau gratis ongkir).

console.log("////////////////////////////");