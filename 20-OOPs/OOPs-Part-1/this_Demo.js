
let iphone = {
    name : "Iphone 13 pro",
    price : 100000,
    description : "The new apple iphone 13 pro",
    rating : 4.8,

    display() {
        console.log("first display ", this);
    }
}

let macbook = {
    name : "Macbook",
    price : 150000,
    description : "The new apple macbook",
    rating : 4.1,


    display() {
        console.log("Second display ", this);
    }
}

macbook.display();
iphone.display();

