console.log("////////////////////////////");

// --- Proyek 1 (Level Pemula): Penjaga Pintu Bioskop 🎬 ---
// Konsep yang dipelajari: if, else if, else (Kondisional Dasar)

// Skenario: Kamu membuat sistem otomatis untuk mengecek apakah seseorang boleh menonton film horor/dewasa berdasarkan umurnya.

// Aturan Main:

// Jika umur kurang dari 13 tahun: "Hanya boleh nonton film kartun."

// Jika umur antara 13 sampai 17 tahun: "Boleh nonton film remaja."

// Jika umur 18 tahun ke atas: "Boleh nonton film dewasa."

let umur = 17; // Coba ganti angka ini menjadi 10 atau 20
if (umur < 13) {
    console.log("Hanya boleh nonton film kartun 🎈");
} else if (umur >= 13 && umur < 18) {
    // Simbol && artinya "DAN" (dua kondisi harus terpenuhi)
    console.log("Boleh nonton film remaja 🍿");
} else {
    console.log("Boleh nonton film dewasa 🎬");
}
// Karena umur = 16, hasilnya: "Boleh nonton film remaja 🍿"

// Inti pelajaran: Program mengecek kondisi dari atas ke bawah.Begitu satu kondisi cocok(true), 
// ia akan menjalankan perintah di dalamnya dan mengabaikan yang lain.

console.log("////////////////////////////");