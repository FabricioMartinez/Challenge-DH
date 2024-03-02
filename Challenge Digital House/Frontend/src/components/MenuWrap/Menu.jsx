import React from "react";


function Menu(){
    return(
		<header className="menu-wrap" >
            <a href="/">
                <figure className="user">
                    <div className="user-avatar">
                        <img src="../src/assets/img/logo-dh.png" alt="Logo Digital House"/>
                    </div>
                    <figcaption>
                            Digital House
                    </figcaption>
                    <div>
                            <a href="#">
                                <i class="bi bi-menu-button-wide-fill"></i>
                            </a>
                    </div>
                </figure>
            </a>
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
                            <a href="/applicants">
                                <i className="bi bi-person" style={{ fontSize: '1.2rem', color: 'cornflowerblue' }}></i>
                                - Aspirantes
                            </a>
                        </li>
                        <li>
                            <a href="/professions">
                                <i className="bi bi-list-check"></i>
                                - Profesiones
                            </a>
                        </li>
                        <li>
                            <a href="/form">
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
    )
}

export default Menu