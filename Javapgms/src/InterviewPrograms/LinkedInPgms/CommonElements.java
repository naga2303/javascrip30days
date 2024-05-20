package InterviewPrograms.LinkedInPgms;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public class CommonElements
{
    public static void main(String args[]){
        int a[] = {1,2,3,2,1};
        int b[]={1,2,3};
        int c[]= {1,2,3,4};
        Set<Integer> st = new HashSet<>();
        int [] arr = new int[Math.min(a.length,b.length)];
        for(int i=0;i<a.length;i++){
            for(int j=0,k=0;j<b.length & k<c.length;j++,k++)
            {
                if(a[i]==b[j] && a[i]==c[k]){
                    st.add(a[i]);
                }
            }
        }
        System.out.println(st);
    }
}
