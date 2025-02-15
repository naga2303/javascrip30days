//How to check for two timestamp for the same day?
/**
 * Input: TimeStamp1 = 20-04-2020 , 16:04:55 and 
       TimeStamp2 = 20-04-2020 , 10:22:42 
 */

       var d1 = new Date (2020, 4,20,16, 4,55)
       var d2 = new Date(2020, 4,21,16,4,50)

       let dt1 = d1.getDate()
       let dt2 = d2.getDate()
                              console.log(dt1);
       let day1 = d1.getDay()
       let day2 = d2.getDay()

       dt1==dt2 ? console.log('Same'):console.log('notSame')

       day1==day2 ? console.log('daySame'):console.log('notsame')