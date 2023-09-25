// 渲染
if (window.location.href.indexOf('report/index') != -1) {
    // 最新
    var ajax = new XMLHttpRequest || new ActiveXObject("Microsoft.XMLHTTP")
    ajax.open('get', 'http://127.0.0.1:3000/report/new', true)
    ajax.send()
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            if (ajax.status == 200) {
                var data = JSON.parse(ajax.responseText)
                var bl1 = document.querySelector('.bl')
                for (var i = 0; i < bl1.children.length; i++) {
                    for (var k = 0; k < data.length; k++) {
                        if (i == 2 * k) {
                            var str = `<a href="../guid/index.html">
                        <img src="${data[k].img}" alt="">
                        <div class="blone">
                            <p>${data[k].text}</p>
                            <div class="bltwo">
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
                var zan = document.querySelectorAll('.bltwo')
                var index11 = 0
                var index12 = 0
                var index21 = 0
                var index22 = 0
                var index31 = 0
                var index32 = 0
                var index41 = 0
                var index42 = 0
                var index51 = 0
                var index52 = 0
                zan[0].children[1].children[0].onclick = function (e) {
                    index11++
                    window.event ? e.returnValue = false : e.preventDefault();
                    if (index11 % 2 == 1) {
                        zan[0].children[1].children[0].children[0].src = '../img/zan1.png'
                        zan[0].children[1].children[1].innerHTML = 4
                    } else {
                        zan[0].children[1].children[0].children[0].src = '../img/zan.png'
                        zan[0].children[1].children[1].innerHTML = 3
                    }
                }
                zan[0].children[1].children[2].onclick = function (e) {
                    index12++
                    window.event ? e.returnValue = false : e.preventDefault();
                    if (index12 % 2 == 1) {
                        zan[0].children[1].children[3].innerHTML = zan[0].children[1].children[3].innerHTML - 0 + 1
                    } else {
                        zan[0].children[1].children[3].innerHTML = zan[0].children[1].children[3].innerHTML - 1
                    }
                }
                zan[1].children[1].children[0].onclick = function (e) {
                    index21++
                    window.event ? e.returnValue = false : e.preventDefault();
                    if (index21 % 2 == 1) {
                        zan[1].children[1].children[0].children[0].src = '../img/zan1.png'
                        zan[1].children[1].children[1].innerHTML = 4
                    } else {
                        zan[1].children[1].children[0].children[0].src = '../img/zan.png'
                        zan[1].children[1].children[1].innerHTML = 3
                    }
                }
                zan[1].children[1].children[2].onclick = function (e) {
                    index22++
                    window.event ? e.returnValue = false : e.preventDefault();
                    if (index22 % 2 == 1) {
                        zan[1].children[1].children[3].innerHTML = 4
                    } else {
                        zan[1].children[1].children[3].innerHTML = 3
                    }
                }
                zan[2].children[1].children[0].onclick = function (e) {
                    index31++
                    window.event ? e.returnValue = false : e.preventDefault();
                    if (index31 % 2 == 1) {
                        zan[2].children[1].children[0].children[0].src = '../img/zan1.png'
                        zan[2].children[1].children[1].innerHTML = 4
                    } else {
                        zan[2].children[1].children[0].children[0].src = '../img/zan.png'
                        zan[2].children[1].children[1].innerHTML = 3
                    }
                }
                zan[2].children[1].children[2].onclick = function (e) {
                    index32++
                    window.event ? e.returnValue = false : e.preventDefault();
                    if (index32 % 2 == 1) {
                        zan[2].children[1].children[3].innerHTML = 4
                    } else {
                        zan[2].children[1].children[3].innerHTML = 3
                    }
                }
                zan[3].children[1].children[0].onclick = function (e) {
                    index41++
                    window.event ? e.returnValue = false : e.preventDefault();
                    if (index41 % 2 == 1) {
                        zan[3].children[1].children[0].children[0].src = '../img/zan1.png'
                        zan[3].children[1].children[1].innerHTML = 4
                    } else {
                        zan[3].children[1].children[0].children[0].src = '../img/zan.png'
                        zan[3].children[1].children[1].innerHTML = 3
                    }
                }
                zan[3].children[1].children[2].onclick = function (e) {
                    index42++
                    window.event ? e.returnValue = false : e.preventDefault();
                    if (index42 % 2 == 1) {
                        zan[3].children[1].children[3].innerHTML = 4
                    } else {
                        zan[3].children[1].children[3].innerHTML = 3
                    }
                }
                zan[4].children[1].children[0].onclick = function (e) {
                    index51++
                    window.event ? e.returnValue = false : e.preventDefault();
                    if (index51 % 2 == 1) {
                        zan[4].children[1].children[0].children[0].src = '../img/zan1.png'
                        zan[4].children[1].children[1].innerHTML = 4
                    } else {
                        zan[4].children[1].children[0].children[0].src = '../img/zan.png'
                        zan[4].children[1].children[1].innerHTML = 3
                    }
                }
                zan[4].children[1].children[2].onclick = function (e) {
                    index52++
                    window.event ? e.returnValue = false : e.preventDefault();
                    if (index52 % 2 == 1) {
                        zan[4].children[1].children[3].innerHTML = 4
                    } else {
                        zan[4].children[1].children[3].innerHTML = 3
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
                var bl2 = document.querySelector('.bl')
                for (var i = 0; i < bl2.children.length; i++) {
                    for (var k = 0; k < data.length; k++) {
                        if (i == 2 * k) {
                            var str = `<a href="../guid/index.html">
                        <img src="${data[k].img}" alt="">
                        <div class="blone">
                            <p>${data[k].text}</p>
                            <div class="bltwo">
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
                var zan = document.querySelectorAll('.bltwo')
                var index11 = 0
                var index12 = 0
                var index21 = 0
                var index22 = 0
                var index31 = 0
                var index32 = 0
                var index41 = 0
                var index42 = 0
                var index51 = 0
                var index52 = 0
                console.log(zan[0]);
                zan[0].children[1].children[0].onclick = function (e) {
                    index11++
                    window.event ? e.returnValue = false : e.preventDefault();
                    if (index11 % 2 == 1) {
                        zan[0].children[1].children[0].children[0].src = '../img/zan1.png'
                        zan[0].children[1].children[1].innerHTML = 4
                    } else {
                        zan[0].children[1].children[0].children[0].src = '../img/zan.png'
                        zan[0].children[1].children[1].innerHTML = 3
                    }
                }
                zan[0].children[1].children[2].onclick = function (e) {
                    index12++
                    window.event ? e.returnValue = false : e.preventDefault();
                    if (index12 % 2 == 1) {
                        zan[0].children[1].children[3].innerHTML = zan[0].children[1].children[3].innerHTML - 0 + 1
                    } else {
                        zan[0].children[1].children[3].innerHTML = zan[0].children[1].children[3].innerHTML - 1
                    }
                }
                zan[1].children[1].children[0].onclick = function (e) {
                    index21++
                    window.event ? e.returnValue = false : e.preventDefault();
                    if (index21 % 2 == 1) {
                        zan[1].children[1].children[0].children[0].src = '../img/zan1.png'
                        zan[1].children[1].children[1].innerHTML = 4
                    } else {
                        zan[1].children[1].children[0].children[0].src = '../img/zan.png'
                        zan[1].children[1].children[1].innerHTML = 3
                    }
                }
                zan[1].children[1].children[2].onclick = function (e) {
                    index22++
                    window.event ? e.returnValue = false : e.preventDefault();
                    if (index22 % 2 == 1) {
                        zan[1].children[1].children[3].innerHTML = 4
                    } else {
                        zan[1].children[1].children[3].innerHTML = 3
                    }
                }
                zan[2].children[1].children[0].onclick = function (e) {
                    index31++
                    window.event ? e.returnValue = false : e.preventDefault();
                    if (index31 % 2 == 1) {
                        zan[2].children[1].children[0].children[0].src = '../img/zan1.png'
                        zan[2].children[1].children[1].innerHTML = 4
                    } else {
                        zan[2].children[1].children[0].children[0].src = '../img/zan.png'
                        zan[2].children[1].children[1].innerHTML = 3
                    }
                }
                zan[2].children[1].children[2].onclick = function (e) {
                    index32++
                    window.event ? e.returnValue = false : e.preventDefault();
                    if (index32 % 2 == 1) {
                        zan[2].children[1].children[3].innerHTML = 4
                    } else {
                        zan[2].children[1].children[3].innerHTML = 3
                    }
                }
                zan[3].children[1].children[0].onclick = function (e) {
                    index41++
                    window.event ? e.returnValue = false : e.preventDefault();
                    if (index41 % 2 == 1) {
                        zan[3].children[1].children[0].children[0].src = '../img/zan1.png'
                        zan[3].children[1].children[1].innerHTML = 4
                    } else {
                        zan[3].children[1].children[0].children[0].src = '../img/zan.png'
                        zan[3].children[1].children[1].innerHTML = 3
                    }
                }
                zan[3].children[1].children[2].onclick = function (e) {
                    index42++
                    window.event ? e.returnValue = false : e.preventDefault();
                    if (index42 % 2 == 1) {
                        zan[3].children[1].children[3].innerHTML = 4
                    } else {
                        zan[3].children[1].children[3].innerHTML = 3
                    }
                }
                zan[4].children[1].children[0].onclick = function (e) {
                    index51++
                    window.event ? e.returnValue = false : e.preventDefault();
                    if (index51 % 2 == 1) {
                        zan[4].children[1].children[0].children[0].src = '../img/zan1.png'
                        zan[4].children[1].children[1].innerHTML = 4
                    } else {
                        zan[4].children[1].children[0].children[0].src = '../img/zan.png'
                        zan[4].children[1].children[1].innerHTML = 3
                    }
                }
                zan[4].children[1].children[2].onclick = function (e) {
                    index52++
                    window.event ? e.returnValue = false : e.preventDefault();
                    if (index52 % 2 == 1) {
                        zan[4].children[1].children[3].innerHTML = 4
                    } else {
                        zan[4].children[1].children[3].innerHTML = 3
                    }
                }
            }
        }
    }
}
// 点击加载更多
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
                        var bl1 = document.querySelector('.bl')
                        for (var i = 0; i < bl1.children.length; i++) {
                            for (var k = 0; k < data.length; k++) {
                                if (i == 2 * k) {
                                    var str = `<a href="../guid/index.html">
                                    <img src="${data[k].img}" alt="">
                                    <div class="blone">
                                        <p>${data[k].text}</p>
                                        <div class="bltwo">
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
                        var zan = document.querySelectorAll('.bltwo')
                        var index61 = 0
                        var index62 = 0
                        var index71 = 0
                        var index72 = 0
                        var index81 = 0
                        var index82 = 0
                        var index91 = 0
                        var index92 = 0
                        var index01 = 0
                        var index02 = 0
                        zan[5].children[1].children[0].onclick = function (e) {
                            index61++
                            window.event ? e.returnValue = false : e.preventDefault();
                            if (index61 % 2 == 1) {
                                zan[5].children[1].children[0].children[0].src = '../img/zan1.png'
                                zan[5].children[1].children[1].innerHTML = 4
                            } else {
                                zan[5].children[1].children[0].children[0].src = '../img/zan.png'
                                zan[5].children[1].children[1].innerHTML = 3
                            }
                        }
                        zan[5].children[1].children[2].onclick = function (e) {
                            index62++
                            window.event ? e.returnValue = false : e.preventDefault();
                            if (index62 % 2 == 1) {
                                zan[5].children[1].children[3].innerHTML = zan[0].children[1].children[3].innerHTML - 0 + 1
                            } else {
                                zan[5].children[1].children[3].innerHTML = zan[0].children[1].children[3].innerHTML - 1
                            }
                        }
                        zan[6].children[1].children[0].onclick = function (e) {
                            index71++
                            window.event ? e.returnValue = false : e.preventDefault();
                            if (index71 % 2 == 1) {
                                zan[6].children[1].children[0].children[0].src = '../img/zan1.png'
                                zan[6].children[1].children[1].innerHTML = 4
                            } else {
                                zan[6].children[1].children[0].children[0].src = '../img/zan.png'
                                zan[6].children[1].children[1].innerHTML = 3
                            }
                        }
                        zan[6].children[1].children[2].onclick = function (e) {
                            index72++
                            window.event ? e.returnValue = false : e.preventDefault();
                            if (index72 % 2 == 1) {
                                zan[6].children[1].children[3].innerHTML = 4
                            } else {
                                zan[6].children[1].children[3].innerHTML = 3
                            }
                        }
                        zan[7].children[1].children[0].onclick = function (e) {
                            index81++
                            window.event ? e.returnValue = false : e.preventDefault();
                            if (index81 % 2 == 1) {
                                zan[7].children[1].children[0].children[0].src = '../img/zan1.png'
                                zan[7].children[1].children[1].innerHTML = 4
                            } else {
                                zan[7].children[1].children[0].children[0].src = '../img/zan.png'
                                zan[7].children[1].children[1].innerHTML = 3
                            }
                        }
                        zan[7].children[1].children[2].onclick = function (e) {
                            index82++
                            window.event ? e.returnValue = false : e.preventDefault();
                            if (index82 % 2 == 1) {
                                zan[7].children[1].children[3].innerHTML = 4
                            } else {
                                zan[7].children[1].children[3].innerHTML = 3
                            }
                        }
                        zan[8].children[1].children[0].onclick = function (e) {
                            index91++
                            window.event ? e.returnValue = false : e.preventDefault();
                            if (index91 % 2 == 1) {
                                zan[8].children[1].children[0].children[0].src = '../img/zan1.png'
                                zan[8].children[1].children[1].innerHTML = 4
                            } else {
                                zan[8].children[1].children[0].children[0].src = '../img/zan.png'
                                zan[8].children[1].children[1].innerHTML = 3
                            }
                        }
                        zan[8].children[1].children[2].onclick = function (e) {
                            index92++
                            window.event ? e.returnValue = false : e.preventDefault();
                            if (index92 % 2 == 1) {
                                zan[8].children[1].children[3].innerHTML = 4
                            } else {
                                zan[8].children[1].children[3].innerHTML = 3
                            }
                        }
                        zan[9].children[1].children[0].onclick = function (e) {
                            index01++
                            window.event ? e.returnValue = false : e.preventDefault();
                            if (index01 % 2 == 1) {
                                zan[9].children[1].children[0].children[0].src = '../img/zan1.png'
                                zan[9].children[1].children[1].innerHTML = 4
                            } else {
                                zan[9].children[1].children[0].children[0].src = '../img/zan.png'
                                zan[9].children[1].children[1].innerHTML = 3
                            }
                        }
                        zan[9].children[1].children[2].onclick = function (e) {
                            index02++
                            window.event ? e.returnValue = false : e.preventDefault();
                            if (index02 % 2 == 1) {
                                zan[9].children[1].children[3].innerHTML = 4
                            } else {
                                zan[9].children[1].children[3].innerHTML = 3
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
                        var bl2 = document.querySelector('.bl')
                        for (var i = 0; i < bl2.children.length; i++) {
                            for (var k = 0; k < data.length; k++) {
                                if (i == 2 * k) {
                                    var str = `<a href="../guid/index.html">
                                    <img src="${data[k].img}" alt="">
                                    <div class="blone">
                                        <p>${data[k].text}</p>
                                        <div class="bltwo">
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
                        var zan = document.querySelectorAll('.bltwo')
                        var index61 = 0
                        var index62 = 0
                        var index71 = 0
                        var index72 = 0
                        var index81 = 0
                        var index82 = 0
                        var index91 = 0
                        var index92 = 0
                        var index01 = 0
                        var index02 = 0
                        zan[5].children[1].children[0].onclick = function (e) {
                            index61++
                            window.event ? e.returnValue = false : e.preventDefault();
                            if (index61 % 2 == 1) {
                                zan[5].children[1].children[0].children[0].src = '../img/zan1.png'
                                zan[5].children[1].children[1].innerHTML = 4
                            } else {
                                zan[5].children[1].children[0].children[0].src = '../img/zan.png'
                                zan[5].children[1].children[1].innerHTML = 3
                            }
                        }
                        zan[5].children[1].children[2].onclick = function (e) {
                            index62++
                            window.event ? e.returnValue = false : e.preventDefault();
                            if (index62 % 2 == 1) {
                                zan[5].children[1].children[3].innerHTML = zan[0].children[1].children[3].innerHTML - 0 + 1
                            } else {
                                zan[5].children[1].children[3].innerHTML = zan[0].children[1].children[3].innerHTML - 1
                            }
                        }
                        zan[6].children[1].children[0].onclick = function (e) {
                            index71++
                            window.event ? e.returnValue = false : e.preventDefault();
                            if (index71 % 2 == 1) {
                                zan[6].children[1].children[0].children[0].src = '../img/zan1.png'
                                zan[6].children[1].children[1].innerHTML = 4
                            } else {
                                zan[6].children[1].children[0].children[0].src = '../img/zan.png'
                                zan[6].children[1].children[1].innerHTML = 3
                            }
                        }
                        zan[6].children[1].children[2].onclick = function (e) {
                            index72++
                            window.event ? e.returnValue = false : e.preventDefault();
                            if (index72 % 2 == 1) {
                                zan[6].children[1].children[3].innerHTML = 4
                            } else {
                                zan[6].children[1].children[3].innerHTML = 3
                            }
                        }
                        zan[7].children[1].children[0].onclick = function (e) {
                            index81++
                            window.event ? e.returnValue = false : e.preventDefault();
                            if (index81 % 2 == 1) {
                                zan[7].children[1].children[0].children[0].src = '../img/zan1.png'
                                zan[7].children[1].children[1].innerHTML = 4
                            } else {
                                zan[7].children[1].children[0].children[0].src = '../img/zan.png'
                                zan[7].children[1].children[1].innerHTML = 3
                            }
                        }
                        zan[7].children[1].children[2].onclick = function (e) {
                            index82++
                            window.event ? e.returnValue = false : e.preventDefault();
                            if (index82 % 2 == 1) {
                                zan[7].children[1].children[3].innerHTML = 4
                            } else {
                                zan[7].children[1].children[3].innerHTML = 3
                            }
                        }
                        zan[8].children[1].children[0].onclick = function (e) {
                            index91++
                            window.event ? e.returnValue = false : e.preventDefault();
                            if (index91 % 2 == 1) {
                                zan[8].children[1].children[0].children[0].src = '../img/zan1.png'
                                zan[8].children[1].children[1].innerHTML = 4
                            } else {
                                zan[8].children[1].children[0].children[0].src = '../img/zan.png'
                                zan[8].children[1].children[1].innerHTML = 3
                            }
                        }
                        zan[8].children[1].children[2].onclick = function (e) {
                            index92++
                            window.event ? e.returnValue = false : e.preventDefault();
                            if (index92 % 2 == 1) {
                                zan[8].children[1].children[3].innerHTML = 4
                            } else {
                                zan[8].children[1].children[3].innerHTML = 3
                            }
                        }
                        zan[9].children[1].children[0].onclick = function (e) {
                            index01++
                            window.event ? e.returnValue = false : e.preventDefault();
                            if (index01 % 2 == 1) {
                                zan[9].children[1].children[0].children[0].src = '../img/zan1.png'
                                zan[9].children[1].children[1].innerHTML = 4
                            } else {
                                zan[9].children[1].children[0].children[0].src = '../img/zan.png'
                                zan[9].children[1].children[1].innerHTML = 3
                            }
                        }
                        zan[9].children[1].children[2].onclick = function (e) {
                            index02++
                            window.event ? e.returnValue = false : e.preventDefault();
                            if (index02 % 2 == 1) {
                                zan[9].children[1].children[3].innerHTML = 4
                            } else {
                                zan[9].children[1].children[3].innerHTML = 3
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

window.frames[0].onload = function () {
    var header_list = document.querySelector('iframe').contentDocument.getElementsByTagName('ul')[0];
    header_list.children[0].firstElementChild.style.color = "#333 ";
    header_list.children[0].firstElementChild.onmouseenter = function () {
        this.style.color = "#FE5431"
    }
    header_list.children[0].firstElementChild.onmouseleave = function () {
        this.style.color = "#333"
    }
    header_list.children[4].firstElementChild.style.color = "#FE5431 ";
}