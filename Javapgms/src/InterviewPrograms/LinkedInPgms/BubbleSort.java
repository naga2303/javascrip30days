package InterviewPrograms.LinkedInPgms;

public class BubbleSort
{
    public static void main(String args[]){
        int[] ar = {64, 34, 25, 12, 22, 11, 90};
        int n = ar.length;
        //perform bubble sort
        for(int i=0;i<n-1;i++)
        {
            for(int j=0;j<n-i-1;j++){
                if(ar[j]<ar[j+1])
                {
                    int temp = ar[j];
                    ar[j] = ar[j+1];
                    ar[j+1] = temp;
                }
            }
        }
        System.out.println(ar[n-3]);
    }
}
