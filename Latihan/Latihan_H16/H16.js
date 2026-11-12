// --- MATERI HARI 16: MAP, FILTER, REDUCE ---

// Data mentah simulasi (Array of Objects)
const dataProyek = [
    { nama: "Portofolio", status: "Selesai", jamDikerjakan: 20},
    { nama: "To-Do List", status: "Selesai", jamDikerjakan: 15},
    { nama: "Aplikasi Cuaca", status: "Proses", jamDikerjakan: 5},
    { nama: "Kalkulator", status: "Rencana", jamDikerjakan: 0}
];

console.log("=== 1. FILER (Mennyaring) ===");
// Kita hanya ingin mengambil proyek yang statusnya "Selesai"
const proyekSelesai = dataProyek.filter(function(proyek) {
    return proyek.status === "Selesai";
});
console.log("Proyek Selesai:", proyekSelesai);


console.log("=== 2. MAP (Mentransformasi) ===");
// Kita ingin mengambil Array proyekSelesai tadi, lalu mengubahnya menjadi format kalimat string
const kalimatProyek = proyekSelesai.map(function(proyek) {
    return `🚀 Proyek ${proyek.nama} memakan waktu ${proyek.jamDikerjakan} jam.`;
});
console.log("Daftar Kalimat:", kalimatProyek);


console.log("=== 3. REDUCE (Merangkum) ===");
// Kita ingin menghitung total jam dari SEMUA proyek yang ada
// 'total' adalah nilai tampungan sementara, 'proyek' adalah item saat ini, '0' adalah nilai awal
const totalJamBelajar = dataProyek.reduce(function(total, proyek) {
    return total + proyek.jamDikerjakan;
}, 0);
console.log(`Total waktu dedikasi ngoding: ${totalJamBelajar} jam ⌛`);