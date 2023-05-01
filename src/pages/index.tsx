import { useState } from "react";
import { Inter } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";
import VideoContainer from "components/VideoContainer";
import UnityContainer from "components/UnityContainer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const [showVideo, setShowVideo] = useState<boolean>(true);
	return (
		<div className="relative h-screen w-screen bg-gray-800">
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
		</div>
	);
}
