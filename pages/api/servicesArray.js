// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//CORS
import Cors from 'cors'
import initMiddleware from '../../lib/init-middleware'

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS'],
  })
)
export default async function handler(req, res) {
    // Run cors
    await cors(req, res)
    res.json([{
        id:1,
        name:"Servicios Contables",
        descrip:`En Aravena Y Asociados realizamos el registro de su información contable
        correspondiente a ventas, compras y gastos de su empresa mes a mes para cumplir
        con las obligaciones fiscales tributarias establecidas por la ley. En lo principal
        declaración de IVA.`,
        svg:'/icons/serviciosContables.svg',
        img:'/1.jpg'
    },
    {
        id:2,
        name:"Servicio Para Contabilidades Atrasadas",
        descrip:`Colocamos su contabilidad al día, regularizamos los IVA atrasados, imposiciones,
        asistimos a citaciones del Servicio de Impuestos Internos, rectificamos Declaración de
        Impuesto Renta, entre otros.`,
        svg:'/icons/contabilidadAtrasada.svg',
        img:'/2.jpg'
    },
    {
        id:3,
        name:"Recursos Humanos",
        descrip:`Confeccionamos Contratos de Trabajo, Liquidaciones de Sueldo mensualmente, Libro
        de remuneraciones. Preparamos y declaramos sus Imposiciones, confeccionamos
        Cartas de Aviso Despido, calculamos y confeccionamos Finiquitos.`,
        svg:'/icons/rrhh.svg',
        img:'/3.jpg'
    
    },
    {
        id:4,
        name:"Trámites Ante El SII",
        descrip:`Gestionamos la Iniciación de actividades, Ampliaciones de Giro, cambio de Domicilio,
        Cambios Societarios, IVA Exportador, Cambio de Sujeto, Términos de Giro, etc.`,
        svg:'/icons/sii.svg',
        img:'/4.jpg'
    
    },
    {
        id:5,
        name:"Regularizaciones Ante La Municipalidad Y/O Seremi",
        descrip:`Si ya iniciaste tu emprendimiento y debes regularizar patentes, permisos u otros, te
        ayudamos. Cuéntanos tu caso y te daremos solución.`,
        svg:'/icons/muni.svg',
        img:'/5.jpg'
    
    },
    {
        id:6,
        name:"Actualizaciones",
        descrip:`Mantenemos informados a nuestros clientes respecto de cambios en las normativas
        tributarias y laborales para tomar decisiones oportunas y modernizar tu negocio.`,
        svg:'/icons/update.svg',
        img:'/6.jpg'
    
      }])

}

// export default (req, res) => {
//   res.statusCode = 200
//   res.json([{
//     id:1,
//     name:"Servicios Contables",
//     descrip:`Realizamos el registro de su información contable
//     correspondiente a ventas, compras y gastos de su empresa mes a
//     mes para cumplir con las obligaciones fiscales tributarias
//     establecidos por la ley. En lo principal declaración de IVA.`,
//     svg:'/icons/serviciosContables.svg',
//     img:'/1.jpg'
// },
// {
//     id:2,
//     name:"Servicio Para Contabilidades Atrasadas",
//     descrip:`En breve plazo posible colocamos su contabilidad al día,
//     regularizamos los IVA atrasados, imposiciones, asistimos a
//     citaciones del SII, rectificamos Declaración de Impuesto Renta,
//     entre otros`,
//     svg:'/icons/serviciosContables.svg',
//     img:'/2.jpg'
// },
// {
//     id:3,
//     name:"Recursos Humanos",
//     descrip:`Confeccionamos Contratos de Trabajo, Liquidaciones de Sueldo
//     mensualmente, Libro de remuneraciones, Preparamos y Declaramos
//     sus Imposiciones, Confeccionamos Cartas de Aviso Despido,
//     Calculamos y Confeccionamos Finiquitos.`,
//     svg:'/icons/serviciosContables.svg',
//     img:'/3.jpg'

// },
// {
//     id:4,
//     name:"Trámites Ante El SII",
//     descrip:`Asesoramos permanentemente a nuestros clientes. Gestionamos la
//     Iniciación de actividades, Ampliaciones de Giro, cambio de
//     Domicilio, Cambios Societarios, IVA Exportador, Cambio de
//     Sujeto, Términos de Giro, etc.`,
//     svg:'/icons/serviciosContables.svg',
//     img:'/4.jpg'

// },
// {
//     id:5,
//     name:"Regularizaciones Ante La Municipalidad Y/O Seremi",
//     descrip:`Si ya iniciaste tu emprendimiento y debes regularizar patentes,
//     permisos u otros, te ayudamos. Cuéntanos tu caso y te daremos
//     solución.`,
//     svg:'/icons/serviciosContables.svg',
//     img:'/5.jpg'

// },
// {
//     id:6,
//     name:"Actualizaciones",
//     descrip:`Mantenemos informados a nuestros clientes respecto de cambios en
//     las normativas tributarias y laborales`,
//     svg:'/icons/serviciosContables.svg',
//     img:'/6.jpg'

//   }])
// }
