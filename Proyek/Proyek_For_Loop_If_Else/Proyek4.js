console.log("////////////////////////////");
console.log("       --- Proyek 4 ---     ");
console.log("////////////////////////////");

// --- Proyek 4 (Level Mahir): Sistem Kasir Kedai Kopi Expert ☕ ---
// 1. Kita membuat mesin nya (Mendefinisikan Fungsi)
// Kita beri nama fungsinya "prosesTransaksi"
// Mesin ini butuh 2 input (parameter): namaPelanggan dan keranjang
function prosesTransaksi(namaPelanggan, keranjang) {

    console.log(`\n=== Memproses Pesanan: ${namaPelanggan} ===`);

    let totalHarga = 0;
    let totalMinuman = 0;

    // kita gunakan parameter "keranjang" yang dimasukan
    for (let item of keranjang) {
        let subTotal = item.harga * item.jumlah;
        totalHarga += subTotal; // Ini cara singkat untuk totalHarga = totalHarga + subTotal

        if (item.kategori === "minuman") {
            totalMinuman += item.jumlah;
        }
        console.log(`- ${item.nama} (${item.jumlah}x): Rp ${subTotal}`);
    }

    console.log("----------------------------");

    // Cek Promo Roti
    if (totalMinuman >= 3) {
        console.log("🎁 PROMO SPESIAL: Anda mendapatkan 1 Roti Gratis");
    }

    // Cek Promo Diskon
    if (totalHarga > 100000) {
        let diskon = totalHarga * 0.10;
        let totalAkhir = totalHarga - diskon;

        console.log(`💸 Diskon 10%  : Rp ${diskon}`);
        console.log(`📜 TOTAL BAYAR : Rp ${totalAkhir}`);
    } else {
        console.log(`📜 TOTAL BAYAR : Rp ${totalHarga}`);
    }
    console.log("============================\n");
}

// Data Pelanggan 1: Budi (Beli Sedikit, tidak dapat promo)
const keranjangBudi = [
    { nama: "Es Teh", harga: 10000, jumlah: 1, kategori: "minuman" },
    { nama: "Roti Bakar", harga: 20000, jumlah: 1, kategori: "makanan" }
];

// Data Pelanggan 2: Siti (Beli banyak minuman, dapat roti gratis dan diskon)
const keranjangSiti = [
    { nama: "latte", harga: 40000, jumlah: 3, kategori: "minuman" },
];

// Data Pelanggan 3: Pak RT (Beli banyak makanan, dapat diskon tapi tidak dapat roti)
const keranjangPakRT = [
    { nama: "Kue Tart", harga: 150000, jumlah: 1, kategori: "makanan" },
    { nama: "Air Mineral", harga: 5000, jumlah: 1, kategori: "minuman" }
];

// 2. KITA GUNAKAN MESSINNYA (Memanggil Fungsi / Function Call)
prosesTransaksi("Budi", keranjangBudi);
prosesTransaksi("Siti", keranjangSiti);
prosesTransaksi("Pak RT", keranjangPakRT);

console.log("////////////////////////////");