import { useRouter } from "next/router";
import { useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const fileName = "SpongeBobMay7Build";

const UnityContainer = () => {
	const router = useRouter();
	const { unityProvider } = useUnityContext({
		loaderUrl: `/${fileName}.loader.js`,
		dataUrl: `/${fileName}.data`,
		frameworkUrl: `/${fileName}.framework.js`,
		codeUrl: `/${fileName}.wasm`
	});

	useEffect(() => {
		let counter = 0;

		const theInterval = setInterval(() => {
			counter += 1;
			if (counter === 45) {
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
