var apply=document.querySelector('.apply');
var people=document.querySelector('.people');
var number=document.querySelector('.number');
var person=126;//人数
var num=20;//数量
apply.onclick=function(){
    person++;
    num--;
    if(num<0){
        alert('很抱歉，此商品已经申请完了，请期待下次')
        num=0;
        person=146;
    }
    people.innerHTML=person;
    number.innerHTML=num;
}
var times=document.querySelector('.timer')
var timer=setInterval(function(){
    var timeOut=new Date(2023,9,10);
    var nowTime=new Date();
    var time=timeOut-nowTime;
    var day=parseInt(time/1000/60/60/24);
    day=day>9?day:'0'+day;
    var hour=parseInt(time/1000/60/60%24);
    hour=hour>9?hour:'0'+hour;
    var munite=parseInt(time/1000/60%60);
    munite=munite>9?munite:'0'+munite;
    var seconds=parseInt(time/1000%60);
    seconds=seconds>9?seconds:'0'+seconds;
    times.innerHTML=day+' 天 '+hour+' 时 '+munite+' 分 '+seconds+' 秒 ';
    if(day==0&&hour==0&&munite==0&&seconds==0){
        times.innerHTML='活动结束'
        clearInterval(timer);
    }
},1000)
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
var good=document.querySelectorAll('.good');
var review=document.querySelectorAll('.review');
var like=document.querySelectorAll('.like');
for(i=0;i<good.length;i++){
    good[i].setAttribute('index',i)
    good[i].onclick=function(){
        var index=this.getAttribute('index')
        var goodnum=good[index].firstChild.nodeValue;
        if(good[index].className=='good'){
            goodnum++;
            good[index].className='good g_active';
            good[index].innerHTML=goodnum;
        }
        else{
            goodnum--;
            good[index].className='good';
            good[index].innerHTML=goodnum;
        }
    }
}
for(i=0;i<review.length;i++){
    review[i].setAttribute('index',i)
    review[i].onclick=function(){
        var index=this.getAttribute('index')
        var reviewnum=review[index].firstChild.nodeValue;
        if(review[index].className=='review'){
            reviewnum++;
            review[index].className='review r_active';
            review[index].innerHTML=reviewnum
        }
        else{
            reviewnum--;
            review[index].className='review'
            review[index].innerHTML=reviewnum
        }
    }
}
for(i=0;i<like.length;i++){
    like[i].setAttribute('index',i)
    like[i].onclick=function(){
        var index=this.getAttribute('index')
        var likenum=like[index].firstChild.nodeValue;
        if(like[index].className=='like'){
            likenum++;
            like[index].className='like l_active';
            like[index].innerHTML=likenum
        }
        else{
            likenum--;
            like[index].className='like'
            like[index].innerHTML=likenum
        }
    }
}