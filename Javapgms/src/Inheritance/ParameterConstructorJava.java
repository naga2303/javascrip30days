package Inheritance;

public class ParameterConstructorJava
{
    public static void main(String[]args){
    derivedParamConstructor bpc = new derivedParamConstructor(23);
    bpc.display();
    bpc.displayDerived();
}
}
class baseParamContructor{
 protected int value;
 public baseParamContructor(int value){
     this.value = value;
 }
 public void display(){
     System.out.println(value);
 }
}
class derivedParamConstructor extends baseParamContructor{
    public derivedParamConstructor(int value){
        super(value);
    /*
    If super is not used, then the base class constrcutor with zero parameters (by default) would have been called,
    and here there is such type of constructor so this will throw an error.
     */
    }
    public void displayDerived(){
        System.out.println(value+" In derivedParamConstructor");
    }
}