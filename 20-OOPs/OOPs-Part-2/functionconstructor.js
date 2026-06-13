
function Product(n, p, d){
    this.name = n;
    this.price = p;
    this.description = d;

    this.display = function () {
        console.log(this);
    }

}

const p = new Product("beg", 200, "cool beg");
console.log(p);
p.display();