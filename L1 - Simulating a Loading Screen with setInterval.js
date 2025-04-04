let count = 0

let running = setInterval(()=>{
    count++
    console.log("loading....",count)
    if(count == 5){
      clearInterval(running);
      console.log("after 5 seconds Loaded successfully!")
    }
},1000)