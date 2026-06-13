
const iphone = {
    name : "Iphone",
    price : 100000,
    rating : 4.8,

    display : function ()  {
        let iphoneRed = {
            name : "iphoneRed",
            price : 120000,
            rating :5.12,

            print : ()=> {
                console.log(this);
            }


        }
        iphoneRed.print();
    }
}

iphone.display();