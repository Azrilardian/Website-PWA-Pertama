import "./css/style.css";
import main from "./js/main";

// Servie Workers Registration
if ("serviceWorker" in navigator) {
	navigator.serviceWorker
		.register("service-worker.js")
		.then(function (registration) {
			console.log("Registered:", registration);
		})
		.catch(function (error) {
			console.log("Registration failed: ", error);
		});
}

document.addEventListener("DOMContentLoaded", main);
