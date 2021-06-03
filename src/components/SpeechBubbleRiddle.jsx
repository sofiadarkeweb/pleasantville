import React from "react";

const SpeechBubbleRiddle = ({ text, className }) => {
	return (
		<div>
			{text && (
				<div className="bubble-container">
					<div className={className}>
						<p>{text}</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default SpeechBubbleRiddle;
