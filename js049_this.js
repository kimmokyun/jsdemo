//호출한 객체가 없을 경우에는 기본적으로 window객체이다.
console.log(this);


let mb = {
    name : '홍길동',
    show: function() {
        console.log(this);
    },
};

//(name: '홍길동', show: f)
mb.show();

let meber2 = {
    name: '홍길동',
    show: () => {
        console.log(this);
    },
};
//window
meber2.show();
///////////////////////
function showThisName(){
    console.log(this);
}
let showThisName2=() => {
    console.log(this);
};

let btn = document.querySelector('#btn');
btn.addEventListener('click',function(){
  // console.log(this);// <button id="btn">commit</button>
  console.log(this, this == btn); // true
});

let btn2 = document.querySelector('#btn');
btn.addEventListener('click',()=>{
  // console.log(this);// window
  console.log(this, this == btn2); // false
});

//
//call(): call메서드는 모든 함수에서 사용할 수 있으며
//         this값을 특정값으로 지정할 수 있다.
