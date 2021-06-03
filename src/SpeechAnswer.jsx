import React from "react";
import { useState } from "react";
import Speechbubble from "./Speechbubble";
import Key from "../media/key.png";

const SpeechAnswer = (props2) => {
	const [isInput, setIsInput] = useState("");
	const [showImage, setShowImage] = useState(false);
	const [showWrongAnswer, setShowWrongAnswer] = useState(false);

	const imageClicked = () => {
		console.log("clicked");
		return alert("Yes");
		// setIsScene2(true);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (isInput === "age") {
			setShowImage(true);
		} else {
			setShowWrongAnswer(true);
		}
	};

	return (
		<div className="bubble-container">
			<div className={props2.className}>
				<p>{props2.text}</p>
				{/* <input type="text" value={props2.value} /> */}
				<form onSubmit={handleSubmit}>
					<label>
						{/* Answer: */}
						<input
							type="text"
							value={isInput}
							onChange={(e) => setIsInput(e.target.value)}
						/>
					</label>
					<input type="submit" value="Your answer?" />
				</form>
			</div>
			{showImage && (
				<img
					src={Key}
					className="key"
					alt="the key"
					onClick={() => imageClicked()}
					style={{ cursor: "pointer" }}
				/>
			)}

			{showWrongAnswer && (
				<Speechbubble className="bubble" text="Nah not right" />
			)}

			{console.log(isInput)}
		</div>
	);
};

export default SpeechAnswer;
