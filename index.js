
function updateClock (){
    // time now currwnt time it gets it when we open our project
    const now =new Date () ; 
    let hours =now.getHours ().toString().padStart(2,0);
   const meridiem = hours >=12 ? "PM" : "AM";
   hours = hours%12 || 12 ; 
 hours =hours.toString().padStart(2,0) ;
   const seconds =now.getSeconds().toString().padStart(2,0);
    const minuts =now.getMinutes().toString().padStart(2,0);
    const timeString = `${hours} : ${minuts} : ${seconds} ${meridiem}`;
    document.getElementById('clock').textContent = timeString ;
}

updateClock();
// call function repeatly
setInterval(updateClock , 1000) ;

