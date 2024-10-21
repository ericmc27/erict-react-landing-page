import React from "react";
import NavBar from './navbar.jsx'
import JumboTron from "./jumbotron.jsx";
import Card from './card.jsx'
import Footer from './footer.jsx'
import '../../styles/index.css'
import bootstrap from 'bootstrap'


//create your first component
const Home = () => {
	return (
		<>
			<NavBar />
			<JumboTron/>
			<div className="d-flex" style={{marginLeft:"150px"}}>
				<Card
				title="Card 1"
				content="
In a quiet village, Whiskers the cat found a hidden garden. He discovered an ivy-covered door, which creaked open to a world where dreams met reality. What adventures awaited?"
				/>
				<Card 
				title="Card 2"
				content="In a bustling market, a young girl stumbled upon an old, dusty book. As she opened it, colorful illustrations danced off the pages, pulling her into a magical realm where stories came to life."/>
				<Card 
				title="Card 3"
				content="On a foggy morning, a traveler found a forgotten lighthouse. The door creaked open to reveal a spiral staircase leading to hidden treasures of light and stories. What secrets awaited at the top?"/>
				<Card
				title="Card 4"
				content="In a sleepy town, a mysterious music box appeared. When played, it transported listeners to a dreamlike world of shimmering stars and enchanting melodies. What magic awaited them?"/>
			</div>
			<Footer/>
		</>

	);
};

export default Home;
