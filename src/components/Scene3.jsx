import React from "react";
// import Ascenetest from "./Ascenetest";
import room from "../media/room.png";
import { useState } from "react";
import RiddleInput from "./RiddleInput";
import poster1 from "../media/poster1.jpg";
import poster2 from "../media/poster2.png";
import poster22 from "../media/poster2-2.png";
import poster3 from "../media/poster3.png";
import poster33 from "../media/poster3-2.png";
import poster4 from "../media/poster4.jpg";
import plant from "../media/plant.png";
import bed from "../media/bed.png";

const Scene3 = () => {
	const [showTextPoster, setTextPoster] = useState(
		"ever get that falling feeling? the sleeping fox catches no poultry."
	);

	const [showButtonNext, setShowButtonNext] = useState(false);
	const [isClicked, setIsClicked] = useState(false);

	const onClickButton = () => {
		if (isClicked === false) {
			setTextPoster(
				"ever get thAt falling feeLing? the sleEping foX catches no poultry."
			);
			setIsClicked(true);
		} else {
			setTextPoster(
				"ever get that falling feeling? the sleeping fox catches no poultry."
			);
			setIsClicked(false);
		}
	};

	const checkAnswer = (answer) => {
		var answerLower = answer.toLowerCase();
		console.log(answerLower);
		let nope = [
			"Is that three words?",
			"Have you looked around?",
			"Who do you think was here?",
			"sometimes letters can make up a word..",
		];

		if (answerLower === "alex was here") {
			setShowButtonNext(true);
			return alert(
				"Yes, Alex has been here... But now all of a sudden you feel very sleepy"
			);
		} else {
			return alert(nope[Math.floor(Math.random() * nope.length)]);
		}

		// if (answer.toLowercase.includes("alex was here")) {
		// 	alert("yes");
		// setShowImage(true);
		// setShowWrongAnswer(null);
		// } else {
		// 	alert("no");
		// setShowWrongAnswer(
		// 	linesWrongAnwer[Math.floor(Math.random() * linesWrongAnwer.length)]
		// );
		// setShowImage(false);
		// }
	};

	return (
		<div className="scene-3">
			{showButtonNext && (
				<button
					className="next-level-button"
					onClick={"window.parent.postMessage('nextLevel')"}
				>
					Next Level
				</button>
			)}
			<img src={poster1} alt="poster1" className="poster-1" />
			<img src={poster2} alt="poster2" className="poster-2" />
			<img src={poster22} alt="poster2" className="poster-2-2" />
			<img src={poster3} alt="poster3" className="poster-3" />
			<img src={poster33} alt="poster3" className="poster-3-3" />
			<img src={poster4} alt="poster4" className="poster-4" />
			<img src={plant} alt="poster4" className="plant" />
			<img src={bed} alt="poster4" className="bed" />

			<RiddleInput
				// prompt={input}
				// text={lines[convo].player}
				// onClickButton={moveFwd}
				// className="bubble2"
				onSubmit={checkAnswer}
			/>
			<div className="poster-scene3" onClick={onClickButton}>
				{/* <p className="quote-number">#123</p> */}
				<span className="quote-scene-3">{showTextPoster}</span>
			</div>
			<img src={room} alt="hotel room" className="hotel-bkg" />
			{/* <Ascenetest /> */}
		</div>
	);
};

export default Scene3;
