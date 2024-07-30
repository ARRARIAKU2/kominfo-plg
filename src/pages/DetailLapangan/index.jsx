import ListLapangan from "../../data/list-lapangan.json";
import Lapangan from "../../assets/lapangan.jpg";

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function DetailLapangan() {
    const { id } = useParams();

    const lapangan = ListLapangan.find((lapangan) => lapangan._id === id);

    return (
        <>
            <Navbar />
            <body className="px-[20px] sm:px-10 xl:px-28 space-y-8 text-black">
                <div className="py-8 border-b">
                    <img src={Lapangan} className="rounded-xl w-full h-[500px]" />
                    <div className="flex items-center justify-between pt-8">
                        <div className="space-y-4">
                            <div className="py-1 px-3 rounded-lg bg-[#E9F2FE] w-fit">{lapangan.sportsFieldCategory}</div>
                            <div className="text-3xl font-bold">{lapangan.sportsFieldName}</div>
                            <div className="flex items-center gap-4">
                                <i class="fa-solid fa-location-dot"></i>
                                <div>{lapangan.sportsFieldAddress}</div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-end text-end gap-2">
                            <div className="text-lg font-semibold">Tarif mulai dari</div>
                            <div className="text-lg font-semibold"><span className="text-5xl text-[#F58465]">Rp. {lapangan.sessions[0].price}</span>/session</div>
                            <button className="bg-[#1D82AA] text-xl py-3 px-5 rounded-lg text-white font-semibold">Booking Lapangan</button>
                        </div>
                    </div>
                </div>
                <div className="pb-8 border-b">
                    <div className="text-2xl font-semibold">Detail Lapangan</div>
                    <div className="flex items-start gap-4 pt-8">
                        <i class="fa-regular fa-file text-xl"></i>
                        <div className="space-y-2">
                            <div className="text-lg font-bold">Deskripsi Lapangan</div>
                            <div className="text-lg font-semibold">{lapangan.sportsFieldDescription}</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-4">
                        <div className="flex items-start gap-4 pt-8">
                            <i class="fa-regular fa-file text-xl"></i>
                            <div className="space-y-2">
                                <div className="text-lg font-bold">Tipe Lapangan</div>
                                <div className="text-lg font-semibold">{lapangan.sportsFieldType}</div>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 pt-8">
                            <i class="fa-regular fa-file text-xl"></i>
                            <div className="space-y-2">
                                <div className="text-lg font-bold">Ukuran Lapangan</div>
                                <div className="text-lg font-semibold">{lapangan.sportsFieldSize}</div>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 pt-8">
                            <i class="fa-regular fa-file text-xl"></i>
                            <div className="space-y-2">
                                <div className="text-lg font-bold">Kapasista Lapangan</div>
                                <div className="text-lg font-semibold">{lapangan.sportsFieldCapacity}</div>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 pt-8">
                            <i class="fa-regular fa-file text-xl"></i>
                            <div className="space-y-2">
                                <div className="text-lg font-bold">Contact person</div>
                                <div className="text-lg font-semibold">{lapangan.contacPerson}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pb-8 border-b">
                    <div className="text-2xl font-semibold">Daftar Session Lapangan</div>
                    <div className="grid grid-cols-3 pt-4">
                        {lapangan.sessions.map((session, index) => (
                            <div className="flex flex-col text-xl font-semibold">
                                <div>Sesi<span>: {index + 1}</span></div>
                                <div>Jam<span>: {session.title}</span></div>
                                <div>Harga <span>: Rp. {session.price}</span></div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="pb-8 border-b">
                    <div className="text-2xl font-semibold">Lokasi Lapangan</div>
                    <iframe src={lapangan.map} className="w-full h-[400px] rounded-xl mt-8" ></iframe>
                </div>
            </body>
            <Footer />
        </>
    )
}

export default DetailLapangan;