import Header from 'components/Header';
import Hero from 'components/Hero';
import Layout from 'components/Layout';
import TableVote from 'components/TableVote';
import type { NextPage } from 'next';
import Link from 'next/link';
const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <Header />
      <Hero />
      <div className="flex items-center sm:gap-14 gap-5 justify-center ">
        <Link
          className="bg-black px-4 py-3 text-white rounded-md md:text-lg text-center"
          href={'/vote/create'}
        >
          Buat Vote Baru
        </Link>
        <Link
          className=" px-4 py-3 border-black border rounded-md md:text-lg text-center"
          href={'/participant'}
        >
          Ikutan Vote
        </Link>
      </div>
      <TableVote />
    </Layout>
  );
};

export default Home;
