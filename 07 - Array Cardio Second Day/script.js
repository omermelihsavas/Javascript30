const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

console.log("Datas:");
console.table(people);
console.table(comments);

// First Question
// 1. Is there at least one person younger than 19 in the people table?
console.log("First Question:\nIs there at least one person younger than 19 in the people table?")
const isAdultOfNineteen = people.some(person => ((new Date()).getFullYear()) - person.year >= 19); 
console.log(isAdultOfNineteen);

//Second Question
// 2. Is everyone in the people table over 19 years old?
console.log("Second Question:\nIs everyone in the people table over 19 years old?")
const allAdultOfNineteen = people.every(person => ((new Date()).getFullYear()) - person.year >= 19); 
console.log(allAdultOfNineteen);

//Third Question
// 3. Find the comment with ID 823423 in the comments table.
console.log("Third Question:\nFind the comment with ID 823423 in the comments table.")
const findId = comments.find(comment => comment.id === 823423); 
console.log(findId);

//Fourth Question
// 4. Delete the comment with the ID of 823423.
console.log("First Question:\nDelete the comment with the ID of 823423.")
const index = comments.findIndex(comment => comment.id === 823423); 
console.log(`Index: ${index}`);
comments.splice(index, 2);
console.table(comments);