package APAC.Strings;

import java.util.HashMap;
import java.util.Map;

public class LongSubWithoutRepeating {
    public static void main(String args[]) {
        String s1 = "abcabcbb";
        String s2 = "bbbb";
        String s3 = "pwwkew";
        System.out.println(LongSubWithoutRepeating.longRepeating(s1));
        System.out.println(LongSubWithoutRepeating.longRepeating(s2));
        System.out.println(LongSubWithoutRepeating.longRepeating(s3));


    }

    public static int longRepeating(String word) {
        int n = word.length(), ans = 0;
        Map<Character, Integer> mp = new HashMap<>();
        for (int j = 0, i = 0; j < n; j++) {
            if (mp.containsKey(word.charAt(j))) {
                i = Math.max(mp.get(word.charAt(j)), i);
            }
            ans = Math.max(ans, j - i + 1);
            mp.put(word.charAt(j), j + 1);
        }
        return ans;
    }
}