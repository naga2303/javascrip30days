package InterviewPrograms.StringsPgms;

import java.util.HashSet;
import java.util.Set;

public class DistinctSubsequence
{
    public static void main(String args[]){
        String s="gfg";
      //  char [] ch = s.toCharArray();
        Set<String> set = new HashSet<>();
        for(int i=0;i<s.length();i++){

            for(int j=0;j<s.length();j++){
                set.add(" ");
                set.add(String.valueOf(s.charAt(i)));
                set.add(String.valueOf(s.charAt(j)));
                set.add(String.valueOf(s.charAt(i))+String.valueOf(s.charAt(j)));
            }
        }
        System.out.println(set.size());
    }
}
