let hrs = document.getElementById("hr");
let mins = document.getElementById("min");
let secs = document.getElementById("sec");


setInterval(()=>{
    let currTime = new Date();
    hrs.innerHTML = (currTime.getHours()<10?"0":"") + currTime.getHours();
    mins.innerHTML = (currTime.getMinutes()<10?"0":"") + currTime.getMinutes();
    secs.innerHTML = (currTime.getSeconds()<10?"0":"") + currTime.getSeconds();
},1000);

