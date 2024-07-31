package APAC.Easy;

public class CountAndSay
{
    public static void main(String args[]){
        System.out.println(CountAndSay.count(5));
    }
    public static String count(int n){
        String res = "1";
        while(n>1){
            StringBuilder sb = new StringBuilder();
            for(int i=0,j=1;i<res.length();i=j){
                while(j<res.length() && res.charAt(i)==res.charAt(j)){
                    j++;
                }
                sb.append(j-i).append(res.charAt(i));
            }
            res= sb.toString();
            n--;
        }
        return res;
    }
}
