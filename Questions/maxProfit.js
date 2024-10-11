// MaxProfit is a common algorithmic problem that involves finding the maximum profit that can be made by buying and selling a stock.

// Problem Statement:

// Given an array prices where prices[i] represents the price of a given stock on the ith day, find the maximum profit that can be obtained by buying and selling the stock once.

// Example:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1
//  does not yield any profit as the selling price is not greater than the buying price.
// Approach:

// Initialize:

// maxProfit to 0 (initial maximum profit)
// minPrice to the first element of the prices array (initial minimum price)
// Iterate:

// Iterate through the prices array:
// For each price:
// Update minPrice to the minimum of the current minPrice and the current price.
// Calculate the current profit as the difference between the current price and the minPrice.
// Update maxProfit to the maximum of the current maxProfit and the current profit.
// Return:

// Return the maxProfit.

// ! First Approach

const maxProfit = (prices) => {
  let minPrice = prices[0]; // Assume the first day is the cheapest to buy
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];

    // Update minPrice if the lower price is found
    minPrice = Math.min(minPrice, currentPrice);
    console.log("MinPrice: " + minPrice);

    // Update maxProfit if the higher profit is found by subtracting the current price from the minPrice
    const potentialProfit = currentPrice - minPrice;
    console.log("Price: " + potentialProfit);

    maxProfit = Math.max(maxProfit, potentialProfit);
  }

  return maxProfit;
};

const profit = maxProfit(prices);

console.log("Maximum profit: " + profit);

// ! Second Approach

const maximumProfit = (prices) => {
  let minimumPrice = Infinity;
  let maximumProfit = 0;

  for (let price of prices) {
    if (price < minPrice) {
      minimumPrice = price;
    } else if (price - minimumPrice > maximumProfit) {
      maximumProfit = price - minimumPrice;
    }
  }
};

const prices = [7, 1, 5, 3, 6, 4];

// The timeComplexity is O(n)

// In this example, the prices array is [7, 1, 5, 3, 6, 4]. Let's break down how the loop works when the current price is 7:

// Initial values:
// minimumPrice is initialized to Infinity.
// maximumProfit is initialized to 0.

// First iteration:
// The current price is 7.
// Since 7 is greater than Infinity, the if condition is not true.
// The else if condition is also not true.
// No changes are made to minimumPrice or maximumProfit.

// Second iteration:
// The current price is 1.
// 1 is less than Infinity, so minimumPrice is updated to 1.
// The else if condition is not true.

// Third iteration:
// The current price is 5.
// 5 is greater than 1, so the else if condition is checked.
// The difference between 5 and 1 (4) is greater than 0, so maximumProfit is updated to 4.

// The loop continues for the remaining prices, updating minimumPrice and maximumProfit as needed. The final maximumProfit value will be 5, which is the maximum profit that can be made by buying at 1 and selling at 6.
