package Inheritance;

class stackBase
{
    protected int MAX=25;
    protected int[]s;
    protected int TOP;
    public stackBase(){
        s = new int[MAX];
        TOP = -1;
    }
    public void push(int value){
        TOP++;
        s[TOP] = value;
    }
    public int pop(){
        int num;
        num =s[TOP];
        TOP --;
    return num;
    }
    public void display(){
        for(int ss:s){
            System.out.println(ss);
        }
    }
}
class derivedStack extends stackBase{
    public void push(int num){
        if(TOP == MAX -1){
            System.out.println("Stack is Full");
        }
        else{
            super.push(num);
        }
    }
    public int pop(){
        int n;
        if(TOP == -1){
            System.out.println("Stack is empty");
        }

            n=super.pop();
            return (n);


    }
}
public class stackProgram
{
    public static void main(String[] args) throws ArrayIndexOutOfBoundsException
    {

        int n;
        derivedStack stk = new derivedStack();
        stk.push(32);
        stk.push(45);
        n=stk.pop();
        System.out.println(n);
    }
}
