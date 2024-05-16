package List;

import java.util.ArrayList;

public class ArrayListpgms
{
    public static void main(String[] args){
        ArrayList<Integer> lt = new ArrayList <Integer>();
        lt.add(1);
        lt.add(323);
        for(Integer i : lt){
            System.out.println(i);
        }
        //To remove an element
        /*lt.remove(1);
        for(Integer i : lt){
            System.out.println(i);
        }*/
        //To clear the values
        //lt.clear();

        //To print the size
        System.out.println("Size of the list:" +lt.size());

        //To verify the contains
        Boolean bl = lt.contains(323);
        System.out.println(bl);

        //For Each
        lt.forEach((n)->System.out.println(n));

        //get Index - returns the element from the specified index
       int a = lt.get(1);
       System.out.println("a's value: "+a);

       //indexOf - returns the index value of the first matched element
        System.out.println(lt.indexOf(323));
        System.out.println(lt.indexOf(444));


    }
}
