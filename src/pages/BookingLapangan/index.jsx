import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function BookingLapangan() {
    const days = Array.from({ length: 31 }, (_, i) => i + 1);

    return (
        <>
            <Navbar />
            <body className="px-[20px] sm:px-10 xl:px-28 space-y-8 text-black bg-slate-100">
                <div className="flex justify-center">
                    <div className="border w-[500px] flex justify-center text-center mt-8"></div>
                </div>
                <div className="flex justify-center items-center gap-[100px] text-lg font-semibold">
                    <div>Pilih Waktu dan Tempat</div>
                    <div>Informasi Pemesan</div>
                    <div>Pembayaran</div>
                </div>
                <div className="flex flex-col text-center gap-4 pb-8">
                    <i class="fa-regular fa-calendar-days text-[60px] text-green-600"></i>
                    <div className="text-2xl font-semibold">Booking Lapangan Segera!</div>
                </div>
                <div className="flex justify-center items-start gap-8 pb-8">
                    <div className="bg-white rounded-lg w-[500px] p-6 text-center space-y-4">
                        <div>Dispora</div>
                        <div>Pilih tanggal booking lapangan yang anda inginkan</div>
                        <div className="text-xl font-semibold">
                            Agustus 2024
                        </div>
                        <div className="grid grid-cols-7 gap-4 text-sm font-semibold">
                            <div>senin</div>
                            <div>selasa</div>
                            <div>rabu</div>
                            <div>kamis</div>
                            <div>jumat</div>
                            <div>sabtu</div>
                            <div>minggu</div>
                        </div>
                        <div className="grid grid-cols-7 gap-4">
                            {days.map((day) => (
                                <div className="font-bold" key={day}>{day}</div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-white rounded-lg w-[500px] p-5">
                        sddsd
                    </div>
                </div>
            </body>
            <Footer />
        </>
    )
}

export default BookingLapangan;