import React from "react";
import { useState } from "react";
import Speechbubble from "./Speechbubble";
import Key from "../media/postcard2.jpg";

const SpeechAnswer = (props2) => {
	const [isInput, setIsInput] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		if (isInput === "age") {
			return alert(`Yes ${isInput} is correct `);
		} else {
			return alert(`${isInput} is wrong, how old are you?`);
			// return <Speechbubble text="Nah not right" />;
			// 	return <img src={Key} alt="" />;
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
				{/* <button onClick={props2.onClick} removePrev={props2.removePrev}>
					Your answer?
				</button> */}
			</div>
			{console.log(isInput)}
		</div>
	);
};

export default SpeechAnswer;
