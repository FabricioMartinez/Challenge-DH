import React from 'react';

import './normalize.min.css'
import './font-awesome.min.css'
import './bootstrap.min.css'
import './style.css';

import ClassComponents from '../ClassComponents/ApplicantsComponen';
import ClassComponentProfessions from '../ClassComponents/ProfessionsComponen';


function Home(){
    return(
	<div className="dashboard">
		
		<section className="search-wrap">
			<div className="search">
				<label htmlFor="search">
					<i className="bi bi-search" style={{ fontSize: '1.5rem', color: 'cornflowerblue' }}></i>
					<input type="text" id="search"/>
				</label>
			</div>

			<div className="user-actions">
				<button>
					<a href="#"><i className="bi bi-person-add" style={{ fontSize: '1.5rem', color: 'cornflowerblue' }}></i></a>
				</button>
				<button>
					<a href="#"><i className="bi bi-person"
							style={{ fontSize: '1.5rem', color: 'cornflowerblue' }}></i></a>
				</button>
				<button>
					<a href="#"><i className="bi bi-box-arrow-right"
							style={{ fontSize: '1.5rem', color: 'cornflowerblue' }}></i></a>
				</button>
			</div>
		</section>

		<header className="menu-wrap">
			<figure className="user">
				<div className="user-avatar">
					<img src="./src/assets/img/logo-dh.png" alt="Logo Digital House	"/>
                    
				</div>
				<figcaption>
					Digital House
				</figcaption>
			</figure>
			<nav>
				<section className="menu">
					<h3>Opciones</h3>
					<ul>
                        <li>
                            <a href="#">
                                <i className="bi bi-building" style={{ fontSize: '1.2rem', color: 'cornflowerblue' }}></i>
                                - Empresas
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="bi bi-person" style={{ fontSize: '1.2rem', color: 'cornflowerblue' }}></i>
                                - Aspirantes
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="bi bi-list-check"></i>
                                - Profesiones
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="bi bi-person-vcard" style={{ fontSize: '1.2rem', color: 'cornflowerblue' }}></i>
                                - Postulate aquí
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="bi bi-chat-left-text"></i>
                                - Contacto
                            </a>
                        </li>

					</ul>
				</section>
			</nav>
		</header>
	
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