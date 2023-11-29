//How to check if one date is between two dates in JavaScript ?

/**
 *  Date 1 = "06/04/2019"
        Date 2 = "07/10/2019"
        <br>Date_to_check = "02/12/2019"
 */

       var date1 = "06/04/2022"
       var date2 = "06/10/2022"
       var dtToCheck = "06/07/2022"

       date1 = new Date(date1);
       date2 = new Date(date2);
       dtToCheck = new Date(dtToCheck);

       if((dtToCheck.getDate() > date1.getDate()) && (dtToCheck.getDate() < date2.getDate()))
       {
        console.log('In between')
       }
       else
       {
        console.log('Not in between')
       }