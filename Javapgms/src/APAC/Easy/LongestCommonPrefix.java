package APAC.Strings;

public class LongestCommonPrefix {
    public static void main(String args[]){
        String[] ar = new String[]{"flower","flow","flight"};
        String[] ar1 = new String[]{"dog","racecar","race"};
        System.out.println(LongestCommonPrefix.lcp(ar));
        System.out.println(LongestCommonPrefix.lcp(ar1));
    }
    public static String lcp(String[] words){

        String temp="";
        String word = words[0];
         for(int i=1;i<words.length;i++){
             System.out.println(words[i].indexOf(word));
             while(words[i].indexOf(word)!=0){
                 word = word.substring(0,word.length()-1);
                 if(word.isEmpty()) return "";
             }
         }


        return word;
    }
}
