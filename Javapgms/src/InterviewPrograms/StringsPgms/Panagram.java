package InterviewPrograms.StringsPgms;

import java.util.Arrays;
import java.util.HashSet;
import java.util.regex.Pattern;

public class Panagram
{
    public static void main(String args[]) {
        String st1 = "The quick brown fox jumps over the lazy dog";
        st1=st1.replace(" ","");
        char [] ch= st1.toLowerCase().toCharArray();
        Arrays.sort(ch);
        st1=new String(ch);
        System.out.println(st1);
        HashSet<Character> st = new HashSet<>();
        StringBuilder sb = new StringBuilder();
        for(char cha:st1.toCharArray()){
            if(st.add(cha)){
                sb.append(cha);
            }
        }
        String pattern = "[a-z]+";
        System.out.println(sb);
        if(Pattern.matches(pattern,sb)){
            System.out.println("It contains all the alphabets");
        }

    }
}
