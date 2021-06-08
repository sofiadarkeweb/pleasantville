import React from "react";
import Face from "../media/face3.png";
import Bell from "../media/bell.png";
import Desk from "../media/desk.png";
import wallpaper from "../media/wallpaper1.jpg";


import Convo from "../components/Convo";

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
