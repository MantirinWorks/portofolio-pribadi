console.log("////////////////////////////");

// --- Proyek 2 (Level Menengah): Robot Pengecek Ganjil/Genap 🤖 ---
// Konsep yang dipelajari: for loop digabung dengan if/else

// Skenario: Kamu punya robot yang disuruh menghitung dari angka 1 sampai 10. Di setiap angka, 
// robot harus memberi tahu apakah angka tersebut ganjil atau genap.

// Cara Kerja For Loop:
// for (Mulai dari mana; Batas berhentinya; Tiap putaran nambah berapa)

// i dimulai dari 1; lopping jalan selama i <= 10; tiap putaran i ditambah 1 (i++)
for (let i = 1; i <= 10; i++) {
    
    // % adalah modulus (sisa hasil bagi). jika dibagi 2 sisanya 0, berarti genap.
    if (i % 2 === 0) {
        console.log("Angka " + i + " adalah GENAP");
    } else {
        console.log("Angka " + i + " adalah GANJIL");
    }
}

// Inti pelajaran: Di sini kita menggabungkan kekuatan. Looping (for) 
// membuat kita tidak perlu menulis kode 10 kali. 
// Kondisional (if/else) bertugas mengecek setiap angka yang sedang diproses pada putaran tersebut.

console.log("////////////////////////////");