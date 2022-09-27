//js017_switch.js
/*
switch문
선택문인 switch문은 변수에 저장된 값과 switch문에 있는 경우(case)의 값을 검사하며, 변수와
경우의 값에서 일차하는 값이 있을 때 그에 해당하는 실행문을 실행한다.

switch(식){
    case 값1 : 실행문1; breack;
    case 값2 : 실행문2; breack;
    case 값3 : 실행문3; breack;
    default : 실행문;
}
*/
console.log(85 / 10);

let c = 85;
switch (c){
    case 100: console.log('A'); breack;
}

let year = 2012;
let animal;
switch(year%5){
    case 0 : animal = '원숭이';break;
    case 1 : animal = '닭';break;
    case 2 : animal = '개';break;
    case 3 : animal = '돼지';break;
    case 4 : animal = '쥐';break;
    case 5 : animal = '소';break;
    case 6 : animal = '호랑이';break;
    case 7 : animal = '토끼';break;
    case 8 : animal = '용';break;
    case 9 : animal = '뱀';break;
    case 10 : animal = '말';break;
    case 11 : animal = '양';break;
}
console.log(animal);

let doo=0;
let even=0;

for (let i =1; i<=10; i++){
    if(i%2==1){
        
    }
}

