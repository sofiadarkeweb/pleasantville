import React from "react";
// import * as Tone from "tone";

import { Link } from "react-router-dom";
import postcard from "../media/postcard1.jpg";
import hotel from "../media/hotel_bkg2.jpg";
import { useRef } from "react";
import { Player } from "tone";
import Sound from "../media/soundtrack2.mp3";
import { useEffect, useState } from "react";

const Intro = () => {
	const [loop, setLoop] = useState(true);
	const playerRef = useRef(null);
	playerRef.current = new Player(Sound).toDestination();

	const play = () => {
		playerRef.current.start();
		setLoop(!loop);
	};

	useEffect(() => {
		playerRef.current.loop = loop;
	}, [loop]);

	// const stop = () => {
	// 	playerRef.current.stop();
	// };

	return (
		<div className="intro-page">
			{/* <SoundBackground /> */}
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
						<Link className="start-game" to="/scene1" onClick={play}>
							Enter here
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Intro;
