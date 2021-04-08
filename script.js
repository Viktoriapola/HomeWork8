
const questions = [
    {
        question: 'Кто виноват в том  что вся планета болеет коронавирусом',
        answer: 'Китайцы',
    },
    {
        question: 'Назовите фамилию создателя периодической системы химических элементов',
        answer: 'Менделеев',
    },
    {
        question: 'Назовите фамилию одного из авторов теории относительности',
        answer: 'Эйнштейн',
    },
    {
        question: 'Назовите столицу Германии',
        answer: 'Берлин',
    },
    {
        question: 'Сколько президентов было у Республики Беларусь',
        answer: '1',
    },
    {
        question: 'Назовите единственный спутник планеты Земля',
        answer: 'Луна',
    },
    {
        question: 'Сколько дней в високосном году',
        answer: '366',
    },
    {
        question: 'Фамилия автора картины "Утро в сосновом лесу"',
        answer: 'Шишкин',
    },
    {
        question: 'Как зовут знаменитого португальского футболиста Роналду',
        answer: 'Криштиану',
    },
    {
        question: 'Фамилия первого человека побывавшего на Луне',
        answer: 'Армстронг',
    },
]

let answers = [];


const question1 = prompt(`${questions[0].question} ?`);
if (question1 === questions[0].answer || question1 === questions[0].answer.toLowerCase()) {
    answers.push("Верно");
} else {
    answers.push("Неверно");
};

const question2 = prompt(`${questions[1].question} ?`);
if (question2 === questions[1].answer || question2 === questions[1].answer.toLowerCase()) {
    answers.push("Верно");
} else {
    answers.push("Неверно");
};

const question3 = prompt(`${questions[2].question} ?`);
if (question3 === questions[2].answer || question3 === questions[2].answer.toLowerCase()) {
    answers.push("Верно");
} else {
    answers.push("Неверно");
};

const question4 = prompt(`${questions[3].question} ?`);
if (question4 === questions[3].answer || question4 === questions[3].answer.toLowerCase()) {
    answers.push("Верно");
} else {
    answers.push("Неверно");
};

const question5 = prompt(`${questions[4].question} ?`);
if (question5 === questions[4].answer || question5 === questions[4].answer.toLowerCase()) {
    answers.push("Верно");
} else {
    answers.push("Неверно");
};

const question6 = prompt(`${questions[5].question} ?`);
if (question6 === questions[5].answer || question6 === questions[5].answer.toLowerCase()) {
    answers.push("Верно");
} else {
    answers.push("Неверно");
};

const question7 = prompt(`${questions[6].question} ?`);
if (question7 === questions[6].answer || question7 === questions[6].answer.toLowerCase()) {
    answers.push("Верно");
} else {
    answers.push("Неверно");
};

const question8 = prompt(`${questions[7].question} ?`);
if (question8 === questions[7].answer || question8 === questions[7].answer.toLowerCase()) {
    answers.push("Верно");
} else {
    answers.push("Неверно");
};

const question9 = prompt(`${questions[8].question} ?`);
if (question9 === questions[8].answer || question9 === questions[8].answer.toLowerCase()) {
    answers.push("Верно");
} else {
    answers.push("Неверно");
};

const question10 = prompt(`${questions[9].question} ?`);
if (question10 === questions[9].answer || question10 === questions[9].answer.toLowerCase()) {
    answers.push("Верно");
} else {
    answers.push("Неверно");
};


alert(`вопрос 1 - ${answers[0]}
вопрос 2 - ${answers[1]}
вопрос 3 - ${answers[2]}
вопрос 4 - ${answers[3]}
вопрос 5 - ${answers[4]}
вопрос 6 - ${answers[5]}
вопрос 7 - ${answers[6]}
вопрос 8 - ${answers[7]}
вопрос 9 - ${answers[8]}
вопрос 10 - ${answers[9]}`)





//Задание 2

let word = prompt("Введите слово","");
let arrLetters = word.split('');
let up = 0;
let low = 0;

arrLetters.forEach(function(itam) {
    if (itam === itam.toUpperCase()) {
        up++;
    } else {
        low++;
    };

});

console.log(arrLetters);
alert(`Общее количество букв: ${word.length}
Верхний регистр: ${up}
Нижний регистр: ${low}`);





//Задание 3

const dataTypes = [
    false,
    's',
    0,
    null,
    undefined,
    {},
    [],
    10n,
    Symbol(),
    () => {},
   ]

   console.log(`   Значение: ${dataTypes[0]}
   преобразование к числу: ${Number(dataTypes[0])}
   преобразование к строке: ${String(dataTypes[0])}
   преобразование к булеву: ${Boolean(dataTypes[0])}`);

   console.log(`   Значение: ${dataTypes[1]}
   преобразование к числу: ${Number(dataTypes[1])}
   преобразование к строке: ${String(dataTypes[1])}
   преобразование к булеву: ${Boolean(dataTypes[1])}`);

   console.log(`   Значение: ${dataTypes[2]}
   преобразование к числу: ${Number(dataTypes[2])}
   преобразование к строке: ${String(dataTypes[2])}
   преобразование к булеву: ${Boolean(dataTypes[2])}`);

   console.log(`   Значение: ${dataTypes[3]}
   преобразование к числу: ${Number(dataTypes[3])}
   преобразование к строке: ${String(dataTypes[3])}
   преобразование к булеву: ${Boolean(dataTypes[3])}`);

   console.log(`   Значение: ${dataTypes[4]}
   преобразование к числу: ${Number(dataTypes[4])}
   преобразование к строке: ${String(dataTypes[4])}
   преобразование к булеву: ${Boolean(dataTypes[4])}`);

   console.log(`   Значение: ${dataTypes[5]}
   преобразование к числу: ${Number(dataTypes[5])}
   преобразование к строке: ${String(dataTypes[5])}
   преобразование к булеву: ${Boolean(dataTypes[5])}`);

   console.log(`   Значение: ${dataTypes[6]}
   преобразование к числу: ${Number(dataTypes[6])}
   преобразование к строке: ${String(dataTypes[6])}
   преобразование к булеву: ${Boolean(dataTypes[6])}`);

   console.log(`   Значение: ${dataTypes[7]}
   преобразование к числу: ${Number(dataTypes[7])}
   преобразование к строке: ${String(dataTypes[7])}
   преобразование к булеву: ${Boolean(dataTypes[7])}`);

//    console.log(`   Значение: ${dataTypes[8]}
//    преобразование к числу: ${Number(dataTypes[8])}
//    преобразование к строке: ${String(dataTypes[8])}
//    преобразование к булеву: ${Boolean(dataTypes[8])}`);

   console.log(`   Значение: ${dataTypes[9]}
   преобразование к числу: ${Number(dataTypes[9])}
   преобразование к строке: ${String(dataTypes[9])}
   преобразование к булеву: ${Boolean(dataTypes[9])}`);














