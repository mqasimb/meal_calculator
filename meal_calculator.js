function Diner(name, listOfDishes) {
    this.name = name;
    this.listOfDishes = listOfDishes;
}

Diner.prototype.totalPrice = function() {
    var total = 0;
    this.listOfDishes.forEach(function(item) {
        total += item.price;
    });
    return total;
};

Diner.prototype.calculateTax = function() {
    return this.totalPrice() * .08875;
};
//15% Tip Rate
Diner.prototype.calculateTip = function() {
    return this.totalPrice() * .15;
};

function Bill(listOfDiners) {
    this.listOfDiners = listOfDiners;
}

Bill.prototype.totalAllDiners = function() {
    var total = 0;
    this.listOfDiners.forEach(function(item) {
        total += item.totalPrice() + item.calculateTax();
    });
    return total;
};

Bill.prototype.totalDinerTips = function() {
    var total = 0;
    this.listOfDiners.forEach(function(item) {
        total += item.calculateTip();
    });
};

Bill.prototype.dinerBreakdown = function() {
    var printHTML = "";
    this.listOfDiners.forEach(function(item) {
       printHTML += "Name: " + item.name + ",Total: $" + item.totalPrice() + ",Tax: $" + item.calculateTax() + ", Tip: $" + item.calculateTip() + " "; 
    });
    return printHTML;
};

Bill.prototype.waitressTotal = function() {
    var totalTips = 0;
    this.listOfDiners.forEach(function(item) {
        totalTips += item.calculateTip();
    });
    return "Total Waitress Tips: $" + totalTips;
};

Bill.prototype.billTotal = function() {
    var totalBill = 0;
    this.listOfDiners.forEach(function(item) {
        totalBill += item.totalPrice() + item.calculateTax() + item.calculateTip();
    });
    return totalBill;
};

var diners =[
    new Diner("Ozil", [{name:"Apple Pie", price:3}, {name:"Fish Burger", price:5}]),
    new Diner("Sanchez", [{name:"Chicken", price:6}, {name:"Brownie", price:2.50}]),
    new Diner("Giroud", [{name:"Pizza", price:12}, {name:"French Fries", price:3}])
    ];
    
var newBill = new Bill(diners);

console.log(newBill);