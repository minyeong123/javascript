const car = {
    name: "페라리",
    price: 1000000,
    color: "빨간색",
    changeColor: function(x){
        this.color =x;
    },
    priceUp: function(x){
        this.price = this.price + x;
    },
    changeName: function(x){
        this.name= x;      
    },
};

car.changeColor("검은색");
car.priceUp(200000);
car.changeName("제네시스");
window.console.log(car);