const b = {
    icecreams: [
       {name :"초코", price: 1500},
       {name :"초코", price: 2000},
       {name :"초코", price: 3000},
    ],
    sales: 0,
    sallicecream: function (x) {
        this.sales = this.sales + this.icecreams[x].price;
    },
};
b.sallicecream(1);
b.sallicecream(2);
b.sallicecream(2);
window.console.log(b.sales)