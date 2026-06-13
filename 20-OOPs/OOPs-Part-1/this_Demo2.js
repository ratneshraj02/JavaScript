
const Iphone = {
    name : "Iphone",
    category : "electronics",
    prince : 100000,
    rating : 4.3,

    display :  ()=> {
        console.log(this);
    }
}

const Macbook = {
    name : "MacBook",
    category : "electronics",
    prince : 150000,
    rating : 4.1,

    display :  function() {
        console.log(this);
    }
}

Macbook.display();
Iphone.display();



