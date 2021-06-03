import React from "react";

const SpeechBubbleHotel = ({ text, onClickButton, className }) => {
	return (
		<div>
			{text && (
				<div className="bubble-container">
					<div className={className}>
						<p className="small-title">Concergie</p>
						<p>{text}</p>
						<button className="next-btn" onClick={onClickButton}>
							next
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default SpeechBubbleHotel;
