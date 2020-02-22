//esta parte es donde de inserta la base de dato y tambien se manda a ejecutarel reducer para modificar el state 

import{
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR
} from '../types';
import clienteAxios from '../config/axios'
import Swal from 'sweetalert2';


//Crear nuevos Productos 
export function crearNuevoProductoAction(producto){//esta funcion se usa en componentes
    return async (dispatch)=>{
        // console.log(producto)
        dispatch(agregarProducto());
        try {
            //insertar en la api
            await clienteAxios.post('/productos', producto);
            //si todo sale bien actualizar el state
            dispatch(agregarProductoExito(producto));

            //alerta
            Swal.fire (
                'Correcto',
                'El Producto se agrego correctmente',
                'succes'
            ) 
        } catch (error) {
            console.log(error);
            //si hay un eror cambiar el state 
            dispatch(agregarProductoError(true));
            //alerta de error
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error , intente de nuevo '
            })
        }
    }
}
const agregarProducto = () =>({
    type: AGREGAR_PRODUCTO,
    payload: true,
})
const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})
const agregarProductoError = estado => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado,

});
//funcion que descarga los prodyuctos de la base de datos

export function obtenerProductoAction(){
    return async (dispatch) =>{
        dispatch( descargarProductos());
    }
}
const descargarProductos = () =>({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
})