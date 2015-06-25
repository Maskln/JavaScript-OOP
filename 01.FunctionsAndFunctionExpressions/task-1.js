/* Task Description */
/* 
	Write a function that sums an array of numbers:
		numbers must be always of type Number
		returns `null` if the array is empty
		throws Error if the parameter is not passed (undefined)
		throws if any of the elements is not convertible to Number	

*/

function sum(numbers) {
	var i,
		n,
		result = 0,
		len = numbers.length;

	if(numbers.length === 0){
		return null;
	}

	for (i = 0; i < len; i+=1) {
		n = +numbers[i];
		if(isNaN(n)){
			throw new Error();
		}

		result += n;
	}

	return result;
}

module.exports = sum;