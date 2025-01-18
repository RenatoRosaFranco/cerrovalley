import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";

import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from "./ui/componentes/Footer";
import Header from "./ui/componentes/Header";

import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cerro Valley | Do zero a Startup",
  description: "Transforme sua ideia em uma startup de sucesso com o Cerro Valley! Conheça os caminhos para empreender, do planejamento à execução, com conteúdo prático e inspiração para inovar no mercado.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        <script src="https://kit.fontawesome.com/5165849ba2.js" crossOrigin="anonymous"></script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
          {children}
        <Footer />

        <ToastContainer />
      </body>
    </html>
  );
}
