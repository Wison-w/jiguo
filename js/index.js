var apply = document.querySelector('.apply');
var people = document.querySelector('.people');
var number = document.querySelector('.number');
var person = 126;//人数
var num = 20;//数量
apply.onclick = function () {
    person++;
    num--;
    if (num < 0) {
        alert('很抱歉，此商品已经申请完了，请期待下次')
        num = 0;
        person = 146;
    }
    people.innerHTML = person;
    number.innerHTML = num;
}
var times = document.querySelector('.timer')
var timer = setInterval(function () {
    var timeOut = new Date(2023, 9, 10);
    var nowTime = new Date();
    var time = timeOut - nowTime;
    var day = parseInt(time / 1000 / 60 / 60 / 24);
    day = day > 9 ? day : '0' + day;
    var hour = parseInt(time / 1000 / 60 / 60 % 24);
    hour = hour > 9 ? hour : '0' + hour;
    var munite = parseInt(time / 1000 / 60 % 60);
    munite = munite > 9 ? munite : '0' + munite;
    var seconds = parseInt(time / 1000 % 60);
    seconds = seconds > 9 ? seconds : '0' + seconds;
    times.innerHTML = day + ' 天 ' + hour + ' 时 ' + munite + ' 分 ' + seconds + ' 秒 ';
    if (day == 0 && hour == 0 && munite == 0 && seconds == 0) {
        times.innerHTML = '活动结束'
        clearInterval(timer);
    }
}, 1000)
//轮播图
var mySwiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 2000,
    },
    effect: 'slide',
})
mySwiper.el.onmouseover = function () {
    mySwiper.autoplay.stop();
}
mySwiper.el.onmouseout = function () {
    mySwiper.autoplay.start();
}
// 点赞
var good = document.querySelectorAll('.good');
var review = document.querySelectorAll('.review');
var like = document.querySelectorAll('.like');
for (i = 0; i < good.length; i++) {
    good[i].setAttribute('index', i)
    good[i].onclick = function () {
        var index = this.getAttribute('index')
        var goodnum = good[index].firstChild.nodeValue;
        if (good[index].className == 'good') {
            goodnum++;
            good[index].className = 'good g_active';
            good[index].innerHTML = goodnum;
        }
        else {
            goodnum--;
            good[index].className = 'good';
            good[index].innerHTML = goodnum;
        }
    }
}
for (i = 0; i < review.length; i++) {
    review[i].setAttribute('index', i)
    review[i].onclick = function () {
        var index = this.getAttribute('index')
        var reviewnum = review[index].firstChild.nodeValue;
        if (review[index].className == 'review') {
            reviewnum++;
            review[index].className = 'review r_active';
            review[index].innerHTML = reviewnum
        }
        else {
            reviewnum--;
            review[index].className = 'review'
            review[index].innerHTML = reviewnum
        }
    }
}
for (i = 0; i < like.length; i++) {
    like[i].setAttribute('index', i)
    like[i].onclick = function () {
        var index = this.getAttribute('index')
        var likenum = like[index].firstChild.nodeValue;
        if (like[index].className == 'like') {
            likenum++;
            like[index].className = 'like l_active';
            like[index].innerHTML = likenum
        }
        else {
            likenum--;
            like[index].className = 'like'
            like[index].innerHTML = likenum
        }
    }
}
//渲染数据
var load = document.querySelector('.load')
var Load = document.querySelector('.Load')
var str = ''
var datanum = -1;
load.onclick = function () {
    load.className = 'load load_active'
    load.innerHTML = '正在加载中'
    datanum++;
    setTimeout(function () {
        load.className = 'load'
        load.innerHTML = '点击加载更多'
        var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP')
        ajax_.open('get', 'http://127.0.0.1:3000/play/new')
        ajax_.send()
        ajax_.onreadystatechange = function () {
            if (ajax_.readyState == 4) {
                if (ajax_.status == 200) {
                    var data = JSON.parse(ajax_.responseText)[datanum]
                    show(data)
                } else {
                    console.log('请求失败')
                }
            }
        }
        function show(data_) {
            var rander = document.querySelector('.rander')
            for (var i = 0; i < data_.length; i++) {
                str += `<a class="item">
                <img src="${data_[i].img}" alt="">
                <div class="txt">
                    <div class="txt_detail1">${data_[i].text}<br><span>${data_[i].description}</span></div>
                    <div class="txt_detail2">
                        <div class="price">${data_[i].price}</div>
                        <div class="icon">
                            <div class="like">${data_[i].like}</div>
                            <div class="review">${data_[i].words}</div>
                        </div>
                    </div>
                </div>
            </a>`
            }
            rander.innerHTML = str
            if (datanum == 2) {
                Load.innerHTML = '已经到底了......'
                load.style.display = 'none'
                clearTimeout
            }
        }
    }, 2000)
}
// 回顶部
var toTop = document.querySelector('.toTop')
window.onscroll = function () {
    var scrollTop = document.documentElement.scrollTop
    if (scrollTop > 200) {
        toTop.style.display = 'block'
    } else {
        toTop.style.display = 'none'
    }
}
toTop.onclick = function () {
    var timer = setInterval(function () {
        document.documentElement.scrollTop -= 50;
        if (document.documentElement.scrollTop == 0) {
            clearInterval(timer)
        }
    }, 1)
}