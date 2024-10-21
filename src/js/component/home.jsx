import React from "react";
import NavBar from './navbar.jsx'
import JumboTron from "./jumbotron.jsx";
import '../../styles/index.css'
import bootstrap from 'bootstrap'


//create your first component
const Home = () => {
	return (
		<>
			<NavBar />
			<JumboTron/>
		</>
		
	);
};

export default Home;
