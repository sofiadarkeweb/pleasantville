import React from "react";
import { useState } from "react";
import SpeechBubblePlayer from "./SpeechBubblePlayer";
import SpeechBubbleHotel from "./SpeechBubbleHotel";
import SpeechBubbleRiddle from "./SpeechBubbleRiddle";
import Key from "../media/key.png";
import { Link } from "react-router-dom";

const Convo = (props) => {
	const [convo, setConvo] = useState(0);
	const [showImage, setShowImage] = useState(false);
	const [showWrongAnswer, setShowWrongAnswer] = useState(null);

	const imageClicked = () => {
		console.log("clicked");
		return alert(
			"You've reached your next challenge! Now you'll have to find your room..."
		);
		// setIsScene2(true);
	};

	const linesWrongAnwer = [
		"Nah, not guite right",
		"Hm, ok but how old are you really?",
		"Tik, tok, tik, tok",
		"Is that a gray hair?",
	];
	const lines = [
		{ hotel: "Welcome stranger, what brings you to Nohome?", player: "" },
		{ hotel: "", player: "Hi... I'm looking for someone" },
		{
			hotel: "There has been someone here, both staying an not staying.",
			player: "",
		},
		{ hotel: "", player: "Oh, I'm looking for Alex. Has Alex been here?" },
		{
			hotel: "We have many rooms, and many keys. A room usally have a key.",
			player: "",
		},
		{
			hotel: "",
			player: `Yeah, I mean, I know that.`,
		},
		{
			hotel: "",
			player: `But Can you tell me which room I’m looking for? I would like to stay in that room.`,
		},
		{
			hotel:
				"Hmmmm, I do have a specific room. BUT for you to get the key I want you to answer this...",
			player: "",
		},
		{
			hotel: "What goes up but never comes down?",
			player: "",
		},
		{
			hotel: "",
			player: "",
			input: true,
		},
	];

	const moveFwd = () => {
		setConvo(convo + 1);
	};

	const checkAnswer = (answer) => {
		console.log(answer);
		if (answer === "age") {
			setShowImage(true);
			setShowWrongAnswer(null);
		} else {
			setShowWrongAnswer(
				linesWrongAnwer[Math.floor(Math.random() * linesWrongAnwer.length)]
			);
			setShowImage(false);
		}
	};

	return (
		<div>
			<SpeechBubbleHotel
				text={lines[convo].hotel}
				onClickButton={moveFwd}
				className="bubble"
			/>
			<SpeechBubblePlayer
				text={lines[convo].player}
				onClickButton={moveFwd}
				className="bubble2"
				prompt={lines[convo].input}
				onSubmit={checkAnswer}
			/>
			{showImage && (
				<div>
					<SpeechBubbleRiddle
						className="bubble"
						text="Good job! Here is the key to your room, good luck..."
						style={{ color: "blue" }}
					/>
					<Link to="/scene2">
						<img
							src={Key}
							className="key"
							alt="the key"
							onClick={() => imageClicked()}
							style={{ cursor: "pointer" }}
						/>
					</Link>
				</div>
			)}
			{showWrongAnswer && (
				<SpeechBubbleRiddle className="bubble" text={showWrongAnswer} />
			)}
		</div>
	);
};

export default Convo;

// for the last frames
//, input: false
