// 1234
// 6531
// 1 корова - угадали цифру - но не угадали позицию
// 1 бык - угадали и цифру и позицию


function random(min, max) {
	return Math.round(min + Math.random() * (max - min));
};

// загадать число
function generateNumber(){
	var result = [];
	var pool = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

	for ( var index, i = 0; i < 4; i++ ) {
		index = random(0, pool.length - 1);
		result.push(pool[index]);
		pool.splice(index, 1);
	}

	return result;
};


function checkNumber(result, number){
	var answer = [0, 0]; // 1й элемент - были, 2й - коровы

	result = result.split(""); // массив чисел, полученный из числа, которое ввел игрок
	// number - это массив чисел, символизирующий загаданное число

	for ( var val, i = 0; i < result.length; i++ ) {
		val = parseInt(result[i]);

		if ( val == number[i] ) {
			// бык
			++answer[0];
		} else if ( number.indexOf(val) !== -1 ) {
			// корова
			++answer[1];
		}
	}


	return answer;
};

var gameIsRunning = true;
var result, message = '';
var number = generateNumber();
console.log('Загадано', number);

while (gameIsRunning) {
	// ​задавать вопрос до тех пор, пока не угадали
	result = prompt(message + " Введите число:");

	if ( parseInt(result) == -1 ) {
		gameIsRunning = false;
	} else {
		if ( !result || isNaN(result) ) {
			alert('Вы не ввели число!');
		} else {
			var answer = checkNumber(result, number);

			if ( answer[0] == number.length ) {
				alert('Вы угадали число!');
				gameIsRunning = false;
			} else {
				message = 'Быков: ' + answer[0] + ' Коров: ' + answer[1];
			}
		}
	}
}
