//약관동의
document.frm.onsubmit = () => {
    let admin = document.frm.admin;
if(!admin.checked) {
alert('약관에 동의해야 합니다');
return false;
}
};

//전체 선택
document.frm.allCheck.onclick = function(){
//console.log(this);
//document.frm.subject1.checked = this.checked;
//document.frm.subject2.checked = this.checked;
//document.frm.subject3.checked = this.checked;
let checkgroup = document.querySelectorAll('.checkgroup');
console.log(checkgroup.length);

checkgroup.forEach((element) => {
    //console.log(this);
    element.checked = this.checked;
});
//Array.from() : NodetNode을 Array로 변경
/*console.log(`${checkgroup}`);

let my = Array.from(checkgroup);
console.log(`${my}`);

my.map(function(element){
    //console.log(this);
    element.checked = my.checked;
});*/

//////////////////////////////////////////
//ES6 Spread opeator : NodetNode을 Array로 변경

let iArray = [...checkgroup];
iArray.map(function(element){
    element.checked = myThis.checked;

});
};
