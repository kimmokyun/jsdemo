let pNode = document.getElementById("wrap");
//1 P) null
console.log(`${pNode.nodeType} ${pNode.nodeName}) ${pNode.nodeValue}`);


let pAttr = pNode.attributes;
//NamedNodeMap {0: id, id: id, length: 1}
console.log(pAttr);

//id
console.log(pAttr[0]);
console.log(pAttr.id);
console.log(pAttr.length);

console.log(`${pAttr[0].nodeType}),${pAttr[0].nodeName},${pAttr[0].nodeValue}`);


let pIdAttr = pNode.getAttribute('id');
console.log(pIdAttr);

let textNode = pNode.firstChild;
//"content"
console.log(textNode);


let bd = document.getElementsByTagName('body')[0];
console.log(bd.innerText);
console.log(bd.innerHTML);
///////////////////////////
//value

let fm = document.querySelector('#fname');
console.log(fm.value);

