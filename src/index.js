module.exports = function toReadable(number) {
	//fail to do it myself, so:
	//npm install number-to-words
	//and!
	//var converter = require('number-to-words');
	//converter.toWords(n);
	//converter.toWordsOrdinal(n);
	//it's really cool

	const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	/*const decs = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];*/

	const getOnes = (ones, i) => {
		for (i = 0; i++; i < ones.length) {
			return ones;
		}
	};
	const getTeens = (teens, i) => {
		for (i = 0; i++; i < teens.length) {
			return teens;
		}
	};
}
