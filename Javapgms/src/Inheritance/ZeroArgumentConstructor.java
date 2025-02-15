package Inheritance;

public class ZeroArgumentConstructor
{
    public static void main(String[] args){
        derivedClasszero dcz = new derivedClasszero();

    }
}
class baseClasszero{
    public baseClasszero()
    {
     System.out.println("Base zero");
    }

}
class derivedClasszero extends baseClasszero{
 public derivedClasszero(){
     System.out.println("Derived zero");
 }
}
/*
In this program, the output is Base zero and Derived Zero, when the object is initialized, first the parameter less base class
constructor is called and then the derived class constructor is called. No need to use super keyword to initialize.
 */