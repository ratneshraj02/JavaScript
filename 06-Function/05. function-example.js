/*
    Why we are doing return? can we not use console.log()?

    What if I don't return anything from function?

    In JS if you don't manually return something, it automatically return undefined.
*/

function welcome(name) {
    console.log("Hello",name);
    return "By by";
}

let res = welcome("Ratnesh");
console.log(res); //Hello name \n undefined