import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import DetailLapangan from "../pages/DetailLapangan";
import BookingLapangan from "../pages/BookingLapangan";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detail-lapangan/:id" element={<DetailLapangan />} />
                <Route path="/booking-lapangan/" element={<BookingLapangan />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;