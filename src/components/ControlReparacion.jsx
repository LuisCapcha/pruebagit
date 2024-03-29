import React, { useState } from 'react'
import CardReparacion from './CardReparacion';

const ControlReparacion = () => {
  const [list, setList] = useState(JSON.parse(localStorage.getItem('celulares')) || [])

  const [phone, setPhone] = useState(JSON.parse(localStorage.getItem('phone')) || [])


  const [objeto, setObjeto] = useState(list.find(elemento => elemento.IMEI == phone.imei))

  const reparacionPantalla = [
    {
      cambio: "Cambio de pantalla",
      hora: 13,
      minutes: 17,
    },
    {
      cambio: "Limpieza de pantalla",
      hora: 13,
      minutes: 18,
    },
    {
      cambio: "Limpieza de audio",
      hora: 13,
      minutes: 20,
    },
  ];

  const reparacionSistema = [
    {
      cambio: "Cambio de pantalla",
      hora: 13,
      minutes: 17,
    },
    {
      cambio: "Limpieza de pantalla",
      hora: 13,
      minutes: 18,
    },
    {
      cambio: "Limpieza de audio",
      hora: 13,
      minutes: 20,
    },
  ];



  return (
    <main className="flex flex-col items-center justify-center h-auto gap-4">

      {console.log(objeto)}


      <CardReparacion
        type="Pantalla"
        reparacion={reparacionPantalla}
        terminated={objeto.requierePantalla}
      />

      <CardReparacion 
        reparacion={reparacionPantalla} 
        type="Sistema" 
        terminated={objeto.requireSistema} />

      <CardReparacion 
        reparacion={reparacionPantalla} 
        type="Case" 
        terminated={objeto.requireCase} />

    </main>
  )
}

export default ControlReparacion