// Task 1:  Function Declaration
function calculateProfit(costPrice, sellingPrice, unitSold) {
    let profit = (sellingPrice - costPrice) * unitSold;
    console.log('Total Profit: $${proft}');
}

calculateProfit(20, 30, 100); // Expected output: "Total Profit: $1000"
calculateProfit(50, 70, 200); // Expected output: "Total Profit: $4000"

//Task 2: Function Expression
const calculateSalesTax = function(amount, taxRate) {
    let salesTax = amount * taxRate;
    console.log('Sales Tax: $${salesTax}');
};
calculateSalesTax(100, 0.07); // Expected output: "Sales Tax: $7"
calculateSalesTax(500, 0.1);  // Expected output: "Sales Tax: $50"

