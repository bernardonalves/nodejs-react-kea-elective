function addNumbers(a, b){
    console.log(a+b);
}

addNumbers(5, 10);

const sayHello = function(name){
    console.log("Hello", name);
}

// Arrow functions

const yourName = () => {
    return "Anders";
}

sayHello(yourName())