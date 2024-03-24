import Image from "next/image";
import profilePic from "@/public/profilePic.jpeg";
import logo from "@/public/su_logo.svg";
import style from "@/style/pageStyle.module.css";



export default function Home(pdfSource : string) {
  return (
    <main className={`${style["h-100vh"]} ${style["container-main"]}`}>
        <iframe src={pdfSource} ></iframe>
    </main>
  );
}