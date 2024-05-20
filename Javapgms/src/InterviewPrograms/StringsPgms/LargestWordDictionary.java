package InterviewPrograms.StringsPgms;

import java.util.HashSet;
import java.util.Set;

public class LargestWordDictionary
{
    public static void main(String args[]){
        String[]  dict =  {"ale", "apple", "monkey", "plea"};
        String inp = "abpcplea";
        int maxLength=0;
        String word ="";
        StringBuilder sb = new StringBuilder();
        String[] ar = new String[9];
        String []a = {"ar","tr","ss"};
        
        Set<Character> st = new HashSet<>();
        for(int i=0;i<dict.length;i++){
            String temp = dict[i];
            int count = 0;
            for(int j=0;j<temp.length();j++){
                for(int k=0;k<inp.length();k++){
                    if(temp.charAt(j)==inp.charAt(k)){
                        count++;
                        break;

                    }
                }
                if(count==temp.length() && count>maxLength){
                    maxLength = temp.length();
                    word=dict[i];

                }
            }
        }
        System.out.println(word);


    }
}
