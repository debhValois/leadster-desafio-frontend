import Navbar from "@/Components/Navbar/Navbar";
import Header from "@/Components/Header/Header";
import Filter from "@/Components/Filter/Filter";
import Soluctions from "@/Components/Soluctions/Soluctions";
import Demo from "@/Components/Demo/Demo";
import Footer from "@/Components/Footer/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Desafio NextJS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Navbar />
        <Header />
        <Filter /> {/*Menu com filtro de busca*/}
        <Soluctions /> {/*Soluções - Diversos Produtos*/}
        <Demo /> {/*Demonstração*/}
        <Footer />
      </main>
    </>
  );
}
