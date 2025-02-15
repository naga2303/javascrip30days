//How to use map and filter simultaneously on an array using JavaScript ?

let students = [
    { id: "001", name: "Anish", sports: "Cricket" },
    { id: "002", name: "Smriti", sports: "Basketball" },
    { id: "003", name: "Rahul", sports: "Cricket" },
    { id: "004", name: "Bakul", sports: "Basketball" },
    { id: "005", name: "Nikita", sports: "Hockey" }
]

let baskballPlayers = students.filter(function (student){
  return student.sports =="Basketball"  
}).map(function(student)
{
    return student.name
})
baskballPlayers.forEach((names)=>{
    console.log(names)
})
console.log(baskballPlayers)