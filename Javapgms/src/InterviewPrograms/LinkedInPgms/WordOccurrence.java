package InterviewPrograms.LinkedInPgms;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

public class WordOccurrence
{
    public static void main(String[] args){
        String str ="I am Java developer I am proud of it";
        String[] ar = str.split(" ");
        Map<String, Integer> map = new HashMap<>();
        for(int i=0;i<ar.length;i++){
            int counter=1;
            for(int j=i;j<ar.length;j++){
             if(ar[i].equals(ar[j]) && !(i==j)){
                 counter++;
                 //System.out.println(ar[i]+":"+counter);
                 map.put(ar[i], counter);

             }
                if(j==ar.length-1 ) {
                    if (counter == 1 && !map.containsKey(ar[i])) {
                        System.out.println(ar[i] + ":" + counter);
                    }

                }

         }


        }

        Iterator itr = map.entrySet().iterator();
        while(itr.hasNext()){
            System.out.println(itr.next());
        }
    }
}
