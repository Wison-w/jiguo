var src = window.location.href;
var ul = document.querySelector('ul');
var more = document.getElementsByClassName('fcontent')[0].lastElementChild;
if (src.indexOf('index') != -1) {
    // var more = document.getElementsByClassName('fcontent')[0].lastElementChild;
    var str = '';
    window.onload = function () {
        var ajax = new XMLHttpRequest() || new ActiveXObject('Microsoft.HTTP');
        ajax.open('get', 'http://127.0.0.1:3000/useing/public');
        ajax.send();
        ajax.onreadystatechange = function () {
            if (ajax.readyState == 4) {
                if (ajax.status == 200) {
                    var data = JSON.parse(ajax.responseText);
                    for (i = 0; i < 12; i++) {
                        str += `<li>
                                <a href="detail.html">
                                    <span>${data[i].info_ty}</span>
                                    <img src='${data[i].img}'>
                                    <p>${data[i].text}</p>
                                    <div>
                                        <span>${data[i].totalnum}</span>
                                        <span>${data[i].num}</span>
                                        <p><span>${data[i].apply}</span>申请</p>
                                        <p>报告数量：8</p>
                                    </div>
                                </a>
                            </li>`
                    }
                    ul.innerHTML = str;
                    // //改变报告数量文字
                    for (k = 0; k < ul.children.length; k++) {
                        if (ul.children[k].firstElementChild.firstElementChild.innerHTML == '体验师转享') {
                            ul.children[k].firstElementChild.firstElementChild.style.width = 80 + 'px';
                            ul.children[k].firstElementChild.firstElementChild.style.backgroundColor = '#FBF4CB';
                            ul.children[k].firstElementChild.firstElementChild.style.color = ' #C4A96A';
                        }
                        if (k % 3 == 0) {
                            ul.children[k].firstElementChild.lastElementChild.lastElementChild.innerHTML = '剩余时间两天'
                        }
                        if (k % 2 == 0) {
                            ul.children[k].firstElementChild.lastElementChild.lastElementChild.innerHTML = '查看试用名单'
                        }

                    }
                }
            }
        }
    }
    var ind = 1;
    more.onclick = function () {
        ++ind;
        console.log(ind);
        more.style.width = 140 + 'px'
        more.firstElementChild.src = "../img/loading-icon.gif"
        setTimeout(function () {
            var ajax = new XMLHttpRequest() || new ActiveXObject('Microsoft.HTTP');
            ajax.open('get', 'http://127.0.0.1:3000/useing/master', true);
            ajax.send();
            ajax.onreadystatechange = function () {
                if (ajax.readyState == 4) {
                    if (ajax.status == 200) {
                        var data = JSON.parse(ajax.responseText);
                        for (i = 0; i < data.length; i++) {
                            str += `<li>
                                        <a href="detail.html">
                                            <span>${data[i].info_ty}</span>
                                            <img src='${data[i].img}'>
                                            <p>${data[i].text}</p>
                                            <div>
                                                <span>${data[i].totalnum}</span>
                                                <span>${data[i].num}</span>
                                                <p><span>${data[i].apply}</span>申请</p>
                                                <p>报告数量：8</p>
                                            </div>
                                        </a>
                                    </li>`
                        }
                        ul.innerHTML = str;
                        // //改变报告数量文字
                        for (k = 0; k < ul.children.length; k++) {
                            if (ul.children[k].firstElementChild.firstElementChild.innerHTML == '体验师转享') {
                                ul.children[k].firstElementChild.firstElementChild.style.width = 80 + 'px';
                                ul.children[k].firstElementChild.firstElementChild.style.backgroundColor = '#FBF4CB';
                                ul.children[k].firstElementChild.firstElementChild.style.color = ' #C4A96A';
                            }
                            if (k % 3 == 0) {
                                ul.children[k].firstElementChild.lastElementChild.lastElementChild.innerHTML = '剩余时间两天'
                            }
                            if (k % 2 == 0) {
                                ul.children[k].firstElementChild.lastElementChild.lastElementChild.innerHTML = '查看试用名单'
                            }

                        }
                        more.style.width = 120 + 'px'
                        more.firstElementChild.src = "../img/more.png"
                        if (ind > 2) {
                            more.style.cursor = "default"
                            more.removeChild(more.firstElementChild)
                            more.innerHTML = "没有了哦~~~"
                            more.style.color = "#999"
                            more.onclick = function () {
                            }
                        }
                    }
                }
            }

        }, 1500);

    }


}
else if (src.indexOf('applying') != -1) {
    var str = ''
    window.onload = function () {
        var ajax = new XMLHttpRequest() || new ActiveXObject('Microsoft.HTTP');
        ajax.open('get', 'http://127.0.0.1:3000/useing/public');
        ajax.send();
        ajax.onreadystatechange = function () {
            if (ajax.readyState == 4) {
                if (ajax.status == 200) {
                    var data = JSON.parse(ajax.responseText);
                    for (i = 0; i < 11; i++) {
                        str += `<li>
                                <a href="detail.html">
                                    <span>${data[i].info_ty}</span>
                                    <img src='${data[i].img}'>
                                    <p>${data[i].text}</p>
                                    <div>
                                        <span>${data[i].totalnum}</span>
                                        <span>${data[i].num}</span>
                                        <p><span>${data[i].apply}</span>申请</p>
                                        <p>报告数量：8</p>
                                    </div>
                                </a>
                            </li>`
                    }
                    ul.innerHTML = str;
                    // //改变报告数量文字
                    for (k = 0; k < ul.children.length; k++) {
                        if (ul.children[k].firstElementChild.firstElementChild.innerHTML == '体验师转享') {
                            ul.children[k].firstElementChild.firstElementChild.style.width = 80 + 'px';
                            ul.children[k].firstElementChild.firstElementChild.style.backgroundColor = '#FBF4CB';
                            ul.children[k].firstElementChild.firstElementChild.style.color = ' #C4A96A';
                        }
                        if (k % 3 == 0) {
                            ul.children[k].firstElementChild.lastElementChild.lastElementChild.innerHTML = '剩余时间两天'
                        }
                        if (k % 2 == 0) {
                            ul.children[k].firstElementChild.lastElementChild.lastElementChild.innerHTML = '查看试用名单'
                        }

                    }
                }
            }
        }
    }
    more.style.color = "#999"
}
else if (src.indexOf('end') != -1) {
    var str = ''
    window.onload = function () {
        var ajax = new XMLHttpRequest() || new ActiveXObject('Microsoft.HTTP');
        ajax.open('get', 'http://127.0.0.1:3000/useing/master');
        ajax.send();
        ajax.onreadystatechange = function () {
            if (ajax.readyState == 4) {
                if (ajax.status == 200) {
                    var data = JSON.parse(ajax.responseText);
                    for (i = 3; i < 19; i++) {
                        str += `<li>
                                <a href="detail.html">
                                    <span>${data[i].info_ty}</span>
                                    <img src='${data[i].img}'>
                                    <p>${data[i].text}</p>
                                    <div>
                                        <span>${data[i].totalnum}</span>
                                        <span>${data[i].num}</span>
                                        <p><span>${data[i].apply}</span>申请</p>
                                        <p>报告数量：8</p>
                                    </div>
                                </a>
                            </li>`
                    }
                    ul.innerHTML = str;
                    // //改变报告数量文字
                    for (k = 0; k < ul.children.length; k++) {
                        if (ul.children[k].firstElementChild.firstElementChild.innerHTML == '体验师转享') {
                            ul.children[k].firstElementChild.firstElementChild.style.width = 80 + 'px';
                            ul.children[k].firstElementChild.firstElementChild.style.backgroundColor = '#FBF4CB';
                            ul.children[k].firstElementChild.firstElementChild.style.color = ' #C4A96A';
                        }
                        if (k % 3 == 0) {
                            ul.children[k].firstElementChild.lastElementChild.lastElementChild.innerHTML = '剩余时间两天'
                        }
                        if (k % 2 == 0) {
                            ul.children[k].firstElementChild.lastElementChild.lastElementChild.innerHTML = '查看试用名单'
                        }

                    }
                }
            }
        }
    }
    more.style.color = "#999"
}
else if (src.indexOf('using') != -1) {
    var str = ''

    window.onload = function () {
        var ajax = new XMLHttpRequest() || new ActiveXObject('Microsoft.HTTP');
        ajax.open('get', 'http://127.0.0.1:3000/useing/master');
        ajax.send();
        ajax.onreadystatechange = function () {
            if (ajax.readyState == 4) {
                if (ajax.status == 200) {
                    var data = JSON.parse(ajax.responseText);
                    for (i = 17; i > 1; i--) {
                        str += `<li>
                                <a href="detail.html">
                                    <span>${data[i].info_ty}</span>
                                    <img src='${data[i].img}'>
                                    <p>${data[i].text}</p>
                                    <div>
                                        <span>${data[i].totalnum}</span>
                                        <span>${data[i].num}</span>
                                        <p><span>${data[i].apply}</span>申请</p>
                                        <p>报告数量：8</p>
                                    </div>
                                </a>
                            </li>`
                    }
                    ul.innerHTML = str;
                    // //改变报告数量文字
                    for (k = 0; k < ul.children.length; k++) {
                        if (ul.children[k].firstElementChild.firstElementChild.innerHTML == '体验师转享') {
                            ul.children[k].firstElementChild.firstElementChild.style.width = 80 + 'px';
                            ul.children[k].firstElementChild.firstElementChild.style.backgroundColor = '#FBF4CB';
                            ul.children[k].firstElementChild.firstElementChild.style.color = ' #C4A96A';
                        }
                        if (k % 3 == 0) {
                            ul.children[k].firstElementChild.lastElementChild.lastElementChild.innerHTML = '剩余时间两天'
                        }
                        if (k % 2 == 0) {
                            ul.children[k].firstElementChild.lastElementChild.lastElementChild.innerHTML = '查看试用名单'
                        }

                    }
                }
            }
        }
    }
    more.style.color = "#999"
}
else if (src.indexOf('vip') != -1) {
    var str = ''

    window.onload = function () {
        var ajax = new XMLHttpRequest() || new ActiveXObject('Microsoft.HTTP');
        ajax.open('get', 'http://127.0.0.1:3000/useing/master');
        ajax.send();
        ajax.onreadystatechange = function () {
            if (ajax.readyState == 4) {
                if (ajax.status == 200) {
                    var data = JSON.parse(ajax.responseText);
                    for (i = 0; i < data.length; i++) {
                        str += `<li>
                                <a href="detail.html">
                                    <span>${data[i].info_ty}</span>
                                    <img src='${data[i].img}'>
                                    <p>${data[i].text}</p>
                                    <div>
                                        <span>${data[i].totalnum}</span>
                                        <span>${data[i].num}</span>
                                        <p><span>${data[i].apply}</span>申请</p>
                                        <p>报告数量：8</p>
                                    </div>
                                </a>
                            </li>`
                    }
                    ul.innerHTML = str;
                    // //改变报告数量文字
                    for (k = 0; k < ul.children.length; k++) {
                        ul.children[k].firstElementChild.firstElementChild.innerHTML = '体验师转享'
                        ul.children[k].firstElementChild.firstElementChild.style.width = 80 + 'px';
                        ul.children[k].firstElementChild.firstElementChild.style.backgroundColor = '#FBF4CB';
                        ul.children[k].firstElementChild.firstElementChild.style.color = ' #C4A96A';

                        if (k % 3 == 0) {
                            ul.children[k].firstElementChild.lastElementChild.lastElementChild.innerHTML = '剩余时间两天'
                        }
                        if (k % 2 == 0) {
                            ul.children[k].firstElementChild.lastElementChild.lastElementChild.innerHTML = '查看试用名单'
                        }

                    }
                }
            }
        }
    }
    more.style.color = "#999"
}
//点击之后变色
var header_list = document.querySelector('iframe').contentWindow.document.getElementsByTagName('ul')[0];
header_list.children[0].firstElementChild.style.color = "#333 ";
header_list.children[0].firstElementChild.onmouseenter = function () {
    this.style.color = "#FE5431"
}
header_list.children[0].firstElementChild.onmouseleave = function () {
    this.style.color = "#333"
}
header_list.children[3].firstElementChild.style.color = "#FE5431 ";


