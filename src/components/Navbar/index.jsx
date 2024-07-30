import Avatar from "../../assets/Avatar.png";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav className="border-b">
                <div className="px-[20px] sm:px-10 xl:px-28 py-5 flex justify-between items-center text-black">
                    <Link to="/" className="text-2xl">Si Mangcek Raga</Link>
                    <div className="flex items-center gap-8">
                        <i class="fa-solid fa-cart-shopping text-2xl"></i>
                        <i class="fa-regular fa-bell text-2xl"></i>
                        <div className="space-y-2">
                            <div className="font-bold">
                                Harry Maguire, S.Kom
                            </div>
                            <div className="font-semibold">NIK: 1671040707000010</div>
                        </div>
                        <img src={Avatar} className="rounded-full h-12 w-12" />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;