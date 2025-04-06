function fetchData(){
    return new Promise((reslove, reject)=>{
        let number = Math.random()
        setTimeout(()=>{
            console.log("----------------------- ")
            if(number>0.5){
                console.log("Duration :",number)
                reslove("Successfully...")
            }
            else{
                 console.log("Duration :",number)
               reject("Error time is less than 50%..")
            }
        },3000)
    })
}

fetchData()
.then((param)=>{
    console.log("Resolved", param)
})
.catch((param)=>{
    console.log("Rejected! Not fetched Data", param)
})

fetchData()
.then((param)=>{
    console.log("Resolved", param)
})
.catch((param)=>{
    console.log("Rejected! Not fetched Data", param)
})