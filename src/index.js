module.exports = function toReadable(number) {
	//fail to do it myself, so:
	//npm install number-to-words
	//and!
	//var converter = require('number-to-words');
	//converter.toWords(n);
	//converter.toWordsOrdinal(n);
	//it's really cool

	const ones = [
		//"zero",
		"one",
		"two",
		"three",
		"four",
		"five",
		"six",
		"seven",
		"eight",
		"nine"
	];
	const teens = [
		"ten",
		"eleven",
		"twelve",
		"thirteen",
		"fourteen",
		"fifteen",
		"sixteen",
		"seventeen",
		"eighteen",
		"nineteen"
	];
	const decs = [
		"twenty",
		"thirty",
		"forty",
		"fifty",
		"sixty",
		"seventy",
		"eighty",
		"ninety"
	];
	const huns = ["hundred"];

	const getOnes = ones => {
		for (let i = 0; i++; i < ones.length) {
			console.log(`${ones[i]}\n`);
		}
	};


	const getTeens = teens => {
		for (let j = 0; j++; j < teens.length) {
			console.log(`${teens[j]}\n`);
		}
	};

	const getDecs = decs => {
		for (let n = 0; n++; n < decs.length) {
			console.log(`${decs[n]}\n`);
		}
	};

	const getHuns = (`${getOnes}, hundred`);
	console.log(getHuns);

	return number;
}
