package APAC.Easy;

public class SearchInsertPosition
{
    public static void main(String args[]){
        int ar[] = new int[]{1,3,5,6};

        System.out.println(SearchInsertPosition.indexOfNumber(ar,5));
        System.out.println(SearchInsertPosition.indexOfNumber(ar,2));
        System.out.println(SearchInsertPosition.indexOfNumber(ar,7));
        System.out.println(SearchInsertPosition.indexOfNumber(ar,0));
    }
    public static int indexOfNumber(int[] ar,int value){

        for(int i=0;i<ar.length;i++){
            if(ar[i]==value){
                return i;
            }
            else if(ar[i]>value){
                return i;
            }
            else if(i==ar.length-1)
            {
                return i+1;
            }
        }
        return 0;
    }
}

