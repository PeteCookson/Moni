//XMLHttpRequest
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://coingecko.p.rapidapi.com/simple/price?ids=bitcoin%2Cethereum%2Cbinancecoin%2Ccardano%2Csolana%2Cterra-luna&vs_currencies=usd");
xhr.setRequestHeader("x-rapidapi-host", "coingecko.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "9ae53a8be6mshf827c303426ca2dp146e7bjsn70824c93656a");

xhr.send(data);

//jQuery
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://coingecko.p.rapidapi.com/simple/price?ids=bitcoin%2Cethereum%2Cbinancecoin%2Ccardano%2Csolana%2Cterra-luna&vs_currencies=usd",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coingecko.p.rapidapi.com",
		"x-rapidapi-key": "9ae53a8be6mshf827c303426ca2dp146e7bjsn70824c93656a"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});