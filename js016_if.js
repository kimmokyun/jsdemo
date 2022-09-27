//js016_if.js
/*
제어문(statemment) : 프로그램의 흐름을 제어할 수 있는 실행문이다.
1.조건문 : if~else
2.선택문 : switch ~case
3.반복문 : for,while

조건문: 조건식의 값이 참인지 아니면 거짓인지에 따라 실행문의 제어가 결정된다.
if(조건식){
    실행문;
}

*/
let a = 0;
if (a == 0){
    console.log('program end');
}
if (10){
    console.log('10');
}
if (null) {
    console.log('a'); 
}
/*
if(조건식){
    실행문;
}else{
    실행문;
}; */
/*(조건식1){
    실행문1;
}else if(조건식2){
    실행문;
}else if(조건식3){
    else{
        실행문;
    }
*/

//>=이상,<=이하,<미만,>초과 (*중요*)
let jumsu = 85;
if(jumsu >= 90){
    console.log('A');
}else if(jumsu >= 80){ //90미만 80이상
    console.log('B');
}else if(jumsu >= 70){ // 80미만 70이상
console.log('C');
}else if(jumsu >= 60){
    console.log('D');
}else{ // 60미만
    console.log('F');
}

/*check변수의 값이 'D' => D는 대문자입니다.
                    'd'=> d는 소문자입니다.
                    그외 => ?는 기타 입니다.*/
let x = 'A';
console.log(x >= 'A' && x <= 'Z');
let y = 'a'
console.log(y >= 'a' && y <= 'z');

let check = 'D';
if(check='D'){
    console.log('D');
}if(check='d'){
    console.log('d');
}else{
    console.log('기타');
}
console.log(check);

let checkk = 'd';
if (checkk >='A' && checkk <= 'Z') {
    console.log(`${checkk}는 대문자입니다.`);
}else if (checkk >= 'a' && checkk <= 'z') {
    console.log(`${checkk}는 소문자입니다.`);
}else {
    console.log(`${checkk}는 기타입니다.`);
}