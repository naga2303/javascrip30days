package APAC.Easy;

public class IndexOfFirstOccurrence
{
    public static void main(String args[]){
        System.out.println(IndexOfFirstOccurrence.needleHaystack("hello","ll"));
        System.out.println(IndexOfFirstOccurrence.needleHaystack("aaaa","bba"));
    }
    public static int needleHaystack(String haystack, String needle){

      return  needle==""?0:haystack.indexOf(needle);
    }
}
