var maxProfit = function(prices) {
    
    let buy1=-Infinity,buy2=-Infinity
    let sell1=0,sell2=0
    prices.forEach(item=>{
        sell2=Math.max(sell2,buy2+item);
        buy2=Math.max(buy2,sell1-item);
        sell1=Math.max(sell1,buy1+item);
        buy1=Math.max(buy1,-item)
    })
    return sell2;
}