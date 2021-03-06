import Nav from "../../app/components/elements/Nav";
import Footer from "../../app/components/elements/Footer";
import Link from "next/link";
import Head from 'next/head'
const Notfound = () => {
  return (
    <div className="h-screen">
      <Head>
        <title>Tello - 404</title>
        <meta name="description" content="Tello - Receive Tips on a whole new level." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <div className="w-full h-fit flex flex-col justify-items-center my-8">
        <div className="text-black font-bold text-4xl mx-auto mt-24">
          We think you&#39;re lost
        </div>
        <div className="text-[#3DB5E6] font-semibold text-lg mx-auto mt-12">
          Click this button, and let&#39;s get you found
        </div>
        <div className="mx-auto mt-8">
          <Link href="/">
            <button className="ml-2 hover:bg-[#2D9CDB] transition-all delay-500 text-sm rounded-lg bg-[#3DB5E6] text-white font-semibold py-4 px-4 mx-auto">
              Take Me Home
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Notfound;
