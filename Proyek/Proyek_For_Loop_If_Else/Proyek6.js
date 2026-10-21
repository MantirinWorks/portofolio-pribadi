console.log("////////////////////////////");
console.log("       --- Proyek 6 ---     ");
console.log("////////////////////////////");

// --- Proyek 6 (Level Expert+): Sistem Analisis Rapor Sekolah 🎓 ---

// 1. Data Siswa
const dataSiswa = [
    { nama: "Andi", nilai: 85, kehadiran: 90 },
    { nama: "Budi", nilai: 70, kehadiran: 85 }, // Tidak lulus (nilai kurang)
    { nama: "Citra", nilai: 95, kehadiran: 100 },
    { nama: "Dewi", nilai: 80, kehadiran: 75 }, // Tidak lulus (kehadiran kurang)
    { nama: "Eka", nilai: 90, kehadiran: 80 }
];

// 2. Fungsi Analisis (TUGASMU DI SINI)
function analisisNilai(daftarSiswa) {
    let totalNilai = 0;
    let jumlahLulus = 0;

    // Kita buat variabel penampung untuk siswa terbaik
    // Set nilai awalnya 0, nanti kita bandingkan
    let nilaiTertinggi = 0;
    let namaSiswaTerbaik = "";

    // --- TULIS LOGIKA LOOPING & KONDISIONAL DI SINI ---
    // Petunjuk: Gunakan for...of untuk membaca 'daftarSiswa'

    for (let siswa of daftarSiswa) {
        // a. Tambahkan nilai siswa ke 'totalNilai' untuk menghitung rata-rata nanti
        totalNilai += siswa.nilai;

        // b. Cek Kelulusan (Gunakan if dengan &&)
        // Jika nilai >= 75 DAN kehadiran >= 80, tambah 'jumlahLulus'
        let jumlahLulus = 0;

        dataSiswa.forEach(siswa => {
            if (siswa.nilai >= 75 && siswa.kehadiran >= 80) {
                jumlahLulus++;
            }
        });

        console.log(`Jumlah siswa yang lulus: ${jumlahLulus}`);

        // c. Cek Siswa Terbaik
        // Jika nilai siswa saat ini > nilaiTertinggi, 
        // update 'nilaiTertinggi' dan 'namaSiswaTerbaik'

    }
    // --------------------------------------------------

    // --- TULIS LOGIKA RATA-RATA DI SINI ---
    // Hitung rata-rata: totalNilai dibagi panjang array (daftarSiswa.length)
    let rataRata = 0; // Ubah ini dengan rumus yang benar

    // --------------------------------------------------

    // 3. Return Multiple Values (Mengembalikan banyak nilai dalam bentuk Object)
    return {
        rataRataKelas: rataRata,
        totalSiswaLulus: jumlahLulus,
        siswaTerbaik: namaSiswaTerbaik,
        nilaiTerbaik: nilaiTertinggi
    };
}

// 4. Uji Coba Program
console.log("=== LAPORAN HASIL UJIAN ===");
let hasilAnalisis = analisisNilai(dataSiswa);

// Menampilkan hasil yang di-return dari fungsi
console.log(`Rata-rata Nilai Kelas : ${hasilAnalisis.rataRataKelas}`);
console.log(`Jumlah Siswa Lulus    : ${hasilAnalisis.totalSiswaLulus} orang`);
console.log(`Siswa Terbaik         : ${hasilAnalisis.siswaTerbaik} (Nilai: ${hasilAnalisis.nilaiTerbaik})`);