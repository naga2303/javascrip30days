function displayInformation() {
    // var library is defined, use it to print the information
   /*if(library.readingStatus)
       {
           console.log("Already read '"+library.title+"' by '"+library.author+"'")
       }
   else
       {
            console.log("You still need to read '"+library.title+"' by '"+library.author+"'")
       }*/
       library.forEach(function(book) {
        if(book.readingStatus)
        {
            console.log("Already read '"+book.title+"' by '"+book.author+"'")
        }
        else
        {
             console.log("You still need to read '"+ book.title+"' by '"+book.author+"'")
        }
        //console.log("Title: " + book.title + ", Reading Status: " + (book.readingStatus ? "Read" : "Unread"));
    });
    
} 

// tail starts here
var library = [ 
   {
       title: 'Bill Gates',
       author: 'The Road Ahead',
       readingStatus: true
   },
   {
       title: 'Steve Jobs',
       author: 'Walter Isaacson',
       readingStatus: true
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       readingStatus: false
   }
];

displayInformation();