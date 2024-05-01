package Inheritance;

public class basicInheritanceJava {
    public static void main(String[] args) {
        subClass obj = new subClass();
        obj.display();
    }
}
class baseClass
{
    public void display(){
        System.out.println("Base Class message");
    }
}
 class subClass extends baseClass{
    public void derivedDisplay(){
        System.out.println("Derived Class message");
    }
}
/*
In this program, an object is created of subclass and the method in the superclass is called using that object.
 */

