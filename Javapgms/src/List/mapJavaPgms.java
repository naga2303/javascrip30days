package List;

import java.util.TreeMap;

public class mapJavaPgms
{
    public static void main(String args[])
    {
        TreeMap<Integer,String> mp = new TreeMap<Integer,String>();

        mp.put(1,"a");
        mp.put(2,"b");
        mp.put(3,"c");

        System.out.println(mp.entrySet());
        System.out.println(mp.keySet());
        System.out.println(mp.values());
    }
}
