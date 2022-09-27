
document.log_f.onsubmit = () => {
    let idNode = document.querySelector('#my_id');
    let passNode = document.querySelector('#my_pass');
if(idNode.Value ==''){
    alert('아이디를 입력하세요');
    return false;
}
if(passNode.vaule==''){
    alert('비밀번호를 입력하세요.');
    return false;
}
};