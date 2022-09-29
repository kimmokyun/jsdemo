let lotto=[];
for(let i=0; i<=5; i++){
    let ran = Math.random()*45;
    ran = Math.floor(ran) +1;
    console.log(ran);
    lotto.push(ran);
//중복체크

for(j=0; j<i; j++){
    if(lotto[j]==lotto) {
    i--;
    break; 
}
}
}




//2. 정렬
lotto.sort((a,b) => {
    return a - b;
});
//3. 출력

let div = document.querySelectorAll('div.wrap div');
div.forEach((element, idx)=> {
    element.innerText = lotto[idx];
});

