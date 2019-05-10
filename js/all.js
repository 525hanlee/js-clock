function time() {
    //取得時間
    var time = new Date();
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    //將時間套用到CSS角度
    document.querySelector('.hour').style.transform = 'rotate(' + (hour*30+min/2-90) + 'deg)';
    document.querySelector('.min').style.transform = 'rotate(' + (min*6+sec/10) + 'deg)';
    document.querySelector('.sec').style.transform = 'rotate(' + (sec*6+180) + 'deg)';
}
//設定每秒執行
setInterval(time, 1000);
