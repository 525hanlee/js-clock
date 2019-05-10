function time() {
    var time = new Date();
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    document.querySelector('.hour').style.transform = 'rotate(' + (hour*30+min/2-90) + 'deg)';
    document.querySelector('.min').style.transform = 'rotate(' + (min*6+sec/10) + 'deg)';
    document.querySelector('.sec').style.transform = 'rotate(' + (sec*6+180) + 'deg)';
}
setInterval(time, 1000);
