let data = 10;
let fData = Number (data);
let nObj = new Number(data);
console.log(data);
console.log(fData);
console.log(nObj);
console.log(typeof nObj.toString);
console.log(typeof data.toString);

console.log(data + fData);
console.log(data + nObj);

let val = '10';
console.log(val+val); // 1010 (문자라서)
console.log(Number(val)+Number(val)); // 넘어가있어서 숫자로인식


