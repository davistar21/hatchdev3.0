function maxProfit(prices: number[]): number {
  let maxProfit = 0;
  let minimumPrice = prices[0]; // no cause like this was the breakthrough for me
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minimumPrice) {
      minimumPrice = prices[i];
    }
    const diff = prices[i] - minimumPrice;
    maxProfit = diff > maxProfit ? diff : maxProfit;
  }
  return maxProfit;
}
