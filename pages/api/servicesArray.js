// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200
  res.json([{
    id:1,
    name:"Servicios Contables",
    descrip:`Realizamos el registro de su información contable
    correspondiente a ventas, compras y gastos de su empresa mes a
    mes para cumplir con las obligaciones fiscales tributarias
    establecidos por la ley. En lo principal declaración de IVA.`,
    svg:'/icons/serviciosContables.svg'
},
{
    id:2,
    name:"Servicio Para Contabilidades Atrasadas",
    descrip:`En breve plazo posible colocamos su contabilidad al día,
    regularizamos los IVA atrasados, imposiciones, asistimos a
    citaciones del SII, rectificamos Declaración de Impuesto Renta,
    entre otros`,
    svg:'/icons/serviciosContables.svg'
},
{
    id:3,
    name:"Recursos Humanos",
    descrip:`Confeccionamos Contratos de Trabajo, Liquidaciones de Sueldo
    mensualmente, Libro de remuneraciones, Preparamos y Declaramos
    sus Imposiciones, Confeccionamos Cartas de Aviso Despido,
    Calculamos y Confeccionamos Finiquitos.`,
    svg:'/icons/serviciosContables.svg'
},
{
    id:4,
    name:"Trámites Ante El SII",
    descrip:`Asesoramos permanentemente a nuestros clientes. Gestionamos la
    Iniciación de actividades, Ampliaciones de Giro, cambio de
    Domicilio, Cambios Societarios, IVA Exportador, Cambio de
    Sujeto, Términos de Giro, etc.`,
    svg:'/icons/serviciosContables.svg'
},
{
    id:5,
    name:"Regularizaciones Ante La Municipalidad Y/O Seremi",
    descrip:`Si ya iniciaste tu emprendimiento y debes regularizar patentes,
    permisos u otros, te ayudamos. Cuéntanos tu caso y te daremos
    solución.`,
    svg:'/icons/serviciosContables.svg'
},
{
    id:6,
    name:"Actualizaciones",
    descrip:`Mantenemos informados a nuestros clientes respecto de cambios en
    las normativas tributarias y laborales`,
    svg:'/icons/serviciosContables.svg'
  }])
}
