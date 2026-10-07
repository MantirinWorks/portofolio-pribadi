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

// Tantangan 4.1: Kalkulator Umur Dinamis
const tahunLahir = 1998;
const tahunSekarang = 2026;
let umur = tahunSekarang - tahunLahir;

console.log(`Saya lahir pada tahun ${tahunLahir}, sehingga umur saya sekarang adalah ${umur} tahun.`);

// Tantangan 4.2: Estimasi Sisa Target
const totalHari = 30;
const hariBerjalan = 8;
let sisaHari = totalHari - hariBerjalan;

let estimasiProyek = Math.floor(sisaHari / 7);

console.log(`Sudah ${hariBerjalan} hari berjalan dari program ${totalHari} hari menjadi Frontend Developer`);
console.log(`Berarti, sekarang tinggal tersisa ${sisaHari} hari lagi untuk target bisa tercapai`);
console.log(`Saya juga harus membuat proyek disetiap minggu nya, yang berarti masih ada ${estimasiProyek} proyek lagi yang harus dibuat`);

// Tantangan 4.3: Memperbaiki Bug (Error)
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


// --- TANTANGAN MATERI HARI 9 ---

// Tantangan 9.1: Evaluator Jam Belajar (If / Else)
let jamBelajar = 3;
let kutipan = "";

if (jamBelajar > 4) {
    kutipan = "Luar biasa! Tapi jangan lupa istirahat agar mata tidak lelah.";
} else if (jamBelajar >= 2 && jamBelajar <= 4) {
    kutipan = "Pertahankan fokusmu, progress yang sangat bagus!";
} else {
    kutipan = "Ayo pemanasan dan mulai buka Visual Studio Code sekarang!";
}

console.log(`${kutipan}`);

// Tantangan 9.2: Pengecek Status Modul (For Loop + If/Else)
const angka = 10;

for (let i = 1; i <= angka; i++) {
    if (i % 2 === 0) {
        console.log(`Modul ke-${i} adalah Genap: Materi Praktek 💻`);
    } else {
        console.log(`Modul ke-${i} adalah Ganjil: Materi Teori 📚`);
    }
}


// --- MATERI HARI 10: DOM MANIPULATION ---

// Menangkap element h1 di dalam class info-profil
const judulProfil = document.querySelector(`.info-profil h1`);

// Menangkap paragraf pertama di dalam seksi `tentang`
const teksTentang = document.querySelector(`#tentang p`);

// textContent mengganti semua teks murni di dalam element tersebut
judulProfil.textContent = "Raihanaufal Fayadh 🚀";

// innerHTML menerjemahkan string menjadi element HTML sungguhan
teksTentang.innerHTML = "Halo! Saya seorang <strong>Frontend Developer</strong> yang siap membangun web interaktif. Saat ini saya sedang mendalami javaScript murni.";

// Mengubah warna dan menambahkan efek transisi dari JS
judulProfil.style.color = "#f39c12"; // Warna Orange
judulProfil.style.textShadow = "2px 2px 5px rgba(0, 0, 0, 0.2)";
// Catatan: Properti CSS yang memiliki tanda hubung seperti background-color harus ditulis menyambung dengan huruf besar di JS menjadi backgroundColor


// --- TANTANGAN MATERI HARI 10 ---

// Tantangan 10.1: Modifikasi Tombol Form (Text & Style)
const tombolKirim = document.querySelector(`.tombol-pesan button`);
tombolKirim.textContent = "Kirim Sekarang 🚀";
tombolKirim.style.backgroundColor = "#3498db";

// Tantangan 10.2: Menyisipkan Tag HTML ke Judul (innerHTML)
const judulProyek = document.querySelector(`#proyek h2`);
judulProyek.innerHTML = "Koleksi <span style='color: #e74c3c; font-weight: bold;'>Proyek</span> Saya 📁";

// Tantangan 10.3: Memanipulasi Atribut Input
// Selain mengubah teks (textContent) dan desain (style), JavaScript juga bisa mengubah atribut asli HTML seperti href, src, atau placeholder.
const inputNama = document.querySelector(`#nama`);
inputNama.placeholder = "Masukan nama lengkap Anda di sini..."; // Mengubah placeholder input nama

// Tantangan 10.4: Menangkap Banyak Elemen Sekaligus (querySelectorAll + Loop)
const semuaTautan = document.querySelectorAll(`nav ul li a`); // Menangkap semua elemen <a> di dalam <nav>

for (let i = 0; i < semuaTautan.length; i++) {
    semuaTautan[i].textContent = semuaTautan[i].textContent + " 📌";
}


// --- MATERI HARI 11: EVENT LISTENERS ---

// Langkah 1: Mencegah Perilaku Bawaan (Prevent Default)
// Kita gunakan variabel tombolKirim yang sudah Anda buat di Tantangan sebelumnya.
// (Pastikan tombolKirim sudah dideklarasikan sebelumnya dwngan document.querySelector).
tombolKirim.addEventListener('click', function (event) {
    // 1. Mencegah halaman refresh otomatis
    event.preventDefault();

    // // 2. Tampilkan pesan sukses di console 
    // console.log("Tombol berhasil diklik! Pesan sedang diproses...");

    // // 3. Ubah teks tombol sebagai umpan balik visual
    // tombolKirim.textContent = "Pesan Terkirim! ✅";
    // tombolKirim.style.backgroundColor = "#27ae68"; // Ubah jadi hijau
});

// Langkah 2: Interaksi Mouse (Mouseover & Mouseout)
// Kita gunakan variabel judulProfil yang sudah Anda buat di materi Hari 10.
// Saat kursor mouse MASUK ke area teks judul
judulProfil.addEventListener('mouseover', function () {
    judulProfil.style.transform = "scale(1.1)"; // Membesarkan teks 10%
    judulProfil.style.transition = "transform 0.3s ease"; // Animasi transisi halus
    judulProfil.style.cursor = "pointer"; // Ubah kursor menjadi pointer (Bentuk Tangan)
});

// Saat kursor mouse KELUAR dari area teks judul
judulProfil.addEventListener('mouseout', function () {
    judulProfil.style.transform = "scale(1)"; // Kembalikan ukuran teks ke normal
});

// Tantangan 11.1: Efek Highlight pada Kolom InputInteraksi Mouse pada Tombol ( Focus & Blur )
inputNama.addEventListener('focus', function () {
    inputNama.style.backgroundColor = "#e8f8f5"; // Ubah warna latar belakang saat fokus
    inputNama.style.boxShadow = "0 0 5px rgba(52, 152, 219, 0.5)"; // Tambahkan efek bayangan
});

inputNama.addEventListener('blur', function () {
    inputNama.style.backgroundColor = "white"; // Kembalikan warna latar belakang ke default
    inputNama.style.boxShadow = "none"; // Hapus efek bayangan
});

const inputEmail = document.querySelector(`#email`);
inputEmail.addEventListener('focus', function () {
    inputEmail.style.backgroundColor = "#e8f8f5"; // Ubah warna latar belakang saat fokus
    inputEmail.style.boxShadow = "0 0 5px rgba(52, 152, 219, 0.5)"; // Tambahkan efek bayangan
});

inputEmail.addEventListener('blur', function () {
    inputEmail.style.backgroundColor = "white"; // Kembalikan warna latar belakang ke default
    inputEmail.style.boxShadow = "none"; // Hapus efek bayangan
});

// Tantangan 11.2: Kartu Proyek yang Merespon klik (Click Event)
// const kartuPertama = document.querySelector('.kartu-proyek:nth-child(1)');
// const judulKartuPertama = kartuPertama.querySelector('h3');

// kartuPertama.addEventListener('click', function() {
//     // Ubah teks judul kartu saat diklik
//     judulKartuPertama.textContent = "Proyek 1: Portofolio (Sedang Dilihat 👀)";
//     kartuPertama.style.borderLeftColor = "#f39c12";
// })

// const kartuKedua = document.querySelector('.kartu-proyek:nth-child(2)');
// const judulKartuKedua = kartuKedua.querySelector('h3');

// kartuKedua.addEventListener('click', function() {
//     // Ubah teks judul kartu saat diklik
//     judulKartuKedua.textContent = "Proyek 2: To-Do List (Sedang Dilihat 👀)";
//     kartuKedua.style.borderLeftColor = "#f39c12";
// });

// Tantangan Expert 11.3: Dynamic Event Listeners (Menggabungkan Loop & Events) VERSI ADVANCED DARI TANTANGAN 11.2
const semuaKartu = document.querySelectorAll('.kartu-proyek');

for (let i = 0; i < semuaKartu.length; i++) {
    const kartu = semuaKartu[i];
    const judulKartu = kartu.querySelector('h3');

    kartu.addEventListener('click', function () {
        // Ubah teks judul kartu saat diklik
        judulKartu.textContent = `Proyek ${i + 1}: Sedang Dilihat 👀`;
        kartu.style.borderLeftColor = "#f39c12";
    });
}

// Tantangan Expert 11.4: Validasi Formulir (Form Validation)
tombolKirim.addEventListener('click', function (event) {
    // Mencegah halaman refresh otomatis
    event.preventDefault();

    if (inputNama.value.trim() === "" || inputEmail.value.trim() === "") {
        inputNama.style.borderColor = "red";
        inputEmail.style.borderColor = "red";

        inputNama.placeholder = "Isi Nama Dulu! ❌";
        inputEmail.placeholder = "Isi Email Dulu! ❌";

        inputNama.style.backgroundColor = "#e74c3c";
        inputEmail.style.backgroundColor = "#e74c3c";

        tombolKirim.textContent = "Isi Formulir Dulu! ❌";
        tombolKirim.style.backgroundColor = "#e74c3c"; // Ubah tombol menjadi merah

        alert("Harap isi semua kolom sebelum mengirim pesan.");
        return; // Hentikan eksekusi lebih lanjut jika ada kolom kosong        
    } else {
        console.log("Tombol berhasil diklik! Pesan sedang diproses...");

        tombolKirim.textContent = "Pesan Terkirim! ✅";
        tombolKirim.style.backgroundColor = "#27ae68"; // Ubah jadi hijau
    }
});


// --- MATERI HARI 12: CREATE ELEMENTS ---
// 1. Tangkap elemen induk (tempat kita akan menempelkan elemen baru)
const areaSidebar = document.querySelector('.sidebar');

// 2. Buat elemen baru (Fase Create)
const lencanaStatus = document.createElement('div');

// 3. Dandani elemen tersebut (Fase Modify)
lencanaStatus.textContent = "🚀 Sedang aktif belajar javaScript";

lencanaStatus.style.backgroundColor = "#f39c12";
lencanaStatus.style.color = "white";
lencanaStatus.style.padding = "10px";
lencanaStatus.style.marginTop = "15px";
lencanaStatus.style.borderRadius = "5px";
lencanaStatus.style.fontWeight = "bold";
lencanaStatus.style.textAlign = "center";

// 4. Tempelkan ke halaman (Fase Append)
// appendChild akan meletakan element baru ini di posisi paling bawah dari areaSidebar
areaSidebar.appendChild(lencanaStatus);


// Tantangan 12.1: Menambahkan Menu Navigasi Baru
const menuNav = document.querySelector('nav ul');

const itemBaru = document.createElement('li');
const linkBaru = document.createElement('a')

linkBaru.textContent = "Blog";
linkBaru.href = "#blog";

itemBaru.appendChild(linkBaru);
menuNav.appendChild(itemBaru);

// Tantangan 12.2: Membuat Label Skill Otomatis (Menggabungkan Loop & Create)
// 1. Buat sebuah array (daftar) berisi keahlian Anda:
const daftarSkill = ["HTML5", "CSS3", "JavaScript", "Git"];

// 2. Tangkap elemen seksi tentang menggunakan
const seksiTentang = document.querySelector('#tentang');

// // 3. Buat sebuah wadah baru untuk menampung label-label ini
// const wadahSkill = document.createElement('div');

// wadahSkill.style.marginTop = "15px";

// for (let i = 0; i < daftarSkill.length; i++) {

//     const span = document.createElement('span');

//     span.textContent = daftarSkill[i];

//     span.style.backgroundColor = "#2c3e50";
//     span.style.color = "white";
//     span.style.padding = "5px 10px";
//     span.style.marginRight = "10px";
//     span.style.borderRadius = "5px";
//     span.style.fontSize = "14px";

//     wadahSkill.appendChild(span);
// }

// seksiTentang.appendChild(wadahSkill);

// Tantangan 12.3: Mengganti "For Loop" dengan Modern Array Method ".forEach()"
// Cara Modern (Lebih bersih dan tidak perlu repot dengan i++)
// daftarSkill.forEach(function (skill) {

//     const span = document.createElement('span');
//     span.textContent = skill; // Langsung mengambil nilai itemnya

//     // ... (kode style anda tetap sama) ...  
//     span.style.backgroundColor = "#2c3e50";
//     span.style.color = "white";
//     span.style.padding = "5px 10px";
//     span.style.marginRight = "10px";
//     span.style.borderRadius = "5px";
//     span.style.fontSize = "14px";

//     wadahSkill.appendChild(span);
// });

// seksiTentang.appendChild(wadahSkill);

// Tantangan 12.4: Membuat Helper Function (Pabrik Element)
// 1. Kita buat "pabrik elemen" satu kali saja
function ciptakanElemen(tag, teks, propertiGaya) {
    const elemen = document.createElement(tag);
    elemen.textContent = teks;

    // Object.assign memungkinkan kita menempelkan banyak gaya CSS sekaligus
    Object.assign(elemen.style, propertiGaya);

    return elemen;
}

// Menggabungkan "foreach" dan fungsi "ciptakanElemen" untuk Tantangan 12.2
const wadahSkill = document.createElement('div');
wadahSkill.style.marginTop = "15px";

daftarSkill.forEach(function (skill) {
    // Proses pembuatan, pengisian teks, desain dilakukan dalam 1 perintah ringkas
    const span = ciptakanElemen('span', skill, {
        backgroundColor: "#2c3e50",
        color: "white",
        padding: "5px 10px",
        marginRight: "10px",
        borderRadius: "5px",
        fontSize: "14px",
    });
    wadahSkill.appendChild(span);
});

seksiTentang.appendChild(wadahSkill);