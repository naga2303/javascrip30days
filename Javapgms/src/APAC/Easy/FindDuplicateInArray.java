package APAC.Easy;

public class FindDuplicateInArray
{
    public static void main(String args[]) {
        int[] a = {1, 2, 3, 1};
        int[] b = {1, 2, 3, 4};
        int[] c = {1, 1, 3, 3, 4, 3, 2, 4, 2};
        System.out.println(FindDuplicateInArray.isDistinct(a));
        System.out.println(FindDuplicateInArray.isDistinct(b));
        System.out.println(FindDuplicateInArray.isDistinct(c));
    }
    public static boolean isDistinct(int[] num){
        for(int i=0;i<num.length;i++){
            for(int j=i+1;j<num.length;j++){
                if(num[i]==num[j]){
                    return true;

                }
            }

        }
        return false;
    }

}
