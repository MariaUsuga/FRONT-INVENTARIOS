import { axiosConfig } from "../configuration/axiosConfig"

/**
 * Obtiene todos los tipos de marca
 */
const obtenerUsuarios = (estado = true) => {
    return axiosConfig.get('usuarios?estado='+estado, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}


/**
 * Crea tipo de marca
 */
const crearUsuario = (data) => {
    return axiosConfig.post('usuarios', data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

/**
 * Actualiza un tipo de marca por ID
 */
const editarUsuarioPorID = (usuarioId, data) => {
    return axiosConfig.put('usuarios/'+usuarioId, data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

/**
 * Borra un tipo de marca por ID
 */
 const borrarUsuarioPorID = (usuarioId) => {
    return axiosConfig.delete('usuarios/'+usuarioId, {}, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

/**
 * Consulta un tipo de marca por ID
 */
 const obtenerUsuarioPorID = (usuarioId) => {
    return axiosConfig.get('usuarios/'+usuarioId, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

export {
    obtenerUsuarios,
    crearUsuario,
    editarUsuarioPorID,
    borrarUsuarioPorID,
    obtenerUsuarioPorID
}
