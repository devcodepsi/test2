import { children } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const LayoutDefault = ({children}) => {
    return (
        <>
        <Header />
        <main className="main">
            {children}
        </main>
        <Footer />
        </>
    )
}
export default LayoutDefault;