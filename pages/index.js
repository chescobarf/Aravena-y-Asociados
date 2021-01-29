import Head from 'next/head'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import ServiciosGrid from '../components/Servicios/ServiciosGrid'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aravena & Asociados</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
    <Banner></Banner>
    <ServiciosGrid></ServiciosGrid>
    <Footer></Footer>
    </div>
  )
}
