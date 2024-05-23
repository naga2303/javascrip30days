package InterviewPrograms.StringsPgms;
//https://www.geeksforgeeks.org/find-excel-column-name-given-number/
public class ExcelColumnName
{
    public static void main(String[] args){
        String alpha="";
        for(char ch='a';ch<='z';ch++){
            alpha+=ch;
        }
        char [] charc = alpha.toCharArray();
        int n=283;
        String str="";
        if(n<27){
            System.out.println(charc[n-1]);
        }
        else {
            int len = n%26;
            System.out.println(len);
            for(int i=0;i<len;i++){
                str+=charc[len-1];
            }
        }
        System.out.println(str);
    }
}
