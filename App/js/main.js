const main = () => {
	// Servie Workers Registration
	if ("serviceWorker" in navigator) {
		navigator.serviceWorker
			.register("/service-worker.js")
			.then(() => console.log("Succes!"))
			.catch((err) => console.log("Failed!", err));
	}
};

export default main;
