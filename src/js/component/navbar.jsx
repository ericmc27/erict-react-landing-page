import React from 'react'

function addActive(element) {
	const links = document.querySelectorAll(".nav-link");
	links.forEach(link => { link.classList.remove('active') })

	element.classList.add('active');
}

const NavBar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark sticky-top">
				<div className="container-fluid">
					<a className="navbar-brand text-light" href="#">Start Bootstrap</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav ms-auto">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#" onClick={(e)=>addActive(e.target)}>Home</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#" onClick={(e)=>addActive(e.target)}>About</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#" onClick={(e)=>addActive(e.target)}>Services</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#" onClick={(e)=>addActive(e.target)}>Contact</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	)
}

export default NavBar;