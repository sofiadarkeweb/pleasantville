import React, { useState } from "react";

const SpeechBubblePlayer = ({
	text,
	prompt,
	onSubmit,
	onClickButton,
	className,
}) => {
	const [input, setInput] = useState("");
	console.log(text);
	return (
		<div>
			{text && (
				<div className="bubble-container">
					<div className={className}>
						<p className="small-title">You</p>
						<p>{text}</p>
						<button className="next-btn" onClick={onClickButton}>
							next
						</button>
					</div>
				</div>
			)}
			{prompt && (
				<div className="bubble-container">
					<form
						className={className}
						onSubmit={(e) => {
							e.preventDefault();
							onSubmit(input);
						}}
					>
						<label for="question" className="question">
							What goes up but never comes down?...
						</label>
						<input
							className="input"
							value={input}
							onChange={(e) => {
								setInput(e.target.value);
							}}
						/>
						<input className="next-btn" type="submit" value="Answer" />
					</form>
				</div>
			)}
		</div>
	);
};

export default SpeechBubblePlayer;

/* { props.input ? } */
