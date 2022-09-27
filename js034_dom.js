let myNode = document.getElementById('p2');

//parentNode (부모찾으러감)


    let pnt = myNode.parentNode;
    // parentNode:[object HTMLDivElement]
    console.log(`parentNode:${pnt}`);
    pnt.style.color = 'blue';

    let prevNode = myNode.previousSibling;
    // prevNode:[object Text]
    console.log(`prevNode:${prevNode}`);

prevNode = prevNode.previousSibling;
 // prevNode:[object HTMLParagraphElement]
console.log(`prevNode:${prevNode}`);


let nextNode = myNode.nextSibling;
// nextNode:[object Text]
console.log(`nextNode:${nextNode}`);

nextNode = nextNode.nextSibling;
// nextNode:[object HTMLParagraphElement] , content3
console.log(`nextNode:${nextNode}), ${nextNode.innerText}`);




let prE = myNode.previousElementSibling;
console.log(`prevEleNode:${prE}), ${prE.innerText}`);

let divNode = document.getElementById('wrap');
console.log(`divNode:${divNode}`);

let divChildesNode = divNode.childNodes
// divChildesNode:[object NodeList]
console.log(`divChildesNode:${divChildesNode}`);

//NodeList(7) [text, p#p1, text, p#p2, text, p#p3, text]
console.log(divChildesNode);

////////////////////////
//children

let divChildren = divNode.children;
// divChildren:[object HTMLCollection]
console.log(`divChildren:${divChildren}`);

// [p#p1, p#p2, p#p3, p1: p#p1, p2: p#p2, p3: p#p3]
console.log(divChildren);
console.log(divChildren[0]);
console.log(divChildren.item(0));
console.log(divChildren.namedItem('p1'));

let pNode = document.getElementById('p4');
let aNode = pNode.firstChild;
console.log(aNode);

aNode = pNode.firstElementChild;
console.log(aNode);

////////////////////////////////
//getAttibute("속성명"), setAttribute("속성명","값")
let aAttrNode = aNode.getAttribute('src');
// images/pg.jpg 
console.log(aAttrNode);

aAttrNode = aNode.src;
//http://127.0.0.1:5500/images/pg.jpg
console.log(aAttrNode);

aNode.setAttribute('title', '펭귄');
console.log(aNode.getAttribute('title'));

aNode.id="imgpg";
console.log(aNode.id);





