/**
 * Created by Administrator on 2017/9/13.
 */
var img = document.getElementsByClassName('pic')[0];
var arr = ["./images/pic1.png", "./images/pic2.png", "./images/pic3.png", "./images/pic4.png"];
var lis = document.getElementById('btn').getElementsByTagName('li');
var i = 1;

var timer = setInterval(move, 3000);

function move() {
    img.src = arr[i];
    for (var j = 0; j < lis.length; j++) {
        lis[j].style.background = "#d9efec";
    }
    lis[i].style.background = "rgba(0,255,255,0.1)";
    i++;
    if (i == 4) {
        i = 0;
    }
    return i;
}

function stop(num) {

    for (var n = 0; n < lis.length; n++) {
        lis[n].style.background = "#d9efec";
    }
    lis[num].style.background = "rgba(0,255,255,0.1)";

    img.src = arr[num];
    if (num == 3) {
        i = 0;
    } else {
        i = num + 1;
    }
}
