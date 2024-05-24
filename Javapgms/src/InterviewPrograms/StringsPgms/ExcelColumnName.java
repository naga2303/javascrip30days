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
        int n=28;
        String str="";
        if(n<27){
            System.out.println(charc[n-1]);
        }
       while(n>0){
           n=n/26;
       }
        System.out.println(str);
    }
}
