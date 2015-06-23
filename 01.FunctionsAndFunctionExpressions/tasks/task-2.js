/* Task description */
/*
	Write a function that finds all the prime numbers in a range
		1) it should return the prime numbers in an array
		2) it must throw an Error if any on the range params is not convertible to `Number`
		3) it must throw an Error if any of the range params is missing
*/

function findPrimes(start, end) {

	var i,
		isPrime,
		div,
		maxDivisor,
		primes = [];

	start = +start;
	end = +end;

	if(!(arguments.length) || arguments.length < 2) {
		throw new Error();
	}

	for (i = start; i <= end; i+=1) {
		maxDivisor = Math.sqrt(i);
		isPrime = true;
		for (div = 2; div <= maxDivisor; div+=1) {
			if(!(i % div)){
				isPrime = false;
				break;
			}
		}
		if(isPrime && i > 1) {
			primes.push(i);
		}
	}
	return primes;
}

module.exports = findPrimes;
