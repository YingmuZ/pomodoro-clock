//get elements
let start = document.getElementById('start');
let reset = document.getElementById('reset');
let stop = document.getElementById('stop');
let breakTime = document.getElementById('break-time');
let breakMin = document.getElementById('break-time-min');
let breakPlus = document.getElementById('break-time-plus');
let workTime = document.getElementById('work-time');
let workMin = document.getElementById('work-time-min');
let workPlus = document.getElementById('work-time-plus');
let clockMin = document.getElementById('clock-min');
let clockSec = document.getElementById('clock-sec');

//needed functions and event listeners 
//1- break-work-setting, timer plus and minus display
//2- clock (setInterval & clearInterval)
//3- start-reset-stop buttons

//timer plus and minus
breakMin.addEventListener('click', ()=> breakTime.innerHTML > 1 ? breakTime.innerHTML-- : null)
breakPlus.addEventListener('click', function(){
    breakTime.innerHTML++
} )
workMin.addEventListener('click', ()=> workTime.innerHTML > 1 ? workTime.innerHTML-- : null)
workPlus.addEventListener('click', ()=> workTime.innerHTML++)

reset.addEventListener('click', resetTime)
// stop.addEventListener('click', stopTime)
start.addEventListener('click', clock)


function clock(){

    clockMin.innerHTML = workTime.innerHTML
    // clockSec.innerHTML = '00';

    let countDown = setInterval(function(){
        
        if(clockSec.innerHTML > 0 && clockSec.innerHTML <= 59){
            clockSec.innerHTML--
        } else if (clockSec.innerHTML == 0 && clockMin.innerHTML != 0){
            clockMin.innerHTML--
            clockSec.innerHTML = '59';
            clockSec.innerHTML--
        } else if (clockSec.innerHTML == 0 && clockMin.innerHTML == 0){
            clockMin.innerHTML = breakMin.innerHTML
            clockSec.innerHTML = '0';
        }
    }, 1000)
    
    stop.addEventListener('click', stopTime)
    function stopTime(){
        clearInterval(countDown)
    }
        
    
        
}

// function stopTime(){
//             start.addEventListener('click', clock)
//             clearInterval(countDown)
//         }


function resetTime(){
    clockMin.innerHTML = workTime.innerHTML
    clockSec.innerHTML = '00'; 
}