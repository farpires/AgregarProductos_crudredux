import React, {useState} from 'react';
import { useDispatch, useSelector} from 'react-redux'
//action de redux
import { crearNuevoProductoAction } from '../actions/productoActions'; 


const NuevoProducto = ({history}) => {
    //state componente
    const [nombre, guardarNombre] = useState('');
    const [precio, guardarPrecio] = useState();
/*AGREGAR---------------------------------------------------------*/
            //utilizar use distpach y te crea una funcion
    const distpach = useDispatch();


            //Acceder al state del store 
    const cargando = useSelector((state) => state.productos.loading);
    const error = useSelector((state) => state.productos.error);
    

            //mandar llamar el action de productoAction
    const agregarProducto = (producto)=> distpach(crearNuevoProductoAction(producto));//sirve para poder usar las funciones que provienen del accion
            
/*-------------------------------------------------------AGREGAR*/

//cuando el usuario haga submit
const submitNuevoProducto = (e)=>{
      e.preventDefault();
    
        //1_Validar formulario
    // if(nombre.trim()==='' || precio <= 0){
    //     return;
    // }
    
        //2_si no hay errores
    
    
        //3_crear el nuevo producto
        agregarProducto({
            nombre,
            precio

        }); 
        //redireccionar
        history.push('/');// te lleva hacia la pagina proncopal

    };
    


    return ( 
      <div className="row justify-content-center">
          <div className="col-md-8">
              <div className="card">
                  <div className="card-body">
                      <h2 className="text-center mb-4 font-weight-bold">
                          Agregar Nuevo Producto 
                      </h2>
                      <form
                      onSubmit={submitNuevoProducto}
                      >
                          <div className="form-group">
                              <label>Nombre Producto</label>
                              <input type="text" 
                              className="form-control"
                              placeholder="Nombre Producto"
                              name="nombre"
                              value={nombre}
                              onChange={e => guardarNombre(e.target.value)}
                              />
                          </div>
                          <div className="form-group">
                              <label>Precio Producto</label>
                              <input 
                              type="number" 
                              className="form-control"
                              placeholder="Precio Producto"
                              nombre="precio"
                              value={precio}
                              onChange={e => guardarPrecio(Number(e.target.value))}
                              />
                          </div>
                          <button 
                          type="submit" 
                          className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                          >Agregar</button>
                      </form>
                      {cargando ? <p>Cargando...</p>: null}
                      {error ? <p className="alert alert-danger p2 mt-4 text-center">hubo un error</p>: null}
                  </div>
              </div>
          </div>
      </div>
     );
}
 
export default NuevoProducto;