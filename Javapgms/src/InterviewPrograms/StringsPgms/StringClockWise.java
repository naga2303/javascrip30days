package InterviewPrograms.StringsPgms;

//https://www.geeksforgeeks.org/check-string-can-obtained-rotating-another-string-2-places/
public class StringClockWise
{
    public static void main(String args[]){
        String str1 = "amazon";
        String str2 = "azonam";
        String find = str1.substring(0,2);
        int wordLength = find.length();
        int pos =0;
        for(int i=0;i<=str2.length()-wordLength;i++){
            String subStr = str2.substring(i,i+wordLength);
            if(subStr.equals(find)){
                pos=i;
            }
        }
        String newString = str2.substring(pos)+str2.substring(0,pos);
        System.out.println(newString);
    }
}
