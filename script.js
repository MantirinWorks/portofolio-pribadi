// --- PROYEK AKHIR: TO-DO LIST ---

// Langkah 1: Menangkap Elemen Inti!
const formTodo = document.querySelector('#form-todo');
const inputTugas = document.querySelector('#input-tugas');
const daftarTugas = document.querySelector('#daftar-tugas');

// Langkah 2: Event Listener untuk Formulir (Creat & Read)
formTodo.addEventListener('submit', function(event) {
    event.preventDefault(); // Cegah halaman refresh

    const teksTugas = inputTugas.value.trim();

    // Validasi: Jangan tambahkan jika input kosong
    if (teksTugas === "") {
        alert("Nama tugas tidak boleh kosong");
        return;
    }

    // Panggil fungsi pembuat elemen (kita buat fungsinya di langkah 3)
    tambahkanTugasKeDOM(teksTugas);

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
    spanTeks.addEventListener('click', function() {
        if (spanTeks.style.textDecoration === "line-through") {
            spanTeks.style.textDecoration = "none";
            spanTeks.style.color = "black";
        } else {
            spanTeks.style.textDecoration = "line-through";
            spanTeks.style.color = "gray";
        }
    });
}