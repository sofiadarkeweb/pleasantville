import React from "react";
import { useEffect, useRef, useState } from "react";
import { Player } from "tone";
import Sound from "../media/soundtrack1.mp3";

const SoundBackground1 = () => {
	console.log("body");
	const [value, setValue] = useState(0);
	const [loop, setLoop] = useState(false);

	const playerRef = useRef(null);
	playerRef.current = new Player(Sound).toDestination();

	useEffect(() => {
		console.log("useEffect");
		console.log(playerRef.current.volume);
		playerRef.current.loop = loop;
	}, [loop, value]);

	const play = () => {
		playerRef.current.start();
	};

	const stop = () => {
		playerRef.current.stop();
	};

	const loopToggle = () => {
		//   console.log('loop')
		setLoop(!loop);
	};

	return (
		<div>
			<button onClick={play}>Play</button>
			<button onClick={stop}>Stop</button>
		</div>
	);
};

export default SoundBackground1;
