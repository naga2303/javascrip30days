package InterviewPrograms.LinkedInPgms;

import java.util.Arrays;

public class SecondLargestSmallest
{
    public static void main(String args[]){
        int[] a = {23,45,622,3,56,22,465};
        int max = Arrays.stream(a).max().getAsInt();
        int min = Arrays.stream(a).min().getAsInt();
       // System.out.println(max+"&"+min);
        int secMax =0;
        int secMin =a[0];
        for(int i=0;i<a.length;i++){
            if(a[i]>secMax && a[i]<max){
                secMax=a[i];
            }
            if(a[i]<secMin && a[i]>min){
                secMin=a[i];
            }
        }
        System.out.println(secMax);
        System.out.println(secMin);
    }
}
