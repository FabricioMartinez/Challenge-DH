import React from "react";
import { useForm } from "react-hook-form";

function Form () {
    
       // const { register, handleSubmit } = useForm();

    
    return (
     
     <div>
        <h2>Formulario</h2>
        <form>
            <div>
                <label>Nombre</label>
                <input type="text" name=""/>
            </div>
            <div>
                <label>Dirección</label>
                <input type="text" name=""/>
            </div>
            <div>
                <label>Edad</label>
                <input type="text" name=""/>
            </div>
            <div>
                <label>País</label>
                <select>
                    <option value="es">España</option>
                    <option value="it">Italia</option>
                    <option value="fr">Francia</option>
                    <option value="ar">Argentina</option>
                </select>
                <input type="submit" value="Enviar"></input>
            </div>
        </form>
     </div>
    )

}

export default Form