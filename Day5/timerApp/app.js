const timerTextElem = document.getElementById("timer-text");
let timeInSec = 0;
let intervalId=setInterval(()=>{},1000)
let timerFunc=()=>{
    
}

setInterval(() => {
    timeInSec++;
    console.log(timeInSec);
    const sec = timeInSec % 60;

    let min=Math.floor((timeInSec /60));
    min=min%60
    const hrs=Math.floor((timeInSec /3600));

    timerTextElem.innerText = `${hrs.toString().padStart(2,"0")}:${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`;
}, 1000);

const handleReset =()=>{
    timeInSec=0;
    timerTextElem.innerText="00:00:00"
}

const handlePause=()=>{
clearInterval(intervalId)
}

const handleResume=()=>{
    setInterval(timerFunc,1000);
}