package InterviewPrograms.StringsPgms;

import java.util.Arrays;

public class MinimumDistance
{
    public static void main(String args[]){
        String[]  names = {"the","quick","brown","fox","quick"};
        String fWord = "the";
        String sWord = "fox";
       int s1= -1;
       int s2= -1;
       int ans = Integer.MAX_VALUE;
       //System.out.println(ans);
       for(int i=0;i<names.length;i++){
           if(names[i].equals(fWord)){
               s1 = i;
           }
           if(names[i].equals(sWord)){
               s2 = i;
           }

       }
       if(s1!=-1&&s2!=-1){
           ans = Math.min(ans, Math.abs(s1 - s2));
       }
       System.out.println(ans);
    }
}
