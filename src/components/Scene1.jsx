import React from "react";
import Face from "../media/face.png";
import Bell from "../media/bell.png";
import Desk from "../media/desk.png";
import Speechbubble from "../components/Speechbubble";
import SpeechAnswer from "../components/SpeechAnswer";
import { useState } from "react";

const Scene1 = (props, props2) => {
	// const [isFirst, setIsFirst] = useState(true);
	const [isNext, setIsNext] = useState(false);
	const [isNext2, setIsNext2] = useState(false);
	const [isNext3, setIsNext3] = useState(false);
	const [isAnswer, setIsAnswer] = useState(false);

	// function isRiddleCorrect(props2) {
	// 	const riddleAnswer = props2.value;
	// 	if (riddleAnswer === "age")
	// 	return <p>Hej</p>

	// }

	//setText
	//functionen next som blir on click

	return (
		<div className="scene1">
			<Speechbubble
				className="bubble"
				text="Welcome stranger, what brings you to Nohome?"
				onClick={() => setIsNext(true)}
				// removePrev={() => setIsFirst(false)}
			/>

			{isNext && (
				<Speechbubble
					className="bubble2"
					text="I'm looking for someone"
					onClick={() => setIsNext2(true)}
					// removePrev={() => setIsFirst(false)}
				/>
			)}
			{isNext2 && (
				<Speechbubble
					className="bubble"
					text="I have reason to believe that they stayed in a specific room."
					onClick={() => setIsNext3(true)}
				/>
			)}
			{isNext3 && (
				<Speechbubble
					className="bubble"
					text="I do have a specific room. But for you to get the key I want you to answer this. What goes up but never comes down?"
					onClick={() => setIsAnswer(true)}
				/>
			)}

			{/* if value is Age then return ... key */}

			{isAnswer && (
				<SpeechAnswer text="Write here" className="bubble2" value="age" />
			)}

			<img className="bell" src={Bell} alt="the bell" />
			<img src={Face} alt="a face" />
			<img src={Desk} alt="a face" />
		</div>
	);
};

export default Scene1;
