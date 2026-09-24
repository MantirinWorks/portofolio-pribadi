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
let umur = tahunSekarang-tahunLahir;

console.log(`Saya lahir pada tahun ${tahunLahir}, sehingga umur saya sekarang adalah ${umur} tahun.`);

// Tantangan 2: Estimasi Sisa Target
const totalHari = 30;
const hariBerjalan = 8;
let sisaHari = totalHari-hariBerjalan;

let estimasiProyek = Math.floor(sisaHari / 7);

console.log(`Sudah ${hariBerjalan} hari berjalan dari program ${totalHari} hari menjadi Frontend Developer`);
console.log(`Berarti, sekarang tinggal tersisa ${sisaHari} hari lagi untuk target bisa tercapai`);
console.log(`Saya juga harus membuat proyek disetiap minggu nya, yang berarti masih ada ${estimasiProyek} proyek lagi yang harus dibuat`);

// Tantangan 3: Memperbaiki Bug (Error)
const targetKarir = "Junior Developer";
console.log(`Saat ini saya adalah seorang ${targetKarir}`);

const targetKarirSekarang = "Senior Web Developer";
console.log(`Lima tahun lagi, target saya adalah menjadi ${targetKarirSekarang}`);

// ===================================================================================================
// Solusi Alternatif:
// let targetKarir = "Junior Developer"; // Ubah menjadi let
// console.log(`Saat ini saya adalah seorang ${targetKarir}`);

// targetKarir = "Senior Web Developer"; // Sekarang variabel yang sama bisa ditimpa nilainya
// console.log(`Lima tahun lagi, target saya adalah menjadi ${targetKarir}`);

// Kedua cara (cara Anda dan cara alternatif) sama-sama benar, 
// tergantung apakah Anda memang membutuhkan variabel yang terpisah atau 
// ingin memperbarui kotak variabel yang sama.
// ===================================================================================================

// --- MATERI HARI 9: IF / ELSE ---

const jamSaatIni = 14; // Anggap sekarang jam 14:00 ( jam 2 siang )
let ucapan = "";

if (jamSaatIni >= 5 && jamSaatIni < 12) {
    // Kondisi 1: jika jam lebih/sama dengan 5 DAN kurang dari 12
    ucapan = "Selamat Pagi!";
} else if (jamSaatIni >= 12 && jamSaatIni < 15) {
    // Kondisi 2: Jika jam 12 hingga sebelum 15
    ucapan = "Selamat Siang!";
} else if (jamSaatIni >= 15 && jamSaatIni < 18) {
    // Kondisi 3: Jika jam 15 hingga sebelum 18
    ucapan = "Selamat Sore!";
} else {
    // Kondisi Terakhir: Jika semua kondisi di atas tidak terpenuhi
    ucapan = "Selamat Malam!";
}

console.log(`${ucapan} Selamat datang kembali di portofolio Raihanaufal.`);


// --- MATERI HARI 9: FOR LOOP ---

const totalProyek = 4; // Target proyek kita di kurikulum ini

console.log("Mulai mengecek status proyek...");

// Sintaks for (Mulai dari 1; Berhenti jika lebih dari totalProyek; Tambah 1 setiap putaran)
for (let i = 1; i <= totalProyek; i++) {
     
    // Kita bisa memasukan IF di dalam FOR
    if (i === 1) {
        console.log(`proyek ke-${i}: Website Portofolio (SELESAI) ✅`);
    } else {
        console.log(`proyek ke-${i}: Sedang dalam tahap perencanaan ⏳`);
    }
}

console.log("Pengecekan status selesai.");