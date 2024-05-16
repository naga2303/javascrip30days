package InterviewPrograms.StringsPgms;

import java.util.Arrays;

//https://www.geeksforgeeks.org/longest-common-prefix-using-sorting/
public class LongestCommonPrefix
{
    public static void main(String args[]){
        //Input: {“geeksforgeeks”, “geeks”, “geek”, “geezer”}
        //Output: “gee”
        LongestCommonPrefix lcp = new LongestCommonPrefix();
        String [] ar = {"geeksforgeeks","geeks","geek","geezer"};

        String res = lcp.prefixWord((ar));
        System.out.println(res);
        }
        public String prefixWord(String[] words){
            int len = words.length;
            if(len == 0){
                return "";
            }
            if (len == 1){
                return words[0];
            }
            Arrays.sort(words);
            int minLen = Math.min(words[0].length(), words[words.length-1].length());
            System.out.println(minLen);
            int i=0;
            while(i < minLen && words[0].charAt(i)==words[len-1].charAt(i))
             i++;

            String pre =  words[0].substring(0, i);
            return pre;

        }

    }

