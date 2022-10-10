import { axiosConfig } from "../configuration/axiosConfig"

/**
 * Obtiene todos los tipos de marca
 */
const obtenerMarcas = (estado = true) => {
    return axiosConfig.get('marcas?estado='+estado, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}


/**
 * Crea tipo de marca
 */
 const crearMarca = (data) => {
    return axiosConfig.post('marcas', data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

/**
 * Actualiza un tipo de marca por ID
 */
const editarMarcaPorID = (marcaId, data) => {
    return axiosConfig.put('marcas/'+marcaId, data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

/**
 * Borra un tipo de marca por ID
 */
 const borrarMarcaPorID = (marcaId) => {
    return axiosConfig.delete('marcas/'+marcaId, {}, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

/**
 * Consulta un tipo de marca por ID
 */
 const obtenerMarcaPorID = (marcaId) => {
    return axiosConfig.get('marcas/'+marcaId, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

export {
    obtenerMarcas,
    crearMarca,
    editarMarcaPorID,
    borrarMarcaPorID,
    obtenerMarcaPorID
}
