import React from 'react'
import Paciente from './Paciente'

const ListadoPacientes = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5 h-screen overflow-scroll">
      <h2 className='textx-4xl font-bold uppercase text-indigo-800 mt-2'>Listado Pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center"> Administra tus {''}
      <span className="text-indigo-600 font-bold">Pacientes y Citas</span> </p>
      <Paciente/>

    </div>
        
  )
}

export default ListadoPacientes
