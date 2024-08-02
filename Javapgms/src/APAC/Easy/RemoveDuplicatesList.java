package APAC.Easy;

import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;

public class RemoveDuplicatesList
{
    public static void main(String args[]){
        List<Integer> al = new LinkedList<Integer>();
        List<Integer> bl = new LinkedList<Integer>();
        al.add(1);
        al.add(2);
        al.add(1);
        bl.add(1);
        bl.add(1);
        bl.add(2);
        bl.add(3);
        bl.add(3);
        System.out.println(RemoveDuplicatesList.test(al));
        System.out.println(RemoveDuplicatesList.test(bl));
    }
    public static List<Integer> test(List<Integer> withDup){

        Set<Integer> st = new HashSet<Integer>(withDup);
        List<Integer> lt = new LinkedList<Integer>(st);
        return lt;
    }
}
