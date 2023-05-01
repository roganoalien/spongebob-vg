import Image from "next/image";

interface IVideoContainer {
	handleClick: () => void;
}

const VideoContainer = ({ handleClick }: IVideoContainer) => {
	return (
		<div className="absolute left-0 top-0 z-0 h-screen w-screen">
			<button
				onClick={handleClick}
				type="button"
				className="fixed bottom-16 left-1/2 z-999 -translate-x-1/2 scale-75 drop-shadow-2xl"
			>
				<Image
					alt="Da click para jugar!"
					height={232.5}
					src="/click_2_play.png"
					width={375}
				/>
			</button>
			<video
				className="absolute left-1/2 top-1/2 z-10 h-auto min-h-full w-auto min-w-full max-w-none -translate-x-1/2 -translate-y-1/2"
				autoPlay
				muted
				loop
				playsInline
			>
				<source src="/video.mp4" type="video/mp4" />
			</video>
		</div>
	);
};

export default VideoContainer;
