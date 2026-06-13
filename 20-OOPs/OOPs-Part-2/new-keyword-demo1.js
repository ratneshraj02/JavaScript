class Product{
    // name;
    // price;
    // description;

    //It is made of the object
    constructor(n, p, d) {
        this.name = n;
        this.price = p;
        this.description = d;

        //return "10";
        //return{}; //primitive -> no effect

        //if you don't return is the by defult return
        return this;
    }


    display() {
        //print the product 
    }
}

const p = new Product("Beg", 200, "This is the mi beg for gymer guy");
console.log(p);
