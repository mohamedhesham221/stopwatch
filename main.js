let sec = document.querySelector('p #sec'),
    min = document.querySelector('p #min'),
    hr = document.querySelector('p #hr'),
    startBtn = document.querySelector('#strtBtn');


let Interval,
    ss = 0,
    mm = 0,
    hh = 0;


function start(){
    'use strict';

    clearInterval(Interval)
    Interval = setInterval(timer , 1000)
}

function stop(){
    clearInterval(Interval)
}

function reset(){

    clearInterval(Interval)
    ss = '00';
    mm = '00';
    hh = '00';
    sec.innerHTML =  ss;
    min.innerHTML =  mm;
    hr.innerHTML = hh;
}


function timer(){

        'use strict'        

    //seconds
    
    if(sec.innerHTML < 59){
        ss ++ ;
        sec.innerHTML = ss;
        ss < 10 ? sec.innerHTML = '0' + ss : sec.innerHTML = ss;

    }else{
        ss = 0;
        sec.innerHTML = ss;
        ss < 10 ? sec.innerHTML = '0' + ss : sec.innerHTML = ss;

                //minutes
    if(min.innerHTML < 59){
        mm ++;
        min.innerHTML = mm;
        mm < 10 ? min.innerHTML = '0' +  mm : min.innerHTML = mm;

    }else{
        mm = 0;
        min.innerHTML = mm;
        mm < 10 ? min.innerHTML = '0' + mm : min.innerHTML = mm;

                //hours
    if(hr.innerHTML < 59){
        hh ++;
        hr.innerHTML = hh;
        hh < 10 ? hr.innerHTML = "0" + hh : hr.innerHTML = hh;

    }else{
        hh = 0;
        hr.innerHTML = hh;
        hh < 10 ? hr.innerHTML = "0" + hh : hr.innerHTML = hh;
    }

    }

    }

}