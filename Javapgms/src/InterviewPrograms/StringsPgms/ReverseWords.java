package InterviewPrograms.StringsPgms;

import java.io.IOException;

public class ReverseWords
{
    //link: https://www.geeksforgeeks.org/reverse-words-in-a-given-string/
    public static void main(String args[]) throws IOException
    {
        /*
        Input: s = “geeks quiz practice code”
Output: s = “code practice quiz geeks”
         */
        String str = "geeks quiz practice code";
        String[] strArr = str.split(" ");
        for(int i = strArr.length-1; i >=0; i--){
            System.out.print(strArr[i]+" ");
        }
    }
}
