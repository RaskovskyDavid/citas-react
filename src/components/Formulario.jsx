import {useState, useEffect, react} from 'react'
import Error from './Error';
import ErrorConChildren from './ErrorConChildren';
const Formulario = ({pacientes,setPacientes, paciente, setPaciente}) => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState(false);

  useEffect(()=> {
    if(Object.keys(paciente).length > 0)
    {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setDate(paciente.date)
      setSintomas(paciente.sintomas)
    }
    
  }, [paciente])

  const generarId= () => {
    const random = Math.random().toString()
    const fecha = Date.now().toString()
    return random + fecha
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // validacion del formulario
    if([nombre, propietario, email, date, sintomas].includes(''))
    {
      setError(true);
      return;
    }
      setError(false);
      // objeto de paciente
      const objetoPaciente = {
        nombre, propietario, email, date, sintomas
      }
      if(paciente.id)
      {
        //editando
        objetoPaciente.id = paciente.id
        const pacientesactualizados = pacientes.map(pacienteState => 
          pacienteState.id=== paciente.id? objetoPaciente : pacienteState)
        setPacientes(pacientesactualizados)
        setPaciente({})
      }
      else
      {
        // nuevo registro
        objetoPaciente.id = generarId()
        setPacientes([objetoPaciente, ...pacientes])

      }
      
      // REINICIAR EL FORM
      setNombre('')
      setPropietario('')
      setEmail('')
      setDate('')
      setSintomas('')
  }
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className=" text-lg mt-5 text-center mb-10">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold">Administrarlos</span>
      </p>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        {error && <ErrorConChildren>Si hay un error</ErrorConChildren>}
        {/* <Error mensaje={'Si hay un error'} /> */}
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase">Nombre Mascota</label>
          <input id="mascota" 
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                type="text"
                placeholder="Nombre de la Mascota"
                value={nombre}
                onChange={(e)=> setNombre(e.target.value)}
                />
        </div>
        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase">Nombre Propietario</label>
          <input id="propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                type="text"
                placeholder="Nombre del Propietario"
                value={propietario}
                onChange={(e)=> setPropietario(e.target.value)}
                />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase">Email</label>
          <input id="email" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                type="email"
                placeholder="Email Contacto Propietario"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                />
        </div>
        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase">Alta</label>
          <input id="alta" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                type="date"
                placeholder="Fecha de Alta"
                value={date}
                onChange={(e)=> setDate(e.target.value)}
                />
        </div>
        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase">Sintomas</label>
          <textarea id="sintomas" 
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
          placeholder="Describe los sintomas"
          value={sintomas}
          onChange={(e)=> setSintomas(e.target.value)}
                />
        </div>
        <input type="submit" 
        className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
        value="Agregar Paciente"/>
      </form>
    </div>
  )
}

export default Formulario
