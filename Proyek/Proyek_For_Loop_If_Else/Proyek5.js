console.log("////////////////////////////");
console.log("       --- Proyek 5 ---     ");
console.log("////////////////////////////");

// Proyek 5 (Level Expert): Rekap Pendapatan Kas Harian 💰
// 1. Modifikasi Mesin Kasir agar mengembalikan nilai return
function prosesTransaksi(namaPelanggan, keranjang) {
    let totalHarga = 0;
    let totalMinuman = 0;

    for (let item of keranjang) {
        totalHarga += (item.harga * item.jumlah);
        if (item.kategori === "minuman") {
            totalMinuman += item.jumlah;
        }
    }

    // Variabel untuk menyimpan tagihan akhir pelanggan ini
    let tagihanAkhir = 0;

    if (totalHarga > 100000) {
        let diskon = totalHarga * 0.10;
        tagihanAkhir = totalHarga - diskon;
    } else {
        tagihanAkhir = totalHarga;
    }

    console.log(`${namaPelanggan} selesai belanja. Total tagihan: Rp ${tagihanAkhir}`);
    
    // INI BAGIAN PALING PENTING
    // Mesin mengeluarkan angka tagihanAkhir agar bisa ditangkap oleh sistem
    return tagihanAkhir;
}

// --- Data Pelanggan ---
const keranjangAndi = [
    { nama: "Es Teh", harga: 10000, jumlah: 1, kategori: "minuman" }
];

const keranjangSira = [
    { nama: "Latte", harga: 40000, jumlah: 3, kategori: "minuman"}
];

// 2. Menangkap Nilai Return ke dalam Laci Kasir (Variabel)
let totalPendapatanHariIni = 0;

// Ketika fungsi dipanggil, posisinya akan digantikan oleh nilai yang di-return.
// Jadi nilai dari Andi (10000) akan ditambahkan lagi ke totalPendapatanHariIni
totalPendapatanHariIni += prosesTransaksi("Andi", keranjangAndi);

// Nilai dari Sira (108000) akan ditambahkan lagi ke totalPendapatanHariIni
totalPendapatanHariIni += prosesTransaksi("Sira", keranjangSira);


// 3. Laporan AKhir Hari
console.log("============================")
console.log(`Laporan Tutup Buku: Total uang di kasir adalah Rp ${totalPendapatanHariIni}`);
// Output Total uang di kasir adalah Rp 118000

console.log("////////////////////////////");