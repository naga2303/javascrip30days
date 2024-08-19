package src.APAC.Easy;

public class SquareRootX
{
    public static void main(String args[]){
        System.out.println(SquareRootX.returnsqr(4));
        System.out.println(SquareRootX.returnsqr(8));
    }
    public static int returnsqr(int a){

        int res = (int) Math.sqrt(a);
        //System.out.println(res);
        return res;
    }
}
