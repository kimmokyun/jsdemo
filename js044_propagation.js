document.querySelector('.red').onclick = (e) => {
    alert('red');
};

document.querySelector('.green').onclick= (e) => {
    alert('green');
    return false;

};

document.querySelector('.blue').onclick= (e) => {
    alert('blue');
    console.log(e);
   // e.stopPropagation(); // 차단시킴
   return false;
};

document.querySelector('a').onclick = (e) => {
alert('하이요');
// e.preventDefault();
return false;
};





/*
[1] Event propagation(이벤트 전파)
① 캡처링(capturing phase) : 부모요소에서 target요소로 이벤트가 발생
② 버블링(bubbling phase) : target요소에서 부모요소로 이벤트 전파

[2] 이벤트 차단
stopPropagation()

[3] stopPropagation()와 preventDeFault()비교
     stopPropagation : 이벤트 전파 차단 : return false(jquery)
      preventDeFault : 디폴트 이벤트 차단 :return false (js,jq)
        (현재 페이지에서 이동하게)
*/