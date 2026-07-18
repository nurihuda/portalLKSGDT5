const useState = window.React.useState;
const useEffect = window.React.useEffect;

export default function Bento({ jadwal }) {
    const [waktuSekarang, setWaktuSekarang] = useState(new Date());
    const [sisaDetik, setSisaDetik] = useState(620); // Nilai awal contoh: 10 menit 20 detik (00:10:20)

    // 1. Live Effect untuk Waktu Sistem & Countdown
    useEffect(() => {
        const timer = setInterval(() => {
            setWaktuSekarang(new Date());
            setSisaDetik(prev => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // 2. Helper Formatter Angka agar selalu dua digit (misal: 09)
    const formatDuaDigit = (angka) => String(angka).padStart(2, '0');

    // 3. Kalkulasi Jam, Menit, Detik dari Sisa Waktu
    const hitungJam = formatDuaDigit(Math.floor(sisaDetik / 3600));
    const hitungMenit = formatDuaDigit(Math.floor((sisaDetik % 3600) / 60));
    const hitungDetik = formatDuaDigit(sisaDetik % 60);

    // Mencari Agenda Selanjutnya dari props data
    const agendaAktif = jadwal?.find(j => j.status === "Berjalan") || { modul: "Sesi Pengumpulan" };

    return (
        <div className="w-full h-full flex flex-col md:flex-row gap-8 font-karla">
            
            {/* BAGIAN KIRI (75% Lebar): TIMER UTAMA */}
            <div className="w-full md:w-3/4 flex flex-col items-center justify-center bg-white rounded-2xl p-6 relative">
                <div className="text-center">
                    {/* Label Agenda */}
                    <h2 className="text-xl md:text-3xl font-extrabold text-lks-pink tracking-wide mb-2 animate-pulse">
                        &lt;&lt;Agenda Saat Ini&gt;&gt;
                    </h2>

                    {/* Big Countdown Display */}
                    <div className="text-7xl sm:text-8xl md:text-9xl font-black text-lks-blue tracking-tight select-none">
                        {hitungJam}:{hitungMenit}:{hitungDetik}
                    </div>

                    {/* Label Keterangan Format */}
                    <p className="text-base md:text-lg font-bold text-lks-pink tracking-wider mt-4">
                        Jam : Menit : Detik
                    </p>
                </div>
            </div>

            {/* BAGIAN KANAN (25% Lebar): WAKTU SISTEM & AGENDA SELANJUTNYA */}
            <div className="w-full md:w-1/4 flex flex-col justify-between gap-6">
                
                {/* WAKTU SISTEM WIDGET */}
                <div className="flex flex-col">
                    <span className="text-sm font-bold text-lks-blue mb-2">Waktu Sistem :</span>
                    <div className="bg-lks-green text-white p-4 rounded-xl shadow-sm border border-emerald-600/20">
                        <div className="text-2xl font-black tracking-wide">
                            {waktuSekarang.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' })} WIB
                        </div>
                        <div className="text-xs font-bold text-emerald-100 mt-1">
                            {waktuSekarang.toLocaleDateString('id-ID', { day: 'numeric', month: 'Long', year: 'numeric' })}
                        </div>
                    </div>
                </div>

                {/* AGENDA SELANJUTNYA WIDGET */}
                <div className="flex flex-col flex-1">
                    <span className="text-sm font-bold text-lks-blue mb-2">Agenda Selanjutnya:</span>
                    <div className="bg-lks-green text-white p-5 rounded-xl shadow-sm border border-emerald-600/20 flex-1 flex flex-col justify-start">
                        <div className="text-xl font-extrabold tracking-tight leading-snug">
                            {agendaAktif.modul}
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}
