import { useRouter } from "next/router";
import { useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const UnityContainer = () => {
	const router = useRouter();
	const { unityProvider } = useUnityContext({
		loaderUrl: "/SpongeBobMayV.loader.js",
		dataUrl: "/SpongeBobMayV.data",
		frameworkUrl: "/SpongeBobMayV.framework.js",
		codeUrl: "/SpongeBobMayV.wasm"
	});

	useEffect(() => {
		let counter = 0;

		const theInterval = setInterval(() => {
			counter += 1;
			if (counter === 30) {
				router.reload();
				clearInterval(theInterval);
			}
		}, 1000);
	}, [router]);

	return (
		<>
			<Unity className="h-screen w-screen" unityProvider={unityProvider} />
		</>
	);
};

export default UnityContainer;
