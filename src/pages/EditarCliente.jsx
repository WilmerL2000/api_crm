import Formulario from '../components/Formulario'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const EditarCliente = () => {

  const [cliente, setCliente] = useState({})
  const [cargando, setCargando] = useState(true)

  const { id } = useParams()

  useEffect(() => {
    const obtenerClienteAPI = async () => {
      try {
        const url = `https://my-json-server.typicode.com/WilmerL2000/api_crm/clientes/${id}`
        const response = await fetch(url)
        const result = await response.json()
        setCliente(result)
      } catch (error) {

      }

      setTimeout(() => {
        setCargando(!cargando)
      }, 500);
    }
    obtenerClienteAPI()
  }, [])

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
      <p>Utiliza este formulario para editar los datos</p>

      {/* si el nombre del cliente existe */}
      {cliente?.nombre ? (
        <Formulario
          cliente={cliente}
          cargando={cargando}
        />
      ): <p>Cliente ID no válido</p>}

    </>
  )
}

export default EditarCliente