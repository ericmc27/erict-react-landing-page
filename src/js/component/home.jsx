import React from "react";
import NavBar from './navbar.jsx'
import JumboTron from "./jumbotron.jsx";
import Card from './card.jsx'
import '../../styles/index.css'
import bootstrap from 'bootstrap'


//create your first component
const Home = () => {
	return (
		<>
			<NavBar />
			<JumboTron/>
			<div className="d-flex">
				<Card/>
				<Card className="no-margin"/>
				<Card/>
				<Card/>
			</div>
			
		</>
		
	);
};

export default Home;
