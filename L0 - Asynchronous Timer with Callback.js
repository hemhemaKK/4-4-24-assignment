function timer(duration){
    setTimeout(()=>{
        console.log("Timer is going to finish the job and going to display the complete message")
        return oncomplete(duration);
    },duration)
    
    function oncomplete(duration){
        console.log("------------------------")
        console.log("Timer of",duration,"ms finished")
    }
}

timer(5000)