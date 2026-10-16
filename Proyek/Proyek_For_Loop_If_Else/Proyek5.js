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
    { nama: "Latte", harga: 40000, jumlah: 3, kategori: "minuman" }
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
console.log("      --- Proyek 5.5 ---    ");
console.log("////////////////////////////");

// SISTEM PENGECEKAN STOK GUDANG
// Skenario Proyek: Penjaga Gudang Kedai Kopi 📦

// 1. Merancang Fungsi Pengecek Stok (Penerapan Logika)
// Data stok yang ada di gudang kedai kopi kita (Database Simulasi)
const stokGudang = [
    { nama: "Biji Kopi Arabica", jumlah: 50 },
    { nama: "Susu Segar", jumlah: 20 },
    { nama: "Gula Aren", jumlah: 15 },
    { nama: "Croissant", jumlah: 5 }
];

// Fungsi Pengecekan Stok dengan 3 Parameter
function cekKetersediaanStok(barangDicari, jumlahDiminta, dataStok) {

    // 1. kita gunakan Loop untuk mengecek setiap barang di rak gudang satu per satu
    for (let item of dataStok) {

        // 2. Kondisional Pertama: Apakah nama barang di rak ini cocok dengan yang dicari?
        if (item.nama === barangDicari) {

            // 3. Kondisional Bersarang (Nested If): Jika namanya cocok, kita cek ketersediaan jumlahnya
            if (item.jumlah >= jumlahDiminta) {
                return "Stok Aman"; // Menyerahkan hasil dan MENGHENTIKAN fungsi secara total
            } else {
                return "Stok Kurang"; // Menyerahkan hasil dan MENGHENTIKAN fungsi secara total
            }
        }
    }

    // 4. Jika looping selesai berputar sampai akhir dan tidak ada satupun yang cocok
    // (Artinya tidak ada return yang tereksekusi di dalam loop)
    return "Barang Tidak Ditemukan";
}

// 2. Menguji Mesin Pengecek Stok
// Skenario A: Pelanggan pesan 10 Susu Segar
let statusPesanan1 = cekKetersediaanStok("Susu Segar", 10, stokGudang);
console.log(`Pengecekan Susu Segar (Butuh 10): ${statusPesanan1}`);
// Output: "Stok Aman" (Karena ketersediaan 20 >= 10)

// Skenario B: Pelanggan memborong 10 Croissant untuk acara kantor
let statusPesanan2 = cekKetersediaanStok("Croissant", 10, stokGudang);
console.log(`Pengecekan Croissant (Butuh 10): ${statusPesanan2}`);
// Output: "Stok Kurang" (Karena ketersediaan di gudang hanya ada 5)

// Skenario C: Pelanggan memesan Teh Hijau yang tidak ada di menu
let statusPesanan3 = cekKetersediaanStok("Teh Hijau", 2, stokGudang);
console.log(`Pengecekan Teh Hijau (Butuh 2): ${statusPesanan3}`);
// Output: "Barang Tidak Ditemukan" (Karena Teh Hijau tidak pernah ditemukan selama loop berjalan)


//    --- NOTE ---     

// Konsep Level Pro: "Early Return" (Return Lebih Awal)
// Jika kamu mencermati kode di atas secara teliti, kita menempatkan return "Barang Tidak Ditemukan" tepat di luar loop, 
// di bagian paling bawah fungsi. Mengapa tidak meletakkan perintah else { return "Barang Tidak Ditemukan" } 
// di dalam loop saat namanya tidak cocok?

// Ini membawa kita pada teknik fundamental yang disebut Early Return atau Return-Early Pattern.

// Kekuatan super lain dari perintah return yang wajib kamu ingat adalah: Begitu komputer membaca dan mengeksekusi instruksi return, 
// fungsi tersebut akan langsung mati atau berhenti beroperasi seketika itu juga, meskipun sisa perulangan (looping) masih panjang.

//    --- NOTE ---     

console.log("////////////////////////////");