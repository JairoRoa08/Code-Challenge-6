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

// Task 3: Arrow Function
const calculateBonus = (salary, performanceRating) => {
    let bonusPercentage= 0;
    if (performanceRating === "Excellent") {
        bonusPercentage = 0.2;
    } else if (performanceRating === "Good") {
        bonusPercentage = 0.1;
    } else if (performanceRating === "Average") {
        bonusPercentage = 0.05;
    }

    let bonus = salary * bonusPercentage
    console.log('Bonus: $${bonus}');
}
calculateBonus(5000, "Excellent"); // Expected output: "Bonus: $1000"
calculateBonus(7000, "Good");      // Expected output: "Bonus: $700"