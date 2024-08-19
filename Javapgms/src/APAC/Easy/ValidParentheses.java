package APAC.Easy;

public class ValidParentheses
{
    public static void main(String args[]){
        System.out.println(ValidParentheses.isValid("()"));
        System.out.println(ValidParentheses.isValid("()[]{}"));
        System.out.println(ValidParentheses.isValid("(]"));
        System.out.println(ValidParentheses.isValid("([)]"));
        System.out.println(ValidParentheses.isValid("([])"));
    }
    public static boolean isValid(String paren){
        int total=0;
        for(int i=0;i<paren.length();i++) {
            switch (paren.charAt(i)) {
                case '{':
                    total += 1;
                    break;
                case '}':
                    total = total-1;
                    break;
                case '(':
                    total += 2;
                    break;
                case ')':
                    total = total-2;
                    break;
                case '[':
                    total += 3;
                    break;
                case ']':
                    total = total-3;
                    break;
                default:
                    break;
            }
        }
        System.out.println(total);
        return total==0;
    }
}
