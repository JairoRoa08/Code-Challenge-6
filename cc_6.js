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

// Task 4: Parameters and Arguments
function calculateSubscriptionCost(plan, months, discount = 0) {
    let planRates = {
        "Basic": 10,
        "Premium": 20,
        "Enterprise": 50
    };

    if (!planRates[plan]) {
        console.log('Invalid plan selected.');
        return;
    }

    let totalCost = (planRates[plan] * months) - discount;
    console.log('Total Cost: $${totalcost}');
}
calculateSubscriptionCost("Basic", 6, 10); // Expected output: "Total Cost: $50"
calculateSubscriptionCost("Premium", 12, 0); // Expected output: "Total Cost: $240"

// Task 5: Returning Values
function convertCurrency(amount, exchangeRate) {
    let convertedAmount = amount * exchangeRate;
    console.log('Converted Amount: $${convertedAmount.toFixed(2)}');
}
convertCurrency(100, 1.1); // Expected output: "Converted Amount: $110.00"
convertCurrency(250, 0.85); // Expected output: "Converted Amount: $212.50"
