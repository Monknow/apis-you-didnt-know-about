import "./style.css";

const video = document.querySelector("#video");
const broadcast = new BroadcastChannel("quote_channel");

document.addEventListener("visibilitychange", () => {
	if (document.visibilityState === "visible") {
		video.play();
	} else {
		video.pause();
	}
});

const formatDate = (dateString) => {
	const date = new Date(dateString);
	const locale = navigator.language;
	const dateTimeFormat = new Intl.DateTimeFormat(locale, {timeZone: "UTC"});

	return dateTimeFormat.format(date);
};

const quote = document.querySelector("#quote");

const getQuote = async () => {
	if (document.visibilityState === "visible") {
		try {
			const response = await fetch("https://api.quotable.io/random");
			const {content, author, dateAdded} = await response.json();
			const parsedQuote = `
			<span>${content}</span> 
			<span>- ${author} Added on ${formatDate(dateAdded)}</span>`;
			quote.innerHTML = parsedQuote;
			broadcast.postMessage(parsedQuote);
		} catch (error) {
			console.error(error);
		}
	}
};

getQuote();

setInterval(getQuote, 10000);

const shareButton = document.querySelector("#share-button");

const shareQuote = async (shareData) => {
	try {
		await navigator.share(shareData);
	} catch (error) {
		console.error(error);
	}
};

shareButton.addEventListener("click", () => {
	let shareData = {
		title: "A Beautiful Quote",
		text: quote.textContent,
		url: location.href,
	};

	shareQuote(shareData);
});
