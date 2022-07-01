function tournamentWinner(competitions, results) {
  // Write your code here.
	let hash = {}
	for (let i = 0; i < competitions.length; i++) {
		let competition = competitions[i];
		let result = results[i];

		if (result === 0) {
		let winner = competition[1]
		let loser = competition[0]

			if (!hash[winner]) {
				hash[winner] = 3
			} else hash[winner] += 3

			if (!hash[loser]) {
				hash[loser] = 0
			}
		}

		if (result === 1) {
		let winner = competition[0]
		let loser = competition[1]

			if (!hash[winner]) {
				hash[winner] = 3
			} else hash[winner] += 3

			if (!hash[loser]) {
				hash[loser] = 0
			}
		}
	}
	let max = '';
	let maxValue = 0;
	for (let key in hash) {
		if (hash[key] > maxValue) {
			max = key
			maxValue = hash[key]
		}
	}

  return max;
}




function twoNumberSum(array, targetSum) {
  // Write your code here.

  // create an empty array to return
  // create a nested loop for the array to see if any two indices reach the targetSum

  let answer = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if(array[i] + array[j] === targetSum) {
        answer.push(array[i])
        answer.push(array[j])
      }
    }
  }
  return answer;
}

