let totalCar = document.getElementById('total');
console.log(totalCar);

let chbCnt = document.querySelectorAll('tbody input[type="checkbox"]');
console.log(chbCnt); //NodeList []
//nodelist을 array로 변환
let myChb = [...chbCnt];

//checkbox에 onclick이벤트가 발생됬을때 수행될 carcount() 등록
myChb.map((element) =>{
    //console.log(this);
    element.onclick = carCount;
});
let basiCar = 0;
function carCount(){
    console.log(this);
basiCar = Number(totalCar.defaultValue);

myChb.map((element) =>{
    if(element.checked) basiCar += Number(element.value);
totalCar.value = basiCar;
});

}















/*let valuess = new Array(3); // 배열을 선언하여 값 불러오기
	valuess[0] = parseInt(document.getElementById('opt1').value);
	valuess[1] = parseInt(document.getElementById('opt2').value);
	valuess[2] = parseInt(document.getElementById('opt3').value);
	
	let total = parseInt(document.getElementById('total').value);

	function sum(num) {
		if(document.pc.elements[num].checked == true){
			total = total + valuess[num];
		}else{
			total = total - valuess[num];
		}
		document.pc.elements[3].value = total;	
	};
*/