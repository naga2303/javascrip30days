package APAC.Easy;

public class PascalsTriangle
{
    public static void main(String args[]){
        int rows=5;
        printPascals(rows);
    }
    public static void printPascals(int n){
        for(int i=0;i<n;i++){
            int number =1;
            System.out.format("%"+(n-i)*2+"s","");
            for(int j=0;j<=i;j++){
                System.out.format("%4d",number);
                number = number * (i-j)/(j+1);
            }
            System.out.println();
        }
    }
}
