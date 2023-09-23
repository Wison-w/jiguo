if (window.location.href.indexOf('report/index') != -1) {
    // 最新
    var ajax = new XMLHttpRequest || new ActiveXObject("Microsoft.XMLHTTP")
    ajax.open('get', 'http://127.0.0.1:3000/report/new', true)
    ajax.send()
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            if (ajax.status == 200) {
                var data = JSON.parse(ajax.responseText)
                var bl1 = document.querySelector('.bl1')
                for (var i = 0; i < bl1.children.length; i++) {
                    for (var k = 0; k < data.length; k++) {
                        if (i == 2 * k) {
                            var str = `<a href="../guid/index.html">
                        <img src="${data[k].img}" alt="">
                        <div class="bl1">
                            <p>${data[k].text}</p>
                            <div class="bl2">
                                <div>
                                    <span><img src="../img/new.jpg" alt=""></span>
                                    <span>${data[k].uName}</span>
                                    <span>${data[k].endTime}</span>
                                </div>
                                <div>
                                    <span><img src="../img/zan.png" alt=""></span>
                                    <span>3</span>
                                    <span><img src="../img/reply.png" alt=""></span>
                                    <span>3</span>
                                </div>
                            </div>
                        </div>
                    </a>`
                            bl1.children[i].innerHTML = str
                        } else if (i == 2 * k - 1) {
                            var str = `<a href="../guid/index.html">关于${data[k - 1].text}还有 4 篇报告，点击查看</a>`
                            bl1.children[i].innerHTML = str
                        }
                    }
                }
            }
        }
    }
} else if (window.location.href.indexOf('report/hot') != -1) {
    // 最热
    var ajax_ = new XMLHttpRequest || new ActiveXObject("Microsoft.XMLHTTP")
    ajax_.open('get', 'http://127.0.0.1:3000/report/hot', true)
    ajax_.send()
    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var data = JSON.parse(ajax_.responseText)
                var bl2 = document.querySelector('.bl2')
                for (var i = 0; i < bl2.children.length; i++) {
                    for (var k = 0; k < data.length; k++) {
                        if (i == 2 * k) {
                            var str = `<a href="../guid/index.html">
                        <img src="${data[k].img}" alt="">
                        <div class="bl1">
                            <p>${data[k].text}</p>
                            <div class="bl2">
                                <div>
                                    <span><img src="../img/new.jpg" alt=""></span>
                                    <span>${data[k].uName}</span>
                                    <span>${data[k].endTime}</span>
                                </div>
                                <div>
                                    <span><img src="../img/zan.png" alt=""></span>
                                    <span>3</span>
                                    <span><img src="../img/reply.png" alt=""></span>
                                    <span>3</span>
                                </div>
                            </div>
                        </div>
                    </a>`
                            bl2.children[i].innerHTML = str
                        } else if (i == 2 * k - 1) {
                            var str = `<a href="../guid/index.html">关于${data[k - 1].text}还有 4 篇报告，点击查看</a>`
                            bl2.children[i].innerHTML = str
                        }
                    }
                }
            }
        }
    }
}
var more = document.querySelector('.more')
var btm = document.querySelector('.bottom')
more.onclick = function () {
    more.children[0].src = '../img/loading-icon.gif'
    var timer = null;
    clearTimeout(timer);
    timer = setTimeout(function () {
        for (var i = 0; i < 10; i++) {
            var li = document.createElement('li')
            var bl = document.querySelector('.bl')
            bl.appendChild(li)
        }
        if (window.location.href.indexOf('report/index') != -1) {
            // 最新
            var ajax = new XMLHttpRequest || new ActiveXObject("Microsoft.XMLHTTP")
            ajax.open('get', 'http://127.0.0.1:3000/report/new', true)
            ajax.send()
            ajax.onreadystatechange = function () {
                if (ajax.readyState == 4) {
                    if (ajax.status == 200) {
                        var data = JSON.parse(ajax.responseText)
                        var bl1 = document.querySelector('.bl1')
                        for (var i = 0; i < bl1.children.length; i++) {
                            for (var k = 0; k < data.length; k++) {
                                if (i == 2 * k) {
                                    var str = `<a href="../guid/index.html">
                                    <img src="${data[k].img}" alt="">
                                    <div class="bl1">
                                        <p>${data[k].text}</p>
                                        <div class="bl2">
                                            <div>
                                                <span><img src="../img/new.jpg" alt=""></span>
                                                <span>${data[k].uName}</span>
                                                <span>${data[k].endTime}</span>
                                            </div>
                                            <div>
                                                <span><img src="../img/zan.png" alt=""></span>
                                                <span>3</span>
                                                <span><img src="../img/reply.png" alt=""></span>
                                                <span>3</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>`
                                    bl1.children[i].innerHTML = str
                                } else if (i == 2 * k - 1) {
                                    var str = `<a href="../guid/index.html">关于${data[k - 1].text}还有 4 篇报告，点击查看</a>`
                                    bl1.children[i].innerHTML = str
                                }
                            }
                        }
                    }
                }
            }
        } else if (window.location.href.indexOf('report/hot') != -1) {
            // 最热
            var ajax_ = new XMLHttpRequest || new ActiveXObject("Microsoft.XMLHTTP")
            ajax_.open('get', 'http://127.0.0.1:3000/report/hot', true)
            ajax_.send()
            ajax_.onreadystatechange = function () {
                if (ajax_.readyState == 4) {
                    if (ajax_.status == 200) {
                        var data = JSON.parse(ajax_.responseText)
                        var bl2 = document.querySelector('.bl2')
                        for (var i = 0; i < bl2.children.length; i++) {
                            for (var k = 0; k < data.length; k++) {
                                if (i == 2 * k) {
                                    var str = `<a href="../guid/index.html">
                                    <img src="${data[k].img}" alt="">
                                    <div class="bl1">
                                        <p>${data[k].text}</p>
                                        <div class="bl2">
                                            <div>
                                                <span><img src="../img/new.jpg" alt=""></span>
                                                <span>${data[k].uName}</span>
                                                <span>${data[k].endTime}</span>
                                            </div>
                                            <div>
                                                <span><img src="../img/zan.png" alt=""></span>
                                                <span>3</span>
                                                <span><img src="../img/reply.png" alt=""></span>
                                                <span>3</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>`
                                    bl2.children[i].innerHTML = str
                                } else if (i == 2 * k - 1) {
                                    var str = `<a href="../guid/index.html">关于${data[k - 1].text}还有 4 篇报告，点击查看</a>`
                                    bl2.children[i].innerHTML = str
                                }
                            }
                        }
                    }
                }
            }
        }
        more.style.display = 'none'
        btm.style.height = '5000px'
    }, 2000);
}


