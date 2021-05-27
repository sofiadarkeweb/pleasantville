import React from "react";
import { useState } from "react";
import Intro from "./Intro";
import Scene1 from "./Scene1";
// import Ascenetest from "./components/Ascenetest";

const Game = () => {
	const [isClicked, setIsClicked] = useState(true);
	return (
		<div>
			{isClicked ? <Intro /> : <Scene1 />}
			{isClicked && (
				<div className="play-container">
					<button className="play-btn" onClick={() => setIsClicked(false)}>
						Play
					</button>
				</div>
			)}
		</div>
	);
};

export default Game;
