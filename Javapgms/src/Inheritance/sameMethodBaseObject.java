package Inheritance;

public class sameMethodBaseObject
{
    public static void main(String[] args){
        // The below kind of declaration not allowed.
        /*derivedClassObject dco =  new baseClassObject();*/
        baseClassObject dco;
        dco = new derivedClassObject();
        dco.display();
        dco = new superDerivedClassObject();
        dco.display();
    /*
    The above process is known as runtime polymorphism
     */
    }


}
class baseClassObject{
    public void display()
    {
        System.out.println("baseClassObject");
    }
}
class derivedClassObject extends baseClassObject{
    public void display(){
        System.out.println("derivedClassObject");
    }
}
class superDerivedClassObject extends baseClassObject{
    public void display(){
        System.out.println("superDerivedClassObject");
    }
}
