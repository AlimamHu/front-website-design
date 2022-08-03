const countdown = () => {
    const countDate= new Date("August 03, 2022 00:00:00").getTime();
    // console.log(countDate);
    const now=new Date().getTime();

    console.log(Date())
    console.log(countDate)
    // console.log(now);
    // console.log((countDate-now)/1000);
    const gap =countDate-now;
    // time
    const seconds=1000;
    const minute=seconds*60;
    const hour=minute*60;
    const day=hour*24;

    // callculation
    const textDay=Math.floor(gap/day);
    const textHour=Math.floor((gap%day)/hour);
    const textMint=Math.floor((gap%hour)/minute);
    const textSecond=Math.floor((gap%minute)/seconds);
    // console.log(Math.floor(textDay) );
    // console.log(Math.floor(textHour) );
    // console.log(Math.floor(textMint) );
    // console.log(Math.floor(textSecond) );
document.querySelector('.day').innerText=textDay;
document.querySelector('.hour').innerText=textHour;
document.querySelector('.minut').innerText=textMint;
document.querySelector('.second').innerText=textSecond;
};

setInterval(countdown,1000);
// console.log('hello')