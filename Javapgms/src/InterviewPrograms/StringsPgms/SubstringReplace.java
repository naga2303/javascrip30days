package InterviewPrograms.StringsPgms;

public class SubstringReplace
{
    public static void main(String args[]){
        String s = "geeksforgeeks";
        String s2 = "eek";
        String s3 = "ok";
        String res= replaceSub(s,s2,s3);
        System.out.println(res);
    }
    public static String replaceSub(String a, String b, String c){
        StringBuilder finalString = new StringBuilder(a);

        int len= b.length();
        System.out.println("B's value:"+b);
        for(int i=0;i<=a.length()-len;i++){
            if(a.substring(i,i+len).equals(b)){
              finalString.replace(i,i+len,c);

            }
          //  System.out.println(a.substring(i,i+len));
        }
        return finalString.toString();
    }
}
