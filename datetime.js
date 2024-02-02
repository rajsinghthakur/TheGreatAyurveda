//time 1
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
const day = currentDate.getDate().toString().padStart(2, '0');
const hours = currentDate.getHours().toString().padStart(2, '0');
const minutes = currentDate.getMinutes().toString().padStart(2, '0');
const seconds = currentDate.getSeconds().toString().padStart(2, '0');
const currentDateTime1 = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
console.log("Current date and time:", currentDateTime1);


//time 2
const currentDateTime2 = new Date().toLocaleString();
console.log("Current date and time:", currentDateTime2);

//time 3
const currentDateTime3 = new Date().toISOString().slice(0, 19).replace('T', ' '); // Format: YYYY-MM-DD HH:MM:SS
console.log(`${currentDateTime3}`);
