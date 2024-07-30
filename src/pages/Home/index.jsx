
import Lapangan from "../../assets/lapangan.jpg";

import axios from "axios";
import { useState, useEffect } from "react";

import ListLapangan from "../../data/list-lapangan.json";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";


function Home() {
    const navigate = useNavigate();
    const [lapangan, setLapangan] = useState([]);

    const getLapangan = async () => {
        try {
            const getLapangan = await axios.get("../../data/list-lapangan.json");
            setLapangan(getLapangan.data);
        } catch (error) {
            console.log(error);
        };
    };

    useEffect(() => {
        // getLapangan();
        setLapangan(ListLapangan);
    }, []);

    console.log(lapangan);
    return (
        <>
            <Navbar />
            <body className="px-[20px] sm:px-10 xl:px-28 space-y-8 text-black">
                <div className="border-b py-8 space-y-8">
                    <div className="text-2xl font-semibold">Selamat Datang Dibooking Lapangan Kota Palembang</div>
                    <div className="flex">
                        <div onClick={() => navigate(`/booking-lapangan/`)} className="bg-white w-auto py-[40px] px-[80px] rounded-lg shadow-lg text-center space-y-8">
                            <i class="fa-regular fa-calendar-days text-4xl text-green-600"></i>
                            <div className="text-xl font-semibold">Booking Lapangan</div>
                        </div>
                    </div>
                </div>
                <div className="border-b pb-8 space-y-8">
                    <div className="text-xl font-semibold">Lapangan Dikota Palembang</div>
                    <div className="grid grid-cols-4 gap-8">
                        {lapangan.map((lapangan) => (
                            <div key={lapangan._id} className="bg-white rounded-xl shadow-lg w-fit" onClick={() => navigate(`/detail-lapangan/${lapangan._id}`)}>
                                <img src={Lapangan} className="rounded-t-xl w-fit" />
                                <div className="p-8 space-y-4 flex flex-col justify-between">
                                    <div className="flex flex-col space-y-2">
                                        <div className="bg-[#F58465] rounded-full py-2 px-3 text-white w-fit text-sm">{lapangan.sportsFieldCategory}</div>
                                        <div className="text-xl font-bold">{lapangan.sportsFieldName}</div>
                                        <div className="text-normal font-medium">{lapangan.sportsFieldAddress}</div>
                                    </div>
                                    <div className="flex items-center justify-between text-[#F58465] text-xl">
                                        <div>
                                            Lihat Lapangan
                                        </div>
                                        <i class="fa-solid fa-arrow-right"></i>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="border-b pb-8 space-y-8">
                    <div className="text-xl font-semibold">Berkas Terbaru</div>
                    <div className="flex">
                        <div className="flex flex-col p-8 bg-white rounded-lg shadow-lg gap-4 w-[460px]">
                            <div className="flex justify-start items-start gap-8 b">
                                <i class="fa-regular fa-calendar-days text-2xl text-[#F58465]"></i>
                                <div>
                                    <div className="text-xl font-semibold">Harry Maguire, S.Kom</div>
                                    <div className="flex items-center gap-4">
                                        <div>25 Januari 2024 </div>
                                        <div>10:28</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end items-center gap-[40px]">
                                <div>
                                    <div className="text-lg font-medium">Lapangan Bola Kamboja</div>
                                    <div className="flex items-center gap-4">
                                        <div>Sesi 1</div>
                                        <div>06:00 - 12:00</div>
                                    </div>
                                </div>
                                <div className="bg-[#F58465] py-1 px-3 rounded-full text-white">On Progress</div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
            <Footer />
        </>
    )
}

export default Home;