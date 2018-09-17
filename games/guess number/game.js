// загадать число
function random(min, max) {
	return Math.round(min + Math.random() * (max - min));
};

var number = random(1000, 9999);
console.log('Загадано', number);

// ​задавать вопрос до тех пор, пока не угадали
function guessNumber(){
	//​ запрос числа от пользователя
	var result = parseInt(prompt("Введите число:"));
	console.log('Введено пользователем', result);

	if ( !result || isNaN(result) ) {
		alert('Вы не ввели число!');
		guessNumber();
	} else if ( result > number ) {
		alert('Загаданное число меньше!');
		guessNumber();
	} else if ( result < number ) {
		alert('Загаданное число больше!');
		guessNumber();
	} else {
		alert('Вы победили!');
		window.location.reload();
	}
};

guessNumber();


