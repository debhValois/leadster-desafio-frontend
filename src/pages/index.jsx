import Demo from '@/Components/Demo/Demo';
import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';
import Navbar from '@/Components/Navbar/Navbar';
import Soluctions from '@/Components/Soluctions/Soluctions';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Bubble Coffe</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main>
        <Navbar />
        <Header />
        <Soluctions /> {/*Soluções - Diversos Produtos*/}  
        <Demo />    {/*Demonstração*/}
        <Footer />
      </main>
    </>
  );
}