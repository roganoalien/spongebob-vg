import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";
import VideoContainer from "components/VideoContainer";
import UnityContainer from "components/UnityContainer";
import Fullscreen from "react-fullscreen-crossbrowser";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const [showVideo, setShowVideo] = useState<boolean>(true);
	const [fullscreen, setFullscreen] = useState<boolean>(false);

	return (
		<div className="relative h-screen w-screen bg-gray-800">
			{!fullscreen ? (
				<button
					type="button"
					className="absolute left-0 top-0 z-1000 bg-white"
					onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
						event.preventDefault();
						setFullscreen(true);
					}}
				>
					Go FullScreen
				</button>
			) : null}
			<Fullscreen enabled={fullscreen} onChange={(isFull) => setFullscreen(isFull)}>
				<AnimatePresence mode="wait">
					{showVideo ? (
						<motion.div
							key="video-container-component"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							{/* <MainVideo handleClick={() => setShowVideo(false)} /> */}
							<VideoContainer handleClick={() => setShowVideo(false)} />
						</motion.div>
					) : (
						<motion.div
							key="game-container-component"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							{/* <UnityHolder /> */}
							<UnityContainer />
						</motion.div>
					)}
				</AnimatePresence>
			</Fullscreen>
		</div>
	);
}
