import React from "react";
import ClassComponents from "../ApplicantsComponents/ApplicantsComponen";
import Search from "../SearchNav/Search";
import Menu from "../MenuWrap/Menu";

function Applicants(){
    return (
        <div className="dashboard">

           {/* Barra de navegacion */}
           <Search/>

            {/* Menu de navegacion */}
            <Menu/>
        
            <main className="content-wrap">
                <section className="content aspirantes">
                        <h2>Aspirantes</h2>
                        <article className="person-boxes">
                        <ClassComponents/>
                        </article>
                </section>
            </main>
            
        </div>
    );
}


export default Applicants;