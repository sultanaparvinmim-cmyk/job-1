function liveDateTime(){
 const now = new Date(); 
 const liveDateTime = document.getElementById("DateTime");
 liveDateTime.textContent = now.toLocaleString();
 
}

liveDateTime();
setInterval(liveDateTime, 1000);