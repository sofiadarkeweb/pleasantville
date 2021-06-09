import React from "react";
import Face from "../media/face3.png";
import Bell from "../media/bell.png";
import Desk from "../media/desk.png";
import wallpaper from "../media/wallpaper1.jpg";
// import Sound from "../media/soundtrack1.mp3";
// import Sound2 from "../media/pleasantville.wav";
import Convo from "../components/Convo";
// import { useRef } from "react";
// import { Player } from "tone";

const Scene1 = () => {
	return (
		<div className="scene1">
			<div className="scene1-objects">
				<div className="poster-scene1">
					<p className="quote-number">#123</p>
					<h2 className="quote">
						“Today is the oldest you’ve ever been, and the youngest you’ll ever
						be again.”{" "}
					</h2>
				</div>
				<img
					className="bell"
					src={Bell}
					alt="the bell"
					style={{ cursor: "pointer" }}
				/>
				<img className="face" src={Face} alt="a face" />
				<span className="welcome-text-1">Welcome to</span>
				<span className="welcome-text">NoHome Hotel</span>
				<img className="desk" src={Desk} alt="desk" />
			</div>
			<Convo />
			<img src={wallpaper} alt="wallpaper" className="hotel-bkg" />
		</div>
	);
};

export default Scene1;
