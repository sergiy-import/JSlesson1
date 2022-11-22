let userName = prompt ('what is your name?');

alert (`Hello ${userName}`);

let bornYear = prompt ('Year of birth?');
const  thisYear = 2022;
let age = thisYear - bornYear;

alert (`You are ${age}`);

let squareSide = prompt ('what is the square side lenth?');
let squareArea = squareSide * 2;
alert (`The square area = ${squareArea}`);

let quantity = prompt ('and finaly EXTRA \n\ how many $ you want to change?');
const rate = 1.1;
let total = quantity * rate;
alert (`You can have ${total} euro`);