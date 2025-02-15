package InterviewPrograms.StringsPgms;

import javax.xml.crypto.dsig.spec.XSLTTransformParameterSpec;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class Isomorphic
{
    static int size = 256;
    //Check if two given Strings are Isomorphic to each other
    public static void main(String[] args){

       String Str1 = "aab";
       String Str2 = "xxy";
       if(ismorphic(Str1,Str2)){
           System.out.println("True");
       }
       else {
           System.out.println("False");
       }
    }
    public static boolean ismorphic(String str1,String str2){
        int len = str1.length();
        Map<Character, Character> map1 = new HashMap<Character, Character>();

        for(int i=0;i<len;i++){
            char ch1 = str1.charAt(i);
            char ch2 = str2.charAt(i);
            System.out.println(map1.get(ch1));
            if(map1.containsKey(ch1)){
                if(map1.get(ch1)!=ch2){
                    return false;
                }
            }
            else
            {
                if(map1.containsValue(ch2)){
                    return false;
                }
                map1.put(ch1, ch2);
            }
        }
        return true;
    }
}
