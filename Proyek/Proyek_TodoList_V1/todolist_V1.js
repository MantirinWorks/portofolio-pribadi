// --- PROYEK AKHIR: TO-DO LIST ---

// Langkah 1: Menangkap Elemen Inti!
const formTodo = document.querySelector('#form-todo');
const inputTugas = document.querySelector('#input-tugas');
const daftarTugas = document.querySelector('#daftar-tugas');

// Buku catatan utama di belakang layar (untuk menyimpan semua tugas)
let arrayTugas = []; // Array kosong untuk menyimpan tugas-tugas

// Helper function: Menyimpan array kedalam memori browser (localStorage)
function simpanKeLocalStorage() {
    // Ubah arrayTugas menjadi teks JSON, lalu simpan dengan kunci 'dataTugas'
    localStorage.setItem('dataTugas', JSON.stringify(arrayTugas));
}

function muatDataDariLocalStorage() {
    const dataTersimpan = localStorage.getItem('dataTugas');

    if (dataTersimpan !== null) {
        arrayTugas = JSON.parse(dataTersimpan);

        arrayTugas.forEach(function (tugas) {
            tambahkanTugasKeDOM(tugas);
        });
    }
}

// Langkah 2: Event Listener untuk Formulir (Creat & Read)
formTodo.addEventListener('submit', function (event) {
    event.preventDefault(); // Cegah halaman refresh

    const teksTugas = inputTugas.value.trim();

    // Validasi: Jangan tambahkan jika input kosong
    if (teksTugas === "") {
        alert("Nama tugas tidak boleh kosong");
        return;
    }

    // Tantangan Expert 1: Mencegah Tugas Ganda (Validasi Lanjutan)
    const semuaTugas = document.querySelectorAll('#daftar-tugas span');

    for (let i = 0; i < semuaTugas.length; i++) {
        if (semuaTugas[i].textContent.trim().toLowerCase() === teksTugas.toLowerCase()) {
            alert("Tugas ini sudah ada di daftar!");
            return;
        }
    }

    // Panggil fungsi pembuat elemen (kita buat fungsinya di langkah 3)
    tambahkanTugasKeDOM(teksTugas);

    // [TAMBAHAN BARU]: Rekam ke buku catatan dan simpan
    arrayTugas.push(teksTugas);
    simpanKeLocalStorage();

    // Kosongkan input setelah tugas ditambahkan
    inputTugas.value = "";
});

// Langkah 3: Fungsi Pencipta Elemen Tugas (Update & Delete)
function tambahkanTugasKeDOM(teks) {
    // 1. Buat kontainer item daftar (li)
    const liBaru = document.createElement('li');
    liBaru.style.display = "flex";
    liBaru.style.justifyContent = "space-between";
    liBaru.style.padding = "10px";
    liBaru.style.borderBottom = "1px solid #eee";
    liBaru.style.marginBottom = "5px";
    liBaru.style.backgroundColor = "#f9f9f9";

    // 2. Buat elemen teks (span)
    const spanTeks = document.createElement('span');
    spanTeks.textContent = teks;
    spanTeks.style.cursor = "pointer";

    // Fitur UPDATE: Coret teks saat diklik (Tandai Selesai)
    spanTeks.addEventListener('click', function () {
        if (spanTeks.style.textDecoration === "line-through") {
            spanTeks.style.textDecoration = "none";
            spanTeks.style.color = "black";
        } else {
            spanTeks.style.textDecoration = "line-through";
            spanTeks.style.color = "gray";
        }
    });

    // 3. Buat tombol hapus
    const tombolHapus = document.createElement('button');

    tombolHapus.textContent = "Hapus 🗑";
    tombolHapus.style.backgroundColor = "#e74c3c";
    tombolHapus.style.color = "white";
    tombolHapus.style.border = "none";
    tombolHapus.style.padding = "5px 10px";
    tombolHapus.style.cursor = "pointer";
    tombolHapus.style.borderRadius = "3px";

    // Fitur DELETE: Hapus 'li' dari DOM saat tombol hapus diklik
    tombolHapus.addEventListener('click', function () {
        liBaru.remove(); // .remove() adalah metode untuk menghapus elemen diri sendiri

        // [TAMBAHAN BARU]: Hapus dari buku catatan menggunakan .filter()
        // Logika: Simpan semua tugas di array, KECUALI tugas yang teksnya sedang di hapus ini
        arrayTugas = arrayTugas.filter(function (tugasDiMemori) {
            return tugasDiMemori !== teks; // Hanya simpan tugas yang TIDAK SAMA dengan teks yang dihapus
        });

        simpanKeLocalStorage(); // Perbarui memori di browser
    });

    // 4. Rakit semua elemen
    liBaru.appendChild(spanTeks);
    liBaru.appendChild(tombolHapus);

    // 5. Tempelkan ke wadah utama di halaman
    daftarTugas.appendChild(liBaru);
}

// Tantangan Expert 2: Fitur "Hapus Semua" (Clear All)
const tombolHapusSemua = document.querySelector('#btn-hapus-semua');

tombolHapusSemua.addEventListener('click', function () {
    daftarTugas.innerHTML = "";
    arrayTugas = []; // Kosogkan Array Utama
    localStorage.removeItem('dataTugas'); // Hapus jejak data dari memori browser
});

muatDataDariLocalStorage(); // Panggil fungsi untuk memuat data dari localStorage saat halaman dimuat