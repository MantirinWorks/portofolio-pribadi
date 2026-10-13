console.log("////////////////////////////");

// --- Proyek 3 (Level Mahir): Sistem Kasir Kedai Kopi ☕ ---
// Konsep yang dipelajari: Iterasi Array dengan for...of, Kondisional Bersarang (Nested if), dan Kalkulasi Total.

// Skenario: Kamu membuat sistem mesin kasir. Pelanggan membeli beberapa pesanan. Sistem harus menjumlahkan total harga. 
// Tetapi, ada promo: Jika total belanjaan lebih dari Rp 100.000, pelanggan dapat diskon 10%.

// 1. Data pesanan dalam bentuk Array of Object + punya "kategori"
const keranjangBelanja = [
    { nama: "Kopi Americano", harga: 25000, jumlah: 2, kategori: "minuman" },
    { nama: "Croissant", harga: 30000, jumlah: 1, kategori: "makanan" },
    { nama: "Caramel Macchiato", harga: 45000, jumlah: 1, kategori: "minuman" },
];

let totalHarga = 0;
let totalMinuman = 0; // Variabel baru untuk menghitung jumlah minuman

// 2. Looping untuk menghitung total setiap barang di keranjang
for (let item of keranjangBelanja) {
    let subTotal = item.harga * item.jumlah;
    totalHarga = totalHarga + subTotal;
    
    // Kondisional baru: Cek apakah item ini minuman?
    if (item.kategori === "minuman") {
        totalMinuman = totalMinuman + item.jumlah; // Tambahkan ke hitungan minuman
    }

    console.log(`Menghitung ${item.nama} (${item.jumlah}x): Rp ${subTotal}`);
}

console.log("----------------------------");
console.log(`Total Awal: Rp ${totalHarga}`);

// 3. Kondisional Proma 1: Cek promo Roti Gratis
// Karena di keranjang ada 2 Americano + 1 Macchiato = 3 minuman
if (totalMinuman >= 3) {
    console.log("🎁 PROMO SPESIAL: Anda mendapatkan 1 Roti Gratis");
}

// 4. Kondisional Promo 2: Cek promo diskon 10% (tetap berjalan)
if (totalHarga > 100000) {
    let diskon = totalHarga * 0.10; // Diskon 10%
    let totalAkhir = totalHarga - diskon;
    
    console.log(`💸 Selamat! Anda dapat diskon: Rp ${diskon}`);
    console.log(`Total Bayar: Rp ${totalAkhir}`);
} else {
    console.log(`Total Bayar: Rp ${totalHarga}`);
}

// Inti pelajaran: Di dunia nyata (seperti Toko Online atau Aplikasi Kasir), data selalu berbentuk kumpulan (Array/Daftar). 
// Kita menggunakan Looping untuk membaca data satu per satu, menjumlahkannya, 
// lalu menggunakan Kondisional di akhir untuk menentukan aturan bisnis (seperti diskon atau gratis ongkir).

console.log("////////////////////////////");