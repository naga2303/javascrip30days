package APAC.Easy;

public class NearByDuplicateArray
{
    public static void main(String args[]){
        int[] nums = {1,2,3,1};
        int k=3;
        System.out.println(NearByDuplicateArray.isContainsNearByDuplicate(nums,k));
    }
    public static boolean isContainsNearByDuplicate(int[] a,int k){
        for(int i=0;i<a.length;++i){
            for(int j=Math.max(i-k,0);j<i;++j){
                if(a[i]==a[j]) return true;
            }
        }
        return false;
    }
}
