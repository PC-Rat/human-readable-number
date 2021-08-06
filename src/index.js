module.exports = function toReadable (number) {
    //var converter = require('number-to-words');
	//converter.toWords(n);
	//converter.toWordsOrdinal(n);
	const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	/*const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	const decs = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];*/

	const readOnes = (ones, i) => {
		for (i = 0; i++; i < ones.length) {
			return console.log(ones[i]);
		}
	};
	return s;
}
