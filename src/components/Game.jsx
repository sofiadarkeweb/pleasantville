import React from "react";
import { useState } from "react";
import Intro from "./Intro";
import Scene1 from "./Scene1";
import Scene2 from "./Scene2";
import Scene3 from "./Scene3";
import { BrowserRouter, Route, Link } from "react-router-dom";
// import Ascenetest from "./components/Ascenetest";

const Game = () => {
	return (
		<div>
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<div className="App">
					<Route exact path="/" component={Intro} />
					<Route path="/scene1" component={Scene1} />
					<Route path="/scene2" component={Scene2} />
					<Route path="/scene3" component={Scene3} />
				</div>
			</BrowserRouter>
		</div>
	);
};

export default Game;
