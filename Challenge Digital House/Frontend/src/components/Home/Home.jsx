import React from 'react';
import './bootstrap.min.css'
import './style.css';
import ClassComponents from '../ApplicantsComponents/ApplicantsComponen';
import ClassComponentProfessions from '../ProfessionsComponents/ProfessionsComponen';
import Search from '../SearchNav/Search';
import Menu from '../MenuWrap/Menu'


function Home(){
    return(
		<div className="dashboard">
			
			{/* Barra de navegacion */}
			<Search/>

			{/* Menu de navegacion */}
			<Menu/>
			
			<main className="content-wrap">
				<header className="preventa">
					<h2>Búsqueda y selección</h2>
					<p className="text-center h5">Encontramos talento para tu empresa, en todos los cargos administrativos, profesionales y técnicos.</p>
					<div>
						<img src="../src/assets/img/banner.jpg" alt="Rcursos Humanos"/>
					</div>
				</header>

				<section className="content aspirantes">
						<h2>Aspirantes</h2>
						<article className="person-boxes">
						<ClassComponents/>
						</article>
				</section>

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
    )
}

export default Home