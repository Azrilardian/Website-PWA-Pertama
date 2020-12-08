const main = () => {
	if ("serviceWorker" in navigator) {
		navigator.serviceWorker
			.register("../service-worker.js")
			.then(() => console.log("Registration Succes!"))
			.catch((err) => console.log("Registration Failed!", err));
	}
};

export default main;
