package List;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.LinkedList;

public class HashMapJavaPgms
{
    public static void main(String[] args){
        HashMap<Integer,String> hm = new HashMap<Integer,String>();
        hm.put(1,"a");
        hm.put(2,"b");
        hm.put(3,"c");
        hm.put(4,"d");
        System.out.println(hm);
        System.out.println(hm.entrySet());
        LinkedHashSet<Integer> lhs = new LinkedHashSet<Integer>(hm.keySet());
        for(int i : lhs){
            System.out.println(i);
        }
        LinkedList<Integer> lst = new LinkedList<Integer>();
       // lst.addAll(hm.values());
    }
}
