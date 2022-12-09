import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

export function MainLayout() {

    return (
        <div>
            <header >
                < Navbar />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                < Footer />
            </footer>
        </div>
    )
}