// 1. Mencetak pesan ke console browser
console.log("Halo! JavaScript berhasil terhubung ke portofolio");

// 2. Membuat variabel dengan Const dan Let
const namaSaya = "Raihanaufal Fayadh"; // Ingat, nilai const tidak bisa ditimpa
// Gunakan const (konstan) untuk data yang tidak akan berubah (misal: tanggal lahir, elemen HTML tetap)

let peran = "Junior Frontend Deveoper";
let jumlahProyek = 2; // Tipe data Number ( Tanpa tanda kutip )
// Gunakan let untuk data yang nilainya bisa diperbarui nanti (misal: skor permainan, umur)

// 3. Menggabungkan teks dan variabel ( Dikenal sebagai Template Literals pakai Backtick ` ` )
console.log(`Perkenalkan, nama saya ${namaSaya}, Saya seorang ${peran}.`);
console.log(`Saat ini saya telah menyelesaikan ${jumlahProyek} proyek web. `);

// 4. Mengubah / memperbarui nilai variabel 'let'
peran = "Senior Frontend Developer";
jumlahProyek = 15;

console.log(`Target saya beberapa tahun kedepan adalah menjadi ${peran} dengan portofolio sebanyak ${jumlahProyek} proyek.`);

// Tantangan 1: Kalkulator Umur Dinamis
const tahunLahir = 1998;
const tahunSekarang = 2026;
let umur = tahunSekarang - tahunLahir;

console.log(`Saya lahir pada tahun ${tahunLahir}, sehingga umur saya sekarang adalah ${umur} tahun.`);

// Tantangan 2: Estimasi Sisa Target
const totalHari = 30;
const hariBerjalan = 8;
let sisaHari = totalHari - hariBerjalan;

let estimasiProyek = Math.floor(sisaHari / 7);

console.log(`Sudah ${hariBerjalan} hari berjalan dari program ${totalHari} hari menjadi Frontend Developer`);
console.log(`Berarti, sekarang tinggal tersisa ${sisaHari} hari lagi untuk target bisa tercapai`);
console.log(`Saya juga harus membuat proyek disetiap minggu nya, yang berarti masih ada ${estimasiProyek} proyek lagi yang harus dibuat`);