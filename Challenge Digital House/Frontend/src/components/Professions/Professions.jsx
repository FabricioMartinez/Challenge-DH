import React from "react";
import ClassComponentProfessions from "../ProfessionsComponents/ProfessionsComponen";
import Search from "../SearchNav/Search";
import Menu from "../MenuWrap/Menu";


function Professions(){
        return (
        <div className="dashboard">

            {/* Barra de navegacion */}
            <Search/>

            {/* Menu de navegacion */}
            <Menu/>
        
            <main className="content-wrap">
                <section className="content profesiones">
                <h2 className="mt-3">Profesiones</h2>
                    <div className="list-group shadow-sm p-3 mb-5 rounded">
                    
                        <h4 className="list-group-item list-group-item-action active text-center" aria-current="true">
                            Listado de Profesiones
                        </h4>
                    <ClassComponentProfessions/>
                    </div>
                </section>
            </main>
            
        </div>
        );
}


export default Professions;