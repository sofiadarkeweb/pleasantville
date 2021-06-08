import React from "react";
// import * as Tone from "tone";
import SoundLobby from "../media/soundtrack1.mp3";
import { Link } from "react-router-dom";
import postcard from "../media/postcard1.jpg";
import hotel from "../media/hotel_bkg2.jpg";

const Sound = new Audio({
	loop: true,
	volume: 1,
	src: [SoundLobby],
});

const Intro = () => {
	// window.onclick = async function makeNoise() {
	// 	//   //start up the audio machinery
	// 	//add eventlistener to button?
	// 	await Tone.start();

	// 	const distortion = new Tone.Distortion(0.5).toDestination();

	// 	const player = new Tone.Player({
	// 		url: SoundLobby,
	// 		loop: false,
	// 	}).connect(distortion);
	// 	player.volume.value = -30;

	// 	await Tone.loaded();
	// 	player.start();
	// };
	return (
		<div className="intro-page">
			<img src={hotel} alt="hotel front" className="hotel-bkg" />
			<div className="hello-card">
				<img className="postcard" src={postcard} alt="" />
				<div className="text-container">
					<p className="postcard-text">
						I’m here, Alex. I finally made it to Pleasantville. I’m going to
						find you. I’m at the Nohome hotel, the one from the post card. The
						lady behind the counter seems a bit strange, I get a weird vibe from
						this place, did you really stay here? <br />
						<br />I do feel a bit tired after the trip so hopefully I can get a
						good night's sleep as well. Remember how we always stayed in shitty
						little places and we had the best time, get a feeling this will be
						quite different… wonder if they do room service. I really miss you
						Alex...
					</p>

					<div className="the-address">
						<h3>The Hotel</h3>
						<p>Level 1</p>
						<br />
						<br />
						<Link
							className="start-game"
							to="/scene1"
							onClick={() => Sound.play()}
						>
							Enter here
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Intro;
