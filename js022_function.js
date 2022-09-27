
//함수 : 특정기능을 하는 구문을 독립된 부품으로 만들어 재사용하고 할때 사용하는 문법이다.
/*
함수 정의
(1) 함수 선언문
function 함수명(매개변수){
    실행문;
    return 값;
}
(2) 함수 표현식
let test = function(매개변수){
    실행문;
    return 값;
}
*/
 //중첩함수
 function outer(a, b){
    let result = inner(a,b);
    function inner(a,b) {
return a + b;
    }
    return result;
 }   
 console.log(outer(10,3));
 //콜백함수
 function callback(a, b){
    return a+b;
 }
 function getNumber(callfunc){
    let result = callfunc(1, 6);
    return result;
 }
 console.log(getNumber(callback));
 //클로저(closure)
 /*
 */
function outerFun(){
    let sum = 50;

    innerFun();
    function innerFun(){
        return sum;       
    }
    return innerFun;
}
function dp(a, b){
    console.log(a,b);
    
}
dp(1, 2);  // a=1 b=2
dp(1); // a=1 b= undefined
dp(1, 2, 3 ,4 ,5) // a=1 b=2
//(1)기본 피라미터(default parameter) : ES6-2015
function display2(a=0, b=0){
    console.log(a,b);
}