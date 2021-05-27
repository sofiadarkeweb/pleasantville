import React from "react";
// import { useState } from "react";
// import { BrowserRouter, Route, Link } from "react-router-dom";
import postcard from "../media/postcard1.jpg";

const Intro = () => {
	return (
		<div className="intro-page">
			<div className="hello-card">
				<img className="postcard" src={postcard} alt="" />
				<div className="text-container">
					<p className="postcard-text">
						I’m here, Alex. I finally made it to Pleasantville. I’m going to
						find you. I’m at the Nohome hotel, the one from the post card. The
						lady behind the counter seems a bit strange, I get a weird vibe from
						this place, did you really stay here? I do feel a bit tired after
						the trip so hopefully I can get a good night's sleep as well.
						Remember how we always stayed in shitty little places and we had the
						best time, get a feeling this will be quite different… wonder if
						they do room service. I really miss you Alex.
					</p>
					<div className="the-address">
						<h3>The Hotel</h3>
						<p>Level 1</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Intro;
