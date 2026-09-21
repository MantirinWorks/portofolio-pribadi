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