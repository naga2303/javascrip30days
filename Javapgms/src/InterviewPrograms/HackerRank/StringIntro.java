package InterviewPrograms.HackerRank;

import java.io.*;
import java.util.*;
import java.util.*;

public class StringIntro {

    public static void main(String[] args) {

        Scanner sc=new Scanner(System.in);
        String A=sc.next();
        String B=sc.next();
        /* Enter your code here. Print output to STDOUT. */
        int len = A.length()+B.length();
        System.out.println(len);
        int cmp = A.compareTo(B);
        String message =  cmp >0  ? "Yes":"No";
        System.out.println(message);
        String fname = A.substring(0,1).toUpperCase()+A.substring(1);
        String lname = B.substring(0,1).toUpperCase()+B.substring(1);
        System.out.println(fname +" "+lname);

    }
}



