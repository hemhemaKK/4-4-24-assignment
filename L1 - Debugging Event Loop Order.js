console.log("Begin");
setTimeout(() => { 
    console.log("Timeout Task");
    }, 0); 
Promise.resolve().then(() => { 
    console.log("Promise Task"); 
}); 
console.log("End");


//Explanation of the above code
// always synchronous console logs will get excecuted so in the code there is 2 console.log that will be printed line by line then the order starts from

//first prints console.log("Begin") in callslack
//-----> "Begin"

// next line will be sent to browser becuase it is asynchronous 

//second prints console.log("end") in callslack
//-----> "End"

//next line will be sent to browser becuase it is asynchronous 

// now the asynchronous sends the methods according to the time callback queue because it is FIFO rule.

// in this asynchronous priorities promise frist so it the promise will get printed next the setTimeout will get printed there is 

