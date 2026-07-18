// data-internal.js

// 1. Pengaturan Global & Teks Banner Utama
const GDT_CONFIG = {
    headline: "LKSN GDT 2026",
    submissionLink: "https://drive.google.com/drive/folders/dummy-submission-link",
    importantLinks: "https://linktr.ee/dummy-important-gdt"
};

// 2. Database Modul dengan Aturan Waktu Buka Otomatis (Format: YYYY-MM-DDTHH:mm:ss)
const GDT_MODULES = [
    {
        id: 1,
        title: "Modul 1: Graphic Design Technology Core",
        releaseTime: "2026-07-28T08:00:00",
        link: "https://github.com/dummy/repo/raw/main/modul/modul1.pdf"
    },
    {
        id: 2,
        title: "Modul 2: Branding & Visual Identity Task",
        releaseTime: "2026-07-28T13:15:00",
        link: "https://github.com/dummy/repo/raw/main/modul/modul2.pdf"
    },
    {
        id: 3,
        title: "Modul 3: Editorial & Layout Design Architecture",
        releaseTime: "2026-07-29T08:15:00",
        link: "https://github.com/dummy/repo/raw/main/modul/modul3.pdf"
    },
    {
        id: 4,
        title: "Modul 4: Packaging & Structural Assembly Production",
        releaseTime: "2026-07-29T10:45:00",
        link: "https://github.com/dummy/repo/raw/main/modul/modul4.pdf"
    }
];

// 3. Database Tabel Jadwal Hari/Fase Makro (Gabungan Simulasi & Kompetisi Utama)
const GDT_MACRO_SCHEDULE = [
    // Fase Persiapan Simulasi
    { no: 1, kode: "C-12 s/d C-11", tanggal: "Jumat 16 - Senin 20 Juli 2026", kegiatan: "TM gambaran umum kompetisi", fase: "Persiapan Simulasi" },
    { no: 2, kode: "C-10 s/d C-9", tanggal: "Sabtu & Minggu, 18 - 19 Juli 2026", kegiatan: "Set up layout simulasi", fase: "Persiapan Simulasi" },
    { no: 3, kode: "C-8", tanggal: "Senin, 20 Juli 2026", kegiatan: "TM Simulasi Daring", fase: "Persiapan Simulasi" },
    // Fase Simulasi Kompetisi
    { no: 4, kode: "C-7", tanggal: "Selasa, 21 Juli 2026", kegiatan: "Simulasi LKS Daring", fase: "Simulasi Kompetisi Daring" },
    { no: 5, kode: "C-6", tanggal: "Rabu, 22 Juli 2026", kegiatan: "Evaluasi dan Penutupan", fase: "Simulasi Kompetisi Daring" },
    // Fase Persiapan Kompetisi Utama
    { no: 6, kode: "C-2", tanggal: "Minggu, 26 Juli 2026", kegiatan: "TM Umum", fase: "Persiapan Lomba Utama" },
    { no: 7, kode: "C-1", tanggal: "Senin, 27 Juli 2026", kegiatan: "Pembukaan", fase: "Persiapan Lomba Utama" },
    // Fase Kompetisi Utama
    { no: 8, kode: "C1", tanggal: "Selasa, 28 Juli 2026", kegiatan: "Lomba Hari Pertama – Penilaian", fase: "Kompetisi Utama" },
    { no: 9, kode: "C2", tanggal: "Rabu, 29 Juli 2026", kegiatan: "Lomba Hari Kedua – Penilaian", fase: "Kompetisi Utama" },
    { no: 10, kode: "C3", tanggal: "Kamis, 30 Juli 2026", kegiatan: "Penilaian", fase: "Kompetisi Utama" },
    { no: 11, kode: "C+1", tanggal: "Jumat, 31 Juli 2026", kegiatan: "Penilaian dan penutupan", fase: "Setelah Kompetisi" }
];

// 4. Database Mikro Jadwal Harian Durasi (Digunakan untuk mesin deteksi Agenda Countdown Otomatis)
const GDT_MICRO_TIMELINE = [
    // Agenda Hari C-7 (Simulasi)
    { tanggal: "2026-07-21", start: "07:15", end: "07:30", kegiatan: "Persiapan (Simulasi)", durasi: "0:15" },
    { tanggal: "2026-07-21", start: "07:30", end: "08:00", kegiatan: "Briefing & Tanya Jawab (Simulasi)", durasi: "0:30" },
    { tanggal: "2026-07-21", start: "08:00", end: "09:30", kegiatan: "Pengerjaan Modul 1 (Simulasi)", durasi: "1:30" },
    { tanggal: "2026-07-21", start: "09:30", end: "09:45", kegiatan: "Pengumpulan (Simulasi)", durasi: "0:15" },
    { tanggal: "2026-07-21", start: "09:45", end: "12:45", kegiatan: "ISHOMA (Simulasi)", durasi: "3:00" },
    { tanggal: "2026-07-21", start: "12:45", end: "13:15", kegiatan: "Briefing & Tanya Jawab (Simulasi)", durasi: "0:30" },
    { tanggal: "2026-07-21", start: "13:15", end: "14:45", kegiatan: "Pengerjaan Modul 2 (Simulasi)", durasi: "1:30" },
    { tanggal: "2026-07-21", start: "14:45", end: "15:00", kegiatan: "Pengumpulan (Simulasi)", durasi: "0:15" },
    { tanggal: "2026-07-21", start: "15:00", end: "16:30", kegiatan: "Evaluasi (Simulasi)", durasi: "1:30" },

    // Agenda Hari C1 (Lomba Utama Hari 1)
    { tanggal: "2026-07-28", start: "07:15", end: "08:00", kegiatan: "Registrasi, Persiapan, Pembukaan Lomba", durasi: "0:45" },
    { tanggal: "2026-07-28", start: "08:00", end: "08:30", kegiatan: "Briefing & Tanya Jawab", durasi: "0:30" },
    { tanggal: "2026-07-28", start: "08:30", end: "11:30", kegiatan: "Pengerjaan Modul 1", durasi: "3:00" },
    { tanggal: "2026-07-28", start: "11:30", end: "14:45", kegiatan: "Pengumpulan & ISHOMA", durasi: "3:15" },
    { tanggal: "2026-07-28", start: "12:45", end: "13:15", kegiatan: "Briefing & Tanya Jawab (Sesi 2)", durasi: "0:30" },
    { tanggal: "2026-07-28", start: "13:15", end: "16:15", kegiatan: "Pengerjaan Modul 2", durasi: "3:00" },
    { tanggal: "2026-07-28", start: "16:15", end: "16:30", kegiatan: "Pengumpulan Modul 2", durasi: "0:15" },
    { tanggal: "2026-07-28", start: "16:30", end: "17:00", kegiatan: "Kompetisi Hari Pertama Selesai", durasi: "0:30" },
    
    // Agenda Hari C2 (Lomba Utama Hari 2)
    { tanggal: "2026-07-29", start: "07:15", end: "07:45", kegiatan: "Registrasi, Persiapan Ulang", durasi: "0:30" },
    { tanggal: "2026-07-29", start: "07:45", end: "08:15", kegiatan: "Briefing & Tanya Jawab Modul 3", durasi: "0:30" },
    { tanggal: "2026-07-29", start: "08:15", end: "11:15", kegiatan: "Pengerjaan Modul 3 (Paralel)", durasi: "3:00" },
    { tanggal: "2026-07-29", start: "08:15", end: "09:15", kegiatan: "Sharing Session", durasi: "1:00" },
    { tanggal: "2026-07-29", start: "09:15", end: "14:15", kegiatan: "Pengumpulan Panjang & Jeda", durasi: "5:00" },
    { tanggal: "2026-07-29", start: "09:15", end: "10:15", kegiatan: "ISHOMA", durasi: "1:00" },
    { tanggal: "2026-07-29", start: "10:15", end: "10:45", kegiatan: "Briefing & Tanya Jawab Modul 4", durasi: "0:30" },
    { tanggal: "2026-07-29", start: "10:45", end: "13:45", kegiatan: "Pengerjaan Modul 4", durasi: "3:00" },
    { tanggal: "2026-07-29", start: "13:45", end: "14:00", kegiatan: "Pengumpulan Modul 4", durasi: "0:15" },
    { tanggal: "2026-07-29", start: "14:00", end: "14:30", kegiatan: "Kompetisi Hari Kedua Selesai", durasi: "0:30" }
];
