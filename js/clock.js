var dateOBJ = new Date();

const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//Time
document.getElementById("time").innerHTML = dateOBJ.getHours() + ":" + dateOBJ.getMinutes();

//Day-Of-Week + , + Month + Number
document.getElementById("example").innerHTML = weekDay[dateOBJ.getDay()] + " , " + monthNames[dateOBJ.getMonth()] + " " + dateOBJ.getDate();
