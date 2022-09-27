let dateBtnNode = document.getElementsByTagName('button')[0];
dateBtnNode.onclik = () => {
  let pNode = document.getElementsByTagName('p')[0];
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  let hour = today.getHours();
  let minte = today.getMinutes();
  let second = today.getSeconds();
  pNode.innerText = `${year}-${month}-${date} ${hour}:${minte}:${second}`;

};
