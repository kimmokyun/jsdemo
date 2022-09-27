//(1) 작은 이미지를 클릭하면 큰 이미지 보이게

let big=document.querySelector('#photo>img');
console.log(big);


let list = document.querySelector('#inner_list');
let ul_li = list.children;
console.log(ul_li); // HTMLCollection(8) 

ul_li = [...ul_li];

ul_li.map((litag,idx) => {
    let atag = litag.querySelector('a');
    atag.onclick=() =>{
      big.src=atag.href;
      return false; //e.preventDefault()
    }
});
//(2) 다음( > ) 버튼을 클릭할때 마다 <li>가 -100만큼 이동하게한다
let m_num = 0;

let b_btn = document.querySelector('#next_btn');
b_btn.onclick = (e) => {
    if(m_num >= ul_li.length -3) return false;
    m_num++;
   list.style.marginLeft = -100 * m_num + 'px'; 
   return false;
};

//(3) 이전(<) 클릭할때 마다 <li>이 100만큼 이동하게 한다.
let before = document.querySelector('#before_btn');
before.onclick = (e) => {
    if(m_num <=0 ) return false;
m_num--;
    list.style.marginLeft = -100 * m_num + 'px'; 
    return false;
}