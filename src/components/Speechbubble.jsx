import React from "react";

const Speechbubble = (props) => {
	return (
		<div className="bubble-container">
			<div className={props.className}>
				<p>{props.text}</p>
				<button onClick={props.onClick} removePrev={props.removePrev}>
					next
				</button>
			</div>
		</div>
	);
};

export default Speechbubble;
