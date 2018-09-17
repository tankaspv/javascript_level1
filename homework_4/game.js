console.log('game.js');
var config = [{
		id: 1,
		question: "Как правильно закончить пословицу: «Не откладывай на завтра то, что можно…»?",
		answers: {
			A: 'сделать сегодня',
			B: 'сделать послезавтра',
			C: 'сделать через месяц',
			D: 'никогда не делать'
		},
		answer: 'A'
	}, {
		id: 2,
		question: "Что говорит человек, когда замечает нечто необычное?",
		answers: {
			A: 'попало в лоб',
			B: 'залетело в рот',
			C: 'накапало в уши',
			D: 'бросилось в глаза'
		},
		answer: 'D'
	}, {
		id: 3,
		question: "Что помогает туристу ориентироваться в незнакомом городе?",
		answers: {
			A: 'путепровод',
			B: 'путеукладчик',
			C: 'путеводитель',
			D: 'путеводная звезда'
		},
		answer: 'C'
	}
];

var game = {
	isRunning: false,
	questions: [],
	question: 0,
	exit: function(status){
		this.isRunning = false;
		var message = status ? 'Победа!' : 'Поражение';
		alert(message);
	},
	getQuestion: function(){
		if ( this.questions[this.question] ) {
			return this.questions[this.question]
		}
		return false;
	},
	askQuestion: function(question){
		// задать новый вопрос - предложить варианты ответов
		var message = question.question + "\n";

		for ( var answer in question.answers ) {
			message += answer + ' ' + question.answers[answer] + "\n";
		}

		return prompt(message);
	},
	parseAnswer: function(answer){
		var possible = ['A', 'B', 'C', 'D'];
		return possible.indexOf(answer) !== -1;
	},
	checkAnswer: function(question, answer){
		return question.answer == answer;
	},
	run: function(config){
		this.isRunning = true;
		this.questions = config;
		var question, answer;

		// пока "игра не завершена"
		while ( this.isRunning ) {
			// получить новый вопрос
			question = this.getQuestion();
			// если вопрос есть
			if ( question ) {
				++this.question;
				answer = false;

				// пока не получен валидный ответ (A, B, C или D)
				while ( !answer ) {
					// задать новый вопрос - предложить варианты ответов
					answer = this.askQuestion(question);

					// прочитать ответ пользователя
					if ( !this.parseAnswer(answer) ) {
						answer = false;
						continue;
					}
				}

				// проверяем правильный ли ответ
				var isCorrectAnswer = this.checkAnswer(question, answer);

				// если ответ правильный
				if ( !isCorrectAnswer ) {
					// если ответ неправильный
					// выход из игры - поражение
					this.exit(false);
				}
			} else {
				// если вопроса нет
				// выход из игры - победа
				this.exit(true);
			}
		}
	}
};

game.run(config);

