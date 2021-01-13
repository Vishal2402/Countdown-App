const newYear = "1 Jan 2022";



function countdown(){
    const newYearsDate =  new Date(newYear);
    const curDate =  new Date();
    const seconds = (newYearsDate - curDate)/1000;
    const Days = Math.floor(seconds/60/60/24);
    const Hours = Math.floor((seconds-(Days*86400))/3600); 
    const Minutes = Math.floor((seconds - ((Days*86400)+(Hours*3600))) / 60);
    const Seconds = Math.floor(seconds - ((Days*86400)+(Hours*3600)+(Minutes*60)));
    document.getElementById("Days").innerText = Days; 
    document.getElementById("HOURS").innerText = Hours; 
    document.getElementById("MINUTES").innerText = Minutes; 
    document.getElementById("SECONDS").innerText = Seconds; 
    console.log(Days,
        Hours,
        Minutes,
        Seconds);
}
    countdown();
    setInterval(countdown,1000);
