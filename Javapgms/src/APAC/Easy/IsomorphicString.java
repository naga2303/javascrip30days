package APAC.Easy;

public class IsomorphicString
{
    public static void main(String args[]){
        String a ="add";
        String b = "egg";
        System.out.println(IsomorphicString.isIsomorophic(a,b));
    }
    public static boolean isIsomorophic(String s, String t){
        if(s==null|| t==null){
            return false;
        }
        int[] m = new int[512];
        for(int i=0;i<s.length();i++){
            if(m[s.charAt(i)]!=m[t.charAt(i)+256]){
                return false;
            }
            m[s.charAt(i)] = m[t.charAt(i)+256] = i+1;
        }
        return true;
    }
}
