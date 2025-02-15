package APAC.Easy;

public class StockBuySell
{
    public static void main(String args[]){
        int[] ar = {7,1,5,3,6,4};
        int[] ar1 = {7,6,4,3,1};
        System.out.println(StockBuySell.maxProfit(ar));
        System.out.println(StockBuySell.maxProfit(ar1));
    }
    public static int maxProfit(int prices[]){
        int minPrice = Integer.MAX_VALUE;
        int maxProfice =0;
        for(int i=0;i<prices.length;i++){
            if(prices[i]<minPrice){
                minPrice=prices[i];
            }
            else if(prices[i]-minPrice>maxProfice){
                maxProfice = prices[i] - minPrice;
            }

        }
        return maxProfice;
    }
}
