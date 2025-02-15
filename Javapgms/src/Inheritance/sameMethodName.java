package Inheritance;

public class sameMethodName {
    public static void main(String[] args) {
        derivedClassMethod dr = new derivedClassMethod();
        dr.display();
    }
}

class baseClassMethod{
    public void display(){
        System.out.println("baseClass");
    }
}
class derivedClassMethod extends baseClassMethod{
    public void display(){
        System.out.println("derviedClass");
    }
}
