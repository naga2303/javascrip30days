package InterviewPrograms.StringsPgms;

public class MinimumInsertionPalindrome
{
    public static void main(String args[]){
        String str ="abcd";
        int minIter = minInter(str);
        System.out.println(minIter);
    }
    public static int minInter(String tr){
        int n = tr.length();
        int prevPrev =0;
        int prev =0;
        for(int i=2;i<=n;i++){
            int curr =0;
            if(tr.charAt(i-1) == tr.charAt(i-3)){
                curr = prevPrev;
            }
            else
            {
                curr = 1+ Math.min(prev,prevPrev);
            }
            prevPrev = prev;

            prev = curr;
        }
        return prev;
    }
}
