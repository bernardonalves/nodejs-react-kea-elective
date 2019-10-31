const seconds = 5;

function myPromise() {
    new Promise((resolve, reject) => {
        try{
            setTimeout(()=>{
                resolve("Promise resolved successfully");
            }, seconds*1000);
        }
        catch{
            reject("The promise failed!")
        }
    }).then((message) => {
        console.log(message);
    });
}

myPromise()