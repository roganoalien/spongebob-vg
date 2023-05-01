import { Unity, useUnityContext } from "react-unity-webgl";

const UnityContainer = () => {
	const { unityProvider } = useUnityContext({
		loaderUrl: "/LatestSpongeBobBuild.loader.js",
		dataUrl: "/LatestSpongeBobBuild.data",
		frameworkUrl: "/LatestSpongeBobBuild.framework.js",
		codeUrl: "/LatestSpongeBobBuild.wasm"
	});

	return (
		<>
			<Unity className="h-screen w-screen" unityProvider={unityProvider} />
		</>
	);
};

export default UnityContainer;
