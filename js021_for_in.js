
let co = ['red','green','blue'];
console.log(co[0]); //red
console.log(co[1]); //green
console.log(co[2]); //blue
console.log(co[3]);  // 언디파인드
console.log(co.length); // 변수 수

for (let index = 0; index < co.length; index++){
    console.log(co[index]);
}
//배열에 요소추가하기
co[3] = 'black';
console.log(co.length); //4개가 나옴
for (let index = 0; index < co.length; index++){
    console.log(co[index]);
}

let city = ['서울','부산','대전'];
for (let idx in city){
    console.log(idx);
}
let ob = {a:1, b:2, c:3}; // {값만을 저장하는}
console.log(ob); // { a: 1, b: 2, c: 3 }
console.log(ob.a);
