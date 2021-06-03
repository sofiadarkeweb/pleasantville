import React from "react";

const Speechbubble = (props) => {
	return (
		<div className="bubble-container">
			<div className={props.className}>
				<p>{props.text}</p>
				<button className="next-btn" onClick={props.onClick}>
					next
				</button>
			</div>
		</div>
	);
};

export default Speechbubble;
