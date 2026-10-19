console.log("////////////////////////////");
console.log("       --- Proyek 5-1 ---     ");
console.log("////////////////////////////");

// 1. Data Gudang (Database Stok)
let stokToko = [
    { nama: "Laptop", harga: 7000000, stok: 5 },
    { nama: "Mouse", harga: 150000, stok: 10 },
    { nama: "Keyboard", harga: 300000, stok: 2 } // Perhatikan stok keyboard hanya 2
];

//  2. Data Keranjang Pelanggan
let pesananRudi = [
    { nama: "Laptop", jumlah: 1 },
    { nama: "Keyboard", jumlah: 3 }, // Rudi minta 3, tapi stok cuma 2
    { nama: "Mouse", jumlah: 2 }
];

// 3.  Mesin Kasir (TUGASMU MENGISI FUNGSI INI)
function prosesPesanan(namaPelanggan, keranjang, gudang) {
    console.log(`\n=== Memproses Pesanan: ${namaPelanggan} ===`);
    let totalBelanja = 0;

    // --- TULIS LOGIKA LOOPING DAN KONDISIONAL DI SINI ---
    // Petunjuk:.
    // 1. Gunakan 'for...of' untuk membaca 'keranjang'
    // 2. Di dalam loop keranjang, kamu perlu mencari barang tersebut di 'Gudang'
    // (Bisa pakai loop lagi untuk mengecek gudang, atau pakai logika perbandingan)
    // 3. Jangan lupa kurangi stok gudang (misal: itemGudang.stok -= itemKeranjang.jumlah)

    for (let item of keranjang) {
        let itemGudang = gudang.find((barang) => barang.nama === item.nama);

        if (!itemGudang) {
            console.log(`Barang ${item.nama} tidak ditemukan di gudang.`);
        } else if (itemGudang.stok < item.jumlah) {
            console.log(`Stok ${item.nama} tidak cukup. Stok tersedia: ${itemGudang.stok}.`);
        } else {
            totalBelanja += itemGudang.harga * item.jumlah;
            itemGudang.stok -= item.jumlah;

            console.log(`\n Berhasil memproses ${ item.nama }(${ item.jumlah }x)`);
        }
    }

    // ----------------------------------------------------

    // --- TULIS LOGIKA DISKON DI SINI ---
    let tagihanAkhir = 0;

    if (totalBelanja > 5000000) {
        let diskon = totalBelanja * 0.10;
        tagihanAkhir = totalBelanja - diskon;
    } else {
        tagihanAkhir = totalBelanja;
    }

    console.log(`${ namaPelanggan } selesai belanja.Total tagihan: Rp ${ tagihanAkhir }`);

    // ----------------------------------------------------

    // Kembalikan nilai akhir tagihan
    return tagihanAkhir;
}

// 4. Uji Coba Program
let tagihanAkhirRudi = prosesPesanan("Rudi", pesananRudi, stokToko);

console.log("----------------------------------------------------");
console.log(`📜 TOTAL TAGIHAN RUDI: Rp ${ tagihanAkhirRudi }`);
console.log("\n📦 UPDATE STOK GUDANG TERKINI:");
console.log(stokToko);