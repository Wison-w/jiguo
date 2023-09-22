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