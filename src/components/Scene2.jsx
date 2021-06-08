import React from "react";
import door from "../media/door.png";
import SoundHall from "../media/atmo_hall_krejkrej.wav";
import hole1 from "../media/hole1.png";
import hole2 from "../media/hole2.png";
import hole3 from "../media/hole3.png";
import hole4 from "../media/hole4.png";
import hole5 from "../media/hole5.png";
import hole6 from "../media/hole6.png";
import hole7 from "../media/hole7.png";
import hole8 from "../media/hole8.png";
import hole9 from "../media/hole9.png";
import wallpaper from "../media/wallpaper2.jpg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Scene2 = () => {
	const [number, setNumber] = useState("012");
	const [firstKeyHole, setFirstKeyHole] = useState(true);
	const [keyHole, setKeyHole] = useState(false);
	const [keyHole1, setKeyHole1] = useState(false);
	const [keyHole2, setKeyHole2] = useState(false);
	const [keyHole3, setKeyHole3] = useState(false);
	const [clue, setClue] = useState(false);

	// const randomKeyHole = [hole1, hole2, hole3];
	useEffect(() => {
		const timer = setTimeout(() => {
			setClue(true);
			console.log("This will run after 3 second!");
		}, 180000);
		return () => clearTimeout(timer);
	}, []);

	const imageClicked = () => {
		console.log("clicked");
		return alert("You've reached your final challenge! Enter the room!");
	};

	function showKeyHole() {
		setNumber("123");
		setKeyHole(true);
		setKeyHole1(false);
		setKeyHole2(false);
		setKeyHole3(false);
		setFirstKeyHole(false);
		setClue(false);
	}

	function showKeyHoles1() {
		setKeyHole1(true);

		console.log("hey");
	}
	function showKeyHoles2() {
		setKeyHole2(true);
		alert("The more the merrier ey?");
		console.log("yay");
	}
	function showKeyHoles3() {
		setKeyHole3(true);
		alert("Do you really need more?");
	}

	function promt() {
		alert("TRY SOMETHING ELSE");
	}

	return (
		<div className="scene2">
			<img src={wallpaper} alt="wallpaper" className="hotel-bkg" />

			<div className="doors">
				{clue && <span className="Clue">What room number was it again?</span>}
				<div className="door1">
					<div className="numbers">122</div>
					<img className="door-img" src={door} alt="" />
				</div>
				<div className="door2">
					<div onClick={showKeyHole} className="numbers">
						{number}
					</div>
					{firstKeyHole && (
						<img
							onClick={showKeyHoles1}
							src={hole3}
							alt="first hole"
							className="first-hole"
							style={{ cursor: "pointer" }}
						/>
					)}
					{keyHole && (
						<Link to="/scene3">
							<img
								src={hole5}
								alt="the right hole"
								className="final-hole"
								style={{ cursor: "pointer" }}
								onClick={imageClicked}
							/>
						</Link>
					)}

					{keyHole1 && (
						<div className="key-holes-container">
							<img
								src={hole1}
								alt=""
								className="hole"
								onClick={showKeyHoles2}
							/>
							<img
								src={hole2}
								alt=""
								className="hole"
								onClick={showKeyHoles2}
							/>
							<img
								src={hole3}
								alt=""
								className="hole"
								onClick={showKeyHoles2}
							/>
							<img
								src={hole4}
								alt=""
								className="hole"
								onClick={showKeyHoles2}
							/>
						</div>
					)}
					{keyHole2 && (
						<div className="key-holes-container-2">
							<img
								src={hole6}
								alt=""
								className="hole-2"
								onClick={showKeyHoles3}
							/>
							<img
								src={hole7}
								alt=""
								className="hole-2"
								onClick={showKeyHoles3}
							/>
							<img
								src={hole8}
								alt=""
								className="hole-2"
								onClick={showKeyHoles3}
							/>
							<img
								src={hole9}
								alt=""
								className="hole-2"
								onClick={showKeyHoles3}
							/>
						</div>
					)}

					{keyHole3 && (
						<div className="key-holes-container-3">
							<img src={hole1} alt="" className="hole-3" onClick={promt} />
							<img src={hole5} alt="" className="hole-3" onClick={promt} />
						</div>
					)}

					<img className="door-img" src={door} alt="" />
				</div>
				<div className="door3">
					<div className="numbers">124</div>
					<img className="door-img" src={door} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Scene2;
