import {AppProps} from "next/app";
import "./styleForPageRoute.css"
import Header from "@/app/_components/header/Header";
import Footer from "@/app/_components/footer/Footer";

function Myapp({Component, pageProps}: AppProps) {
    return (
        <>
        <Component {...pageProps} />
        </>
    )
}

export default Myapp;