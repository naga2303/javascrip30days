package InterviewPrograms.StringsPgms;

public class lookSequence
{
    public static void main(String args[]){
        int n=3;
        int a =1;
        if(n==1) {
            System.out.println('1');
        }
        if(n==2) {
            System.out.println(11);
        }
        String str = "11";
        for(int i=3;i<=n;i++) {
            str +='$';
            int m=str.length();
            int cnt =1;
            String tmp="";
            char[] ch = str.toCharArray();
            System.out.println(ch);
            for(int j=1;j<m;j++) {
                if (ch[j] != ch[j - 1]) {
                    tmp += cnt;
                    tmp += ch[j - 1];
                    cnt = 1;
                } else cnt++;
            }
            str = tmp;
            }
        System.out.println(str);

        }
    }

