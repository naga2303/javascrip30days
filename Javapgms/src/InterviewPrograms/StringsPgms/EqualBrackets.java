package InterviewPrograms.StringsPgms;
//https://www.geeksforgeeks.org/find-equal-point-string-brackets/
public class EqualBrackets
{
  public static void main(String args[]){
      String brks = "(()))";
      int counter =0;
      for(int i=0; i<brks.length(); i++){
          if(brks.charAt(i) == '('){
              counter++;
          }
          if(brks.charAt(i) == ')'){
              counter--;
          }
      }
      if(counter == 0){
          System.out.println("YES");
      }
      else if(counter >0){
          System.out.println("Open brackets are higher");
      }
      else {
          System.out.println("Open brackets are lower");
      }
  }
}
