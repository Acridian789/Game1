let a = parseInt(prompt('Минимальное знание числа для игры','0'));
let b = parseInt(prompt('Максимальное знание числа для игры','100'));
a = a || 0;
b = b || 100;
a = (a < -999) ? -999 : (a > 999) ? 999 : a;
b = (b < -999) ? -999 : (b > 999) ? 999 : b;
let minValue;
let maxValue;
if(a <= b){
    minValue = a;
    maxValue = b;
} else {minValue = b;
        maxValue = a;
}
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;
let answerPhrase;
let textNumber;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

function rename () {
        let a = Math.trunc(Math.abs(answerNumber) / 100);
        let z = Math.abs(answerNumber) % 100;
        let b = Math.trunc(Math.abs(z) / 10);
         if (z > 19) {
                z = z % 10;
        }
        let c = z;
        let hundreds = ['','cто ','двести ','триста ','четыреcта ','пятьсот ','шестьсот ','семьсот ','восемьсот ','девятьсот '];
        let dozens = ['','','двадцать ','тридцать ','сорок ','пятьдесят ','шестьдесят ','семьдесят ','восемьдесят ','девяносто '];
        let units = ['','один','два','три','четыре','пять','шесть','семь','восемь','девять','десять','одиннадцать','двенадцать',
        'тринадцать','четырнадцать','пятнадцать','шестнадцать','семнадцать','восемнадцать','девятнадцать'];

        if (answerNumber > 0) {
                textNumber = hundreds[a] + dozens[b] + units[c];
        } else if (answerNumber < 0) {
                textNumber = 'минус ' + hundreds[a] + dozens[b] + units[c];
        } else {
                textNumber = 'ноль';
        }
}

function message () {
        orderNumberField.innerText = orderNumber;
        rename ()
        textNumber = (textNumber.length > 20) ? answerNumber : textNumber;
        const phraseRandom = Math.round( Math.random()*2);

        if (phraseRandom == 2) {
                answerPhrase = `Вы загадали число ${textNumber }?`;
        } else if (phraseRandom == 1) {
                answerPhrase = `Может быть это ${textNumber }?`;
        } else {
                answerPhrase = `Это ${textNumber } я угадал?`;
        }
        
        answerField.innerText = answerPhrase;
}

message ()

document.getElementById('btnRetry').addEventListener('click', function () {
    orderNumber = 1;
    a = parseInt(prompt('Минимальное знание числа для игры','0'));
    b = parseInt(prompt('Максимальное знание числа для игры','100'));
    a = a || 0;
    b = b || 100;
    a = (a < -999) ? -999 : (a > 999) ? 999 : a;
    b = (b < -999) ? -999 : (b > 999) ? 999 : b;
    if(a <= b){
        minValue = a;
        maxValue = b;
    } else {minValue = b;
            maxValue = a;
    }
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    gameRun = true;
    message ()
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            message ()
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom = Math.round( Math.random()*2);
        if (phraseRandom == 2) {
                answerPhrase = `Я всегда угадываю\n\u{1F60E}`;
        } else if (phraseRandom == 1) {
                answerPhrase = `Это было просто\n\u{1F60E}`;
        } else {
                answerPhrase = `Ничего сложного\n\u{1F60E}`;
        }
        answerField.innerText = answerPhrase;
        gameRun = false;
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.ceil((minValue + maxValue) / 2);
            orderNumber++;
            message ()
        }
    }
})