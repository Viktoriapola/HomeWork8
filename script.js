
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
];


let answers = [];

questions.forEach(function (item, index) {
    if (prompt(`${item.question} ?`) === item.answer) {
        answers.push(`Вопрос ${++index} Верно`);
    } else {
        answers.push(`Вопрос ${++index} Неверно`);
    };

});

let str = answers.join('\n');
alert(str);








//Задание 2

// let word = prompt("Введите слово","");
// let arrLetters = word.split('');
// let up = 0;
// let low = 0;

// arrLetters.forEach(function(item) {
//     if (item === item.toUpperCase()) {
//         up++;
//     } else {
//         low++;
//     };

// });

// console.log(arrLetters);
// alert(`Общее количество букв: ${word.length}
// Верхний регистр: ${up}
// Нижний регистр: ${low}`);





// Задание 3

// const dataTypes = [
//     false,
//     's',
//     0,
//     null,
//     undefined,
//     {},
//     [],
//     10n,
//     Symbol(),
//     () => {},
//    ];

//    dataTypes.forEach(function (item) {
//        console.log(`   Значение: ${item}
//        преобразование к числу: ${Number(item)}
//        преобразование к строке: ${String(item)}
//        преобразование к булеву: ${Boolean(item)}`);
//    });


























