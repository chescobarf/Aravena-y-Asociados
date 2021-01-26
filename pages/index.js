import Head from 'next/head'
import Banner from '../components/Banner/Banner'
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
    </div>
  )
}
