
let data = 'it`s a alright'
console.log(data);
//length : 문자열의 길이를 알려줌
console.log(data.length);

/* 
특정 범위 데이터를 리턴해주는 3가지 메소드
1. substring(start, end);
2. substr(start, length);
3. slice(start, end);
*/

data = 'apple, banana, kiwi';
console.log(data.substring(7,13)); // 7인덱스부터 13인덱스 미만
//substring()은 음수값을 지원하지 않는다.
console.log(data.substr(7,6));

console.log(data.substr(-12,6));

console.log(data.slice(7,13));

//replace('찾을 문자열', '바꿀 문자열');
console.log(`replace: ${data.replace('banana', 'gree')}`);

//정규 표현식
data = 'mr Blue has a blue house and a blue car';
console.log(data.replace(/blue/g, 'red'));

data = 'Hello world';
console.log(data.toUpperCase()); // 모두 대문자
console.log(data.toLowerCase()); // 모두 소문자

let data2 = 'javascript';
console.log(data.concat(data2)); // 문자를 합침.
console.log(data.concat('_',data2)); //Hello world_javascript
console.log(data.charAt(0)); // H
console.log(data.charCodeAt(0)); // 코드 72 (H)

data = 'a,b,c,d,e';
//match() : 검색데이터와 일치하는 문자열 있으면 문자열 모두를 찾아서 배열로 리턴하고
//           일치하는 문자열이 없으면 null로 리턴한다.

data = 'Mr Blue has a blue house and a blue car';
let pos = -1;
do{
    pos = pos + 1;
    pos = data.indexOf('blue', pos);
    console.log(pos);
} while (pos != -1);

//repeat()
let text = 'korea';
console.log(text.repeat(10));  // 문자열을 10번 실행해라.

text = '*';
console.log(text.repeat(20));

let text2 = '  korea  ';

console.log(text2.length);
console.log(text2.trim().length); //(공백수적용X 중간에 글자잇으면 공백수포함함)

let ps1 = { name: '홍길동', phone: '010-1234-5678'};

 function(strname) {
    if(strname === undefined || strname === '') {
        return '';
    }
    var pattern = /.$/; // 정규식
    return strname.replace(pattern, "*");
}
console.log('ps1');
