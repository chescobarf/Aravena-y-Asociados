import Head from 'next/head'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import ServiciosGrid from '../components/Servicios/ServiciosGrid'
import Whatsapp from '../components/Whatsapp/Button'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Aravena & Asociados</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <div className="relative">
        <Banner></Banner>
        <ServiciosGrid></ServiciosGrid>
        <Whatsapp
          numero="+56977031115"
          msg="Hola Aravena y Asociados, necesito de sus servicios"
        ></Whatsapp>
      </div>
      
    <Footer></Footer>
    
    </div>
  )
}
