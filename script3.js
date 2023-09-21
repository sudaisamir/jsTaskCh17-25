            // !!!!!!!!!!!! assigment 17-20 !!!!!!!!!!!!  \


            
// ?Q1 answer

var Arr=[[,],[,],[,]];

// ?Q2 answer

var Arr=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];

// ?Q3 answer

var i=1;

for (i=1;i<=10;i++)
{      
    document.write(i ,"<br>");
}

// ?Q4 answer
const number = parseInt(prompt('Enter an integer: '));


const range = parseInt(prompt('Enter a range: '));


for(let i = 1; i <= range; i++) {
    const result = i * number;
    console.log(`${number} * ${i} = ${result}`);
}

// ?Q5 answer

const fruits = ["apple", "banana", "mango", "orange", "strawberry"];


for (let i = 0; i < fruits.length; i++) {
    console.log(`element at Index ${i}: ${fruits[i]}`);
}


// ?Q6 answer

document.write("Counting:")
document.write("<br>")
for (var i=1;i<=15;i++){
    document.write(`${i} , `)
}
document.write("<br>");
document.write("Reverse Counting:")
document.write("<br>");
for (var i = 10; i >= 1; i--) {
    document.write(`${i} , `);
}
document.write("<br>")
document.write("Even:")
document.write("<br>");
for(var i=0;i<=20;i++){
    if(i%2==0){
        document.write(`${i} , `);  
    }
}
document.write("<br>")
document.write("Odd:")
document.write("<br>");
for (var i = 0; i <= 20; i++) {
    if (i % 2 !== 0) {
    document.write(`${i} , `);
    }
}
document.write("<br>")
document.write("Series:")
document.write("<br>")
for (var i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
    document.write(`${i}K , `);
    }
}




// ?Q7answer


const A = ["cake", "apple pie", "cookie", "chips", "patties"];


function searchItem(item) {
    for (let i = 0; i < A.length; i++) {
        if (A[i] === item) {
            return true; 
        }
    }
    return false; 
}


const userInput = prompt("Enter an item to search:");


const isFound = searchItem(userInput);


if (isFound) {
    alert(`"${userInput}" is found in the list.`);
} else {
    alert(`"${userInput}" is not found in the list.`);
}


// ?Q8 answer

const AA = [24, 53, 78, 91, 12];


let largest = AA[A0]; 


for (let i = 1; i < AA.length; i++) {
    if (AA[i] > largest) {
        largest = AA[i];
    }
}

// ?Q9 answer

const B = [24, 53, 78, 91, 12];


let Smallets = B[0]; 


for (let i = 1; i < B.length; i++) {
    if (B[i] < Smallets) {
        Smallets = B[i];
    }
}


// ?Q10 answer


for (let i = 1; i <= 100; i++) {
    
    if (i % 5 === 0) {
        console.log(i);
    }
}



              // !!!!!!!!!!!! assigment 21-25 !!!!!!!!!!!!  



//?Q1 answer

var fname=prompt("Enter first name")
var lname=prompt("Enter last name")
var fullname=fname+""+lname
alert("Welcome, "+ fullname)

//?Q2 answer

var favpho=prompt("Enter your favourite phone")
document.write("My favourite phone is: ",favpho)
document.write("<br>")
document.write("Length of string ",favpho.length)

//?Q3answer

var str="Pakistani"
document.write("String: ",str)
document.write("<br>")
document.write("Index of 'n': ",str.indexOf("n"))

//?Q4 answer

var str="Hello World"
document.write("String: ", str)
document.write("<br>");
document.write("Last index of 'l': ", str.lastIndexOf("l"))

//?Q5 answer

var str = "Pakistani";
document.write("String: ", str);
document.write("<br>");
document.write("Character at index 3: ", str.charAt(3));

//?Q6 answer

var fname = prompt("Enter first name");
var lname = prompt("Enter last name");
alert("Welcome, " + fname.concat(" ",lname));

//?Q7 answer

var city="Hyderabad"
document.write("City: ",city)
document.write("<br>")
document.write("After replacement: ",city.replace("Hyder","Islam"))

//?Q8 answer

var msg = "Ali and Sami are best friends. They play cricket and football together."
document.write("message: ", msg)
document.write("<br>")
document.write("After replacement: ", msg.replace(/and/g,"&"))

//?Q9 answer

var str="472"
document.write("Value: ",str)
document.write("<br>")
document.write("Type: ",typeof(str))
document.write("<br>")
var num=parseInt(str)
document.write("Value: ", num);
document.write("<br>");
document.write("Type: ", typeof(num));

//?Q10 answer

var uinp=prompt("Enter text")
document.write("User input: ",uinp)
document.write("<br>")
document.write("Upper case: ",uinp.toUpperCase())

//?Q11 answer

var uinp = prompt("Enter text");
document.write("User input: ", uinp);
document.write("<br>");
document.write("Title case: ",uinp.charAt(0).toUpperCase() + uinp.slice(1));

//?Q12 answer

var num=35.36
document.write("Number: ",num)
document.write("<br>")
var str=num.toString()
document.write("Result: ",str.replace(".",""))

//?Q13 answer

var username=prompt("Enter username")
var isvalid=true
for (var i=0;i<=username.length;i++){
    ccode=username.charCodeAt(i)
    if(ccode === 33 || ccode === 44 || ccode === 46 || ccode === 64){
        isvalid=false
        alert("Please Enter a valid username")
    }
}
if(isvalid==true){
    alert("Your username is correct")
}

//?Q14 answer

var items=["cake","apple pie","cookie","chips","patties"]
var search=prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am")
var searchitem=search.toLowerCase()
var itempresent=false
for (var i=0;i<items.length;i++){
    if (searchitem==items[i]){
        itempresent=true
        document.write(`${search} is <b>available</b> at index ${i} in our bakery`)
        break
    }
}
if(itempresent==false){
    document.write(`We are sorry, ${search} is <b>not available</b> in our bakery`)
}

//?Q15 answer

var inppass=prompt("Enter Password")
var passw = /^[A-Za-z]\w{6,}$/;
if (inppass.match(passw)) {
    alert("Correct, try another...");
} else {
    alert("Wrong...!");
}

//?Q16 answer

var university = "University of Karachi"
var university=university.split("")
for (var i = 0; i < university.length; i++){
    document.write(university[i])
    document.write("<br>")
}

//?Q17 answer

var uinp=prompt("Enter text")
document.write("User input: ",uinp)
document.write("<br>")
document.write("Last character of input: ",uinp.charAt((uinp.length)-1))

//?Q18 answer


var text="The quick brown fox jumps over the lazy dog"
document.write("Text: ",text)
document.write("<br>")
var lowtext = text.toLowerCase();
var word=lowtext.split(" ")
count=0
for (var i=0;i<word.length;i++){
    if(word[i]==="the"){
        count++
    }
}
document.write(`There are ${count} occurence of the word 'the'`)