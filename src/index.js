module.exports = function toReadable(number) {
	//fail to do it myself, so:
	//npm install number-to-words
	//and!
	//var converter = require('number-to-words');
	//converter.toWords(n);
	//converter.toWordsOrdinal(n);
	//it's really cool

	const huns = ["hundred"];

	number = number.toString();
	const numberSplit = number.split('');
	number = number.replace(/[\, ]/g, '');

	const wordsResult = [];

	const matrix = [
		[
			" zero",
			" one",
			" two",
			" three",
			" four",
			" five",
			" six",
			" seven",
			" eight",
			" nine"
		],
		[
			" ten",
			" eleven",
			" twelve",
			" thirteen",
			" fourteen",
			" fifteen",
			" sixteen",
			" seventeen",
			" eighteen",
			" nineteen"
		],
		[
			" twenty",
			" thirty",
			" forty",
			" fifty",
			" sixty",
			" seventy",
			" eighty",
			" ninety"
		]
	];
	for (let i = 0; i < matrix.length; i++) {
		let res = '';
		let row = '';

		for (let j = 0; j < matrix[0].length; j++) {
			res += matrix[0][j];
		}

		for (let k = 0; k < matrix[1].length; k++) {
			res += matrix[1][k];
		}

		for (let n = 0; n < matrix[2].length; n++) {
			res += matrix[2][n];

			row += matrix[2][n] + matrix[0][i];
		}

		wordsResult.push(res, row);
	}

	return (`${number},  ${wordsResult}\n`);
}
