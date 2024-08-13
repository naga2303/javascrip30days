package APAC.Easy;

public class ShortestBetweenTwoWords
{
    public static void main(String args[]){
    String[] words = {"practice","makes","perfect","coding","makes"};
    String input1 = "coding";
    String input2 = "practice";
System.out.println(ShortestBetweenTwoWords.distance(words,input1,input2));
    }
    public static int distance(String[] ar, String ip, String ipp){
        int minDistance = ar.length;
        for(int i=0;i<ar.length;i++){
            if(ar[i].equals(ip)){
                for(int j=0;j<ar.length;j++){
                    if(ar[j].equals(ipp)){
                        minDistance = Math.min(minDistance,Math.abs(i-j));
                    }
                }
            }
        }
        return minDistance;
    }
}
