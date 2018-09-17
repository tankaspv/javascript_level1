// Первое: 
// Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, 
// в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
// Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

function transformNumber (number) {
    var tNum = {
        units: Math.floor(this.number % 10),
        decade: Math.floor(this.number / 10 % 10),
        hundreds: Math.floor(this.number / 100 % 10)
    };
    return tNum;
};


var number = prompt("Введите число от 0 до 999");

if ( (number < 0) || (number > 999) ) {
    console.log("Введенное число не попадает в заданный диапазон");
    alert(transformNumber(number));
} else {
    console.log(transformNumber(number));
};
