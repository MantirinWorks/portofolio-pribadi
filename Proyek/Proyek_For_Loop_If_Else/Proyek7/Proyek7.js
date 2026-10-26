// 1. Data dan Fungsi Analisis (Logika dari Proyek 6)
const dataSiswa = [
    { nama: "Andi", nilai: 85, kehadiran: 90 },
    { nama: "Budi", nilai: 70, kehadiran: 85 },
    { nama: "Citra", nilai: 95, kehadiran: 100 },
    { nama: "Dewi", nilai: 80, kehadiran: 75 },
    { nama: "Eka", nilai: 90, kehadiran: 80 }
];

function analisisNilai(daftarSiswa) {
    let totalNilai = 0;
    let jumlahLulus = 0;
    let nilaiTertinggi = 0;
    let namaSiswaTerbaik = "";

    for (let siswa of daftarSiswa) {
        totalNilai += siswa.nilai;
        if (siswa.nilai >= 75 && siswa.kehadiran >= 80) {
            jumlahLulus++;
        }
        if (siswa.nilai > nilaiTertinggi) {
            nilaiTertinggi = siswa.nilai;
            namaSiswaTerbaik = siswa.nama;
        }
    }

    return {
        rataRataKelas: totalNilai / daftarSiswa.length,
        totalSiswaLulus: jumlahLulus,
        siswaTerbaik: namaSiswaTerbaik,
        nilaiTerbaik: nilaiTertinggi
    };
}

// 2. DOM MANIPULATION (Menghubungkan JS ke Layar HTML)

// a. Cari tombol di HTML berdasarkan ID-nya
const tombol = document.getElementById("tombolAnalisis");

// b. Tambahkan "Pendengar Acara" (Event Listener)
// Perintah ini berarti: "Saat tombol diklik, jalankan instruksi di dalam kurung kurawal"
tombol.addEventListener("click", function () {

    // Jalankan fungsi perhitungan
    let hasil = analisisNilai(dataSiswa);

    // Cari elemen span di HTML yang tugasnya menampung teks
    let elemenRataRata = document.getElementById("teksRataRata");
    let elemenLulus = document.getElementById("teksLulus");
    let elemenTerbaik = document.getElementById("teksTerbaik");

    // Ubah isi teks (innerText) pada layar dengan data dari JavaScript
    elemenRataRata.innerText = hasil.rataRataKelas;
    elemenLulus.innerText = hasil.totalSiswaLulus;
    elemenTerbaik.innerText = `${hasil.siswaTerbaik} (Nilai: ${hasil.nilaiTerbaik})`;

    // Ubah tampilan tombol setelah berhasil diklik
    tombol.innerText = "Analisis Selesai ✅";
    tombol.style.background = "#27ae60"; // Mengubah warna tombol jadi hijau
    tombol.disabled = true; // Mematikan tombol agar tidak bisa diklik berulang-ulang
});

// [ ... Biarkan fungsi analisisNilai dan dataSiswa yang lama tetap di atas ... ]

// FITUR BARU: Menambahkan Siswa dari layar ke dalam Array
const tombolTambah = document.getElementById("tombolTambah");

tombolTambah.addEventListener("click", function() {

    // 1. Ambil nilai (teks) yang diketik pengguna di layar menggunakan .value
    let namaBaru = document.getElementById("inputNama").value;
    let nilaiBaru = document.getElementById("inputNilai").value;
    let hadirBaru = document.getElementById("inputHadir").value;

    // 2. Keamanan Data (Validasi)
    // Cek apakah ada kotak yang belum di isi. jika ya, hentikan proses (Early Return)
    if (namaBaru === "" || nilaiBaru === "" || hadirBaru === "") {
        alert("Gagal: semua kotak harus diisi");
        return;
    }

    // 3. Masukan data kedalam Array dataSiswa menggunakan .push()
    // Catatan: input dari HTML selalu berupa Teks (String).
    // Kita harus mengubah nilai dan hadir menjadi Angka (Number) agar perhitungan matematikanya tidak error.
    dataSiswa.push({
        nama: namaBaru,
        nilai: Number(nilaiBaru),
        kehadiran: Number(hadirBaru)
    });

    // 4. Beri notifikasi ke layar bahwa data berhasil masuk
    document.getElementById("pesanNotifikasi").innerText = `${namaBaru} berhasil ditambahkan ke sistemm!`;

    // 5. Kosongkan kembali kotak input agar siap diisi murid berikutnya
    document.getElementById("inputNama").value = "";
    document.getElementById("inputNilai").value = "";
    document.getElementById("inputHadir").value = "";

    // 6. Kembalikan tombol analisis ke kondisi semuka (jika sebelumnya sudah diklik)
    const tombol = document.getElementById("tombolAnalisis");
    tombol.innerText = "Mulai Analisis";
    tombol.style.background = "#3498db";
    tombol.disabled = false;
});

// FITUR FINAL: Menampilkan Array ke Layar HTML
function perbaruiLayarList() {
    // 1. Tangkap elemen <ul> dari HTML
    let elementList = document.getElementById("listSiswa");

    // 2. Kosongkan isinya terlebih dahulu agar data tidak menumpunk ganda saat diperbarui
    elementList.innerHTML = "";

    // 3. Lakukan Looping untuk membaca setiap siswa di array dataSiswa
    for (let siswa of dataSiswa) {

        // 4. Rakit teks HTML menggunakan data siswa
        let tekSiswa = `<li><strong>${siswa.nama}</strong> - Nilai: ${siswa.nilai}, Hadir: ${siswa.kehadiran}%</li>`;

        // 5. Suntikan (tambahkan) teks HTML tersebut ke dalam <ul>
        elementList.innerHTML += teksSiswa;
    }
}

// Panggil fungsi ini satu kali di paling bawah agar saat halaman web pertama kali dibuka
// 5. data awal (Andi, Budi, Citra, dst) langsung muncul di layar
perbaruiLayarList();