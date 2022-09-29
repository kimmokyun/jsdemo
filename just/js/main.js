/////슬라이딩 구현
//



setInterval(function () {
    let gg=document.querySelector('.slide');
    gg.style.top = '-100%';
    gg.style.transition = '1s';

    setTimeout(function(){
        let fss = gg.querySelectorAll('li')[0];
        gg.appendChild(fss);
        gg.style.top ='0';
        gg.style.transition = 'none';
    },600);
},3000);

////////////////////////////
// 공지사항 및 갤럴리 구현
function chgTap(i1,i2) {
    let tm = document.querySelectorAll(".tm > li");
    let tc = document.querySelectorAll(".tc > li");

    //i1 : class를 넣을 li순번
    //i2 : class를 뺄 li 순번
   

    //on클래스 넣기.//
    tm[i1].classList.add('on');
    tc[i1].classList.add('on');
     //on 클래스 뺴기
    tm[i2].classList.remove('on');
    tc[i2].classList.remove('on');
}
///////////////////////
//팝업창 닫기
function popup(sts) {
    let pop = document.querySelector('.pop');
    pop.style.display = 'none';
    
}