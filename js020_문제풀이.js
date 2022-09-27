/* 사과를 담는데 필요한 바구니구하기
사과 123개 바구니 하나에 10개 담을수 있으면 필요한수 */

let numofapple = 123 ; // 사과수
let size = 10; // 바구니담는 사과수
let buck; // 필요한 바구니 수
buck =
numofapple % size == 0
? parseInt(numofapple / size)
: parseInt(numofapple / size) + 1;
console.log(buck);
 
for(let year = 2001; year<=2012; year++){ /*2001~20012년도 까지*/
    let lc = (year % 4 == 0 && year % 100 !=0) || year % 400 == 0; /*lc는 2001~20012년에
     4를 나누면 0 이되거나 400년도나눌때 0이되는 값만 출력하라*/
    if(lc){
        console.log(year);
    }
}
