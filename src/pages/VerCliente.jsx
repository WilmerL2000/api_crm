import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Spinner from "../components/Spinner"

const VerCliente = () => {

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
            }, 1000);
        }
        obtenerClienteAPI()
    }, [])

    return (
        cargando ? <Spinner /> : Object.keys(cliente).length === 0 ? <p>No hay resultados</p> : (

            <div>
                {cargando ? 'cargando...' : (
                    <>
                        <h1 className="font-black text-4xl text-blue-900">Ver Cliente: {cliente.nombre}</h1>
                        <p>Información del Cliente</p>

                        <p className="text-4xl text-gray-600 mt-10">
                            <span className="text-gray-800 uppercase font-bold">Nombre: </span>
                            {cliente.nombre}
                        </p>

                        <p className=" text-2xl text-gray-600 mt-4">
                            <span className=" text-gray-800 uppercase font-bold">Email: </span>
                            {cliente.email}
                        </p>

                        <p className=" text-2xl text-gray-600 mt-4">
                            <span className="text-gray-800 uppercase font-bold">Teléfono: </span>
                            {cliente.telefono}
                        </p>

                        <p className=" text-2xl text-gray-600">
                            <span className="text-gray-800 uppercase font-bold mt-4">Empresa: </span>
                            {cliente.empresa}
                        </p>
                        {cliente.notas && (
                            <p className=" text-2xl text-gray-600 mt-4">
                                <span className="text-gray-800 uppercase font-bold">Notas: </span>
                                {cliente.notas}
                            </p>
                        )}
                    </>
                )}
            </div>
        )
    )
}

export default VerCliente