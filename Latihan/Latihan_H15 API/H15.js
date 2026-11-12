// // --- MATERI HARI 15: ASYNC / AWAIT & FETCH API ---

// // 1. Kita wajib menambahkan "async" di depan function agar JS tahu
// // bahwa di dalam function ini ada proses yang butuh waktu (menunggu server).
// async function ambilDataUser() {

//     // 2. try/catch adalah cara expert menangani error.
//     // Jika 'try' gagal (misal internet mati), ia akan langsung melompat ke 'catch'.
//     try {
//         console.log("Sedang menghubungi server... ⏳");

//         // 3. 'await' memerintahkan JS: "Tunggu sampai server menjawab, baru lanjut kebaris berikutnya"
//         const respons = await fetch("https://jsonplaceholder.typicode.com/users");

//         // 4. Ubah data mentah dari server menjadi format JSON (Array/Object)
//         const dataUser = await respons.json();

//         console.log("Data berhasil diterima ✅");
//         console.log(dataUser); // Cek isi datanya di Console browser

//         // Coba kita ambil nama dari user urutkan pertama (indeks 0)
//         console.log(`Halo, nama saya adalah ${dataUser[0].name}`)
//     } catch (error) {
//         // Jika link API salah, atau internet terputus, pesan ini yang akan muncul.   
//         console.log("Waduh, gagal mengambil data:", error);
//     }
// }

// // Jalankan Funtion nya
// ambilDataUser();

// =========================================================

// --- JAWABAN TANTANGAN HARI 15: FETCH API & DOM ---

// 1. Tangkap wadahnya dari HTML
const daftarUser = document.querySelector("#daftar-user");

// 2. Buat fungsi async (kerena kita butuh waktu tunggu)
async function tampilkanUser() {

    try {
        // --- AWAL TANTANGAN 2 (LOADING STATE) ---
        // Sebelum minta data, kita ubah isi HTML-nya jadi teks loading
        daftarUser.innerHTML = "<li style='color: orange;'>⏳ Mengambil data dari server...</li>";
     
        // --- AWAL TANTANGAN 1 (MINTA DATA) ---
        // Perintahkan JS untuk mengambil data dan TUNGGU (await) sampai selesai
        const respons = await fetch ("https://jsonplaceholder.typicode.com/users");
        const dataJSON = await respons.json(); // Terjemahkan ke format yang bisa di baca JS

        // --- LANJUTAN TANTANGAN 2 (HAPUS LOADING)
        // Karena datanya sudah sampai, kita hapus teks loading-nya menjadi kosong
        daftarUser.innerHTML = "";

        // --- LANJUTAN TANTANGAN 1 (CETAK DATA KE LAYAR)
        // Kita buka datanya satu per satu menggunakan Looping forEach
        dataJSON.forEach(function(user) {
            // a. Ciptakan elemen li baru
            const liBaru = document.createElement("li");

            // b. Isi teksnya menggunakan data dari server (user.name dan user.email)
            liBaru.textContent = `👤 ${user.name} - ⬜ ${user.email}`;

            // c. Beri sedikit jarak agar rapih
            liBaru.style.padding = "10px";
            liBaru.style.borderBottom = "1px solid #acc";

            // d. Tempelkan ke HTML (ke dalam <ul> yang sudah kita tangkap di awal)
            daftarUser.appendChild(liBaru);
        });

        } catch (error) {
            // --- AKHIR TANTANGAN 2 (ERROR HANDLING) ---
            // Jika internet mati atau link API salah, baris ini yang akan dieksekusi
            daftarUser.innerHTML = "<li style='color: red; '>❌ Gagal menghubungi server. Silahkan coba lagi nanti.</li>";
        }
}

// 3. Jalankan fungsi tampilkanUser() agar data langsung muncul saat halaman dibuka
tampilkanUser();