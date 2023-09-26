var pnum = document.querySelector('#pnum')
var pass1 = document.querySelector('#pass1')
var form = document.querySelector('form')
var btn = document.querySelector('#btn')
window.frames[0].onload = function () {
    btn.onclick = function () {
        var str = `pnum=${pnum.value}; password=${pass1.value}`
        if (str == document.cookie) {
            form.submit();
        } else {
            alert('手机号或密码不正确')
        }
    }
}
