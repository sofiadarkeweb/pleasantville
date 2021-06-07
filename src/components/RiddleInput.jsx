import React from "react";
import { useState } from "react";

const RiddleInput = ({ text, prompt, onSubmit, onClickButton }) => {
	const [input, setInput] = useState("");
	return (
		<div>
			<form
				className="riddle-input"
				action=""
				onSubmit={(e) => {
					e.preventDefault();
					onSubmit(input);
				}}
			>
				<input
					className="input"
					value={input}
					onChange={(e) => {
						setInput(e.target.value);
					}}
					placeholder="what three words?"
				/>
			</form>
		</div>
	);
};

export default RiddleInput;
