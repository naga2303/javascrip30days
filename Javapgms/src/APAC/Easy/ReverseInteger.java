package APAC.Easy;

public class ReverseInteger
{
    public static void main(String args[]){
        System.out.println(ReverseInteger.reverseNum(123));
        System.out.println(ReverseInteger.reverseNum(-123));
        System.out.println(ReverseInteger.reverseNum(120));

    }
    public static int reverseNum(int num){
        int temp=0;
        while (num!=0)
        {
            int divisor = num%10;
            temp = temp *10 + divisor;
            num = num/10;
        }

                return temp;
    }
}
