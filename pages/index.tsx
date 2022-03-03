import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/banner'
import  Header from '../components/header'

const Home: NextPage = () => {
  return (
    <div  className='max-w-7xl mx-auto'>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
          <Header />
          <Banner />

        {/*Posts */}
       
    </div>
  )
}
export const getServerSideProps = async () => {
  return {
    props: { },
  }
}

export default Home
