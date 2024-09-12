/* const timeNow = new Date()
console.log(timeNow.toLocaleString());
console.log(timeNow);
console.log(timeNow.toLocaleTimeString());
console.log(timeNow.toLocaleDateString()); */


const btn = document.querySelector('.time')

btn.addEventListener('click',()=>{
    const timeNow = new Date()

    btn.innerText = `Current Date is ${timeNow.toLocaleDateString()} \n Current time is ${timeNow.toLocaleTimeString()}`
})
