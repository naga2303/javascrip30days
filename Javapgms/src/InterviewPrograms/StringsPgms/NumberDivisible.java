package InterviewPrograms.StringsPgms;
//https://www.geeksforgeeks.org/divisibility-by-7/
public class NumberDivisible
{
    public static void main(String[] args){
        int num = 371;
        if(isDivisibleBy7(num)){
            System.out.println("Divisible by 7");
        }
        else{
            System.out.println("Not divisible by 7");
        }
    }
    public static boolean isDivisibleBy7(int num){
        if(num<0){
            isDivisibleBy7(-num);
        }
        if(num==0 || num==7){
            return true;
        }
        if(num<10){
            return false;
        }
        return isDivisibleBy7(num/10 -2*(num-num/10*10));
    }
}
