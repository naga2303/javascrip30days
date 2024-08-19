package APAC.Easy;

public class RomanToInt
{
    public static void main(String args[]){
       System.out.println(RomanToInt.romanInt("III"));
        System.out.println(RomanToInt.romanInt("IV"));
        System.out.println(RomanToInt.romanInt("IX"));
        System.out.println(RomanToInt.romanInt("LVIII"));
        System.out.println(RomanToInt.romanInt("MCMXCIV"));

    }
    public static int romanInt(String roman){
        int res=0;
        for(int i=roman.length()-1;i>=0;i--){
            switch (roman.charAt(i)){
                case 'M':
                    res+=1000;
                    break;
                case 'D':
                    res+=500;
                    break;
                case 'C':
                    res+=100 * (res>=500 ? -1:1);
                    break;
                case 'L':
                    res+=50;
                    break;
                case 'X':
                    res+=10 *(res>=50 ? -1:1);
                    break;
                case 'V':
                    res+=5;
                    break;
                case 'I':
                    res+=(res>=5?-1:1);
                    break;
                default:
                    break;
            }
        }
        return res;
    }
}
