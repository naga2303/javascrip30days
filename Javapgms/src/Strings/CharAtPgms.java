package Strings;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class CharAtPgms
{
    public void displayValue() {
        String a="Nagarajan";
        System.out.println(a.charAt(0));

    }
    public void displayLoop() {
        String a = "Nagarajan";

        for(int i=0;i<a.length();i++) {
            System.out.println(a.charAt(i));
        }
    }
    public static void displayCustomValue()throws IOException
    {
        String a = "Nagarajan";
        InputStreamReader is = new InputStreamReader(System.in);
        BufferedReader br = new BufferedReader(is);
        System.out.println("Enter the value: ");
        int val = Integer.parseInt(br.readLine());
        System.out.println(a.charAt(val));
    }

    public static void main(String args[]) throws IOException
    {
        CharAtPgms ca = new CharAtPgms();
        System.out.println("UsingValue");
        ca.displayValue();
        System.out.println("UsingDisplayLoop");
        ca.displayLoop();
        CharAtPgms.displayCustomValue();
    }
}
