package src.APAC.Easy;

public class ClimbingStairs
{
 public static void main(String args[]){
     System.out.println(ClimbingStairs.returnSteps(2));
     System.out.println(ClimbingStairs.returnSteps(3));
 }
 public static int returnSteps(int a){
        if(a==1){
            return 1;
        }
        int first =1;
        int second =2;
        for(int i=3;i<=a;i++){
            int third = first+second;
            first = second;
            second=third;
        }
     return second;
 }
}
