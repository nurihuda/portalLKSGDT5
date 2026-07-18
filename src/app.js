import { BackgroundPattern, GdtLogo } from './components/assets.js';
import Bento from './components/bento.js'; // 1. IMPORT COMPONENT BENTO BARU

const useState = window.React.useState;
const useEffect = window.React.useEffect;

function App() {
    // 2. STATE DATA JADWAL SEDERHANA UNTUK COMPONENT BENTO
    const [lksJadwal] = useState([
        { id: "m1", modul: "Sesi Pengumpulan", status: "Berjalan" }
    ]);

    return (
        <div className="flex flex-col h-screen w-screen overflow-hidden bg-white select-none">
            
            {/* 1/5 SCREEN TINGGI - HEADER BARIS 1 */}
            <header className="h-[20vh] relative w-full border-b-4 border-lks-blue overflow-hidden shrink-0">
                <BackgroundPattern className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-between px-12 z-10">
                    <div className="bg-white/95 p-3 rounded-xl shadow-md border border-slate-200/60 max-h-[80%] flex items-center">
                        <GdtLogo className="h-10 md:h-12 w-auto object-contain" />
                    </div>
                    <div className="bg-white/95 px-8 py-3 rounded-xl shadow-md border border-slate-200/60 flex items-center justify-center">
                        <h1 className="text-xl md:text-3xl font-extrabold tracking-tight text-lks-pink">
                            LKSN GDT 2026
                        </h1>
                    </div>
                </div>
            </header>

            {/* 3/5 SCREEN TINGGI - TIMER UTAMA BARIS 2, 3, 4 */}
            <main className="h-[60vh] w-full flex bg-slate-50/50 p-8 shrink-0">
                {/* 3. MASUKKAN COMPONENT BENTO KE SINI */}
                <Bento jadwal={lksJadwal} />
            </main>

            {/* 1/5 SCREEN TINGGI - FOOTER BARIS 5 */}
            <footer className="h-[20vh] relative w-full border-t-4 border-lks-blue overflow-hidden shrink-0">
                <BackgroundPattern className="absolute inset-0 w-full h-full object-cover rotate-180" />
                <div className="absolute inset-0 flex items-center justify-center gap-6 px-12 z-10">
                    <button className="bg-white border-2 border-lks-blue text-lks-blue font-extrabold px-8 py-3 rounded-xl shadow-md hover:scale-105 transition active:scale-95 text-sm md:text-base">
                        Akses Modul
                    </button>
                    <button className="bg-white border-2 border-lks-blue text-lks-blue font-extrabold px-8 py-3 rounded-xl shadow-md hover:scale-105 transition active:scale-95 text-sm md:text-base">
                        Folder Pengumpulan
                    </button>
                    <button className="bg-white border-2 border-lks-blue text-lks-blue font-extrabold px-8 py-3 rounded-xl shadow-md hover:scale-105 transition active:scale-95 text-sm md:text-base">
                        Jadwal Kompetisi
                    </button>
                    <button className="bg-white border-2 border-lks-blue text-lks-blue font-extrabold px-8 py-3 rounded-xl shadow-md hover:scale-105 transition active:scale-95 text-sm md:text-base">
                        Link-Link Penting
                    </button>
                </div>
            </footer>

        </div>
    );
}

const root = window.ReactDOM.createRoot(document.getElementById('root'));
root.render(window.React.createElement(App));
