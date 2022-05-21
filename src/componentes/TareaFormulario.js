import React, { useState } from "react";
import '../hojas-de-estilo/TareaFomulario.css'
import { v4 as uuidV4 } from 'uuid';


function TareaFormulario( props ){

    const [input,setInput]=useState('');

    const manejarCambio=e=>{
        setInput(e.target.value);        
    };
    const manejarEnvio= e =>{
        e.preventDefault();        
        const tareaNueva={
            id:uuidV4(),
            texto:input,
            completado:false
        }
        props.onSubmit(tareaNueva);
    };
    return(
        <form 
        className="tarea-formulario"
        onSubmit={manejarEnvio}>     
            <input 
            className="tarea-input"
            type='text'
            placeholder='Escribe una Tarea'
            name='texto'
            onChange={manejarCambio}>
            </input>
            <button className="tarea-boton">
                agregar tarea
            </button>
        </form>
    );
}

export default TareaFormulario;