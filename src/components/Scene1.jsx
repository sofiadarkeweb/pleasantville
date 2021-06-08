import React from "react";
import Face from "../media/face3.png";
import Bell from "../media/bell.png";
import Desk from "../media/desk.png";
import wallpaper from "../media/wallpaper1.jpg";
// import * as Tone from "tone";
// import SoundLobby from "../media/pleasantville.wav";

// import Key from "../media/key.png";
// import Speechbubble from "../Speechbubble";
// import SpeechAnswer from "../SpeechAnswer";
// import Ascenetest from "../components/Ascenetest";
import Convo from "../components/Convo";
import Scene2 from "../components/Scene2";
import { useState } from "react";

const Scene1 = () => {
	// window.onclick = async function makeNoise() {
	// 	//   //start up the audio machinery
	// 	//add eventlistener to button?
	// 	await Tone.start();

	// 	const distortion = new Tone.Distortion(0.5).toDestination();

	// 	const player = new Tone.Player({
	// 		url: SoundLobby,
	// 		loop: true,
	// 	}).connect(distortion);
	// 	player.volume.value = -25;

	// 	await Tone.loaded();
	// 	player.start();
	// };
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
				<span className="welcome-text">NoHome Motel</span>
				<img
					className="desk"
					src={Desk}
					alt="desk"
					style={{ cursor: "pointer" }}
				/>
			</div>
			<Convo />
			<img src={wallpaper} alt="wallpaper" className="hotel-bkg" />
		</div>
	);
};

export default Scene1;
