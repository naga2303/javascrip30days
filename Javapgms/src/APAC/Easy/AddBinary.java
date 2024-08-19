package src.APAC.Easy;

public class AddBinary
{
    public static void main(String args[]){
        System.out.println(AddBinary.addBin("11","1"));
        System.out.println(AddBinary.addBin("1010","1011"));
    }
    public static String addBin(String m,String n){

        StringBuilder sum = new StringBuilder();
        int i= m.length()-1;
        int j = n.length()-1;
        int c=0;
        while(i>=0 || j>=0 || c==1){
            c+= (i>=0 ? m.charAt(i) :0);
            c+=(j>=0? n.charAt(j):0);
            sum.insert(0,c%2);
            c>>=1;
        }
        return sum.toString();
    }
}
