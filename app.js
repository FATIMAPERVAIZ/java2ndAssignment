
//===============ASSIGNMENT#11-12=======================//
//1
var char = prompt("Enter a character:");

//Get the ASCII code of the character
var ascii = char.charCodeAt(0);
 if (ascii >= 65 && ascii <= 90) {
    console.log(char + " is an uppercase letter.");
} else if (ascii >= 97 && ascii <= 122) {
    console.log(char + " is a lowercase letter.");
} else {
    console.log(char + " is a number.");
}
//2
var num1 = parseInt(prompt("Enter the first integer:"), 10);
var num2 = parseInt(prompt("Enter the second integer:"), 10);

if (num1 > num2) {
    alert("The larger number is: " + num1);
} else if (num2 > num1) {
    alert("The larger number is: " + num2);
} else {
    alert("The two numbers are equal.");
}
//3 
var no =parseFloat(prompt("enter a number"),10)
    if(no==0.0)
    alert("Enter number equyals to 0")
    else if(no>0.0)
    alert("Enter number is positive")
    else
alert("Enter number is negative")
//4
var checkVowel=prompt("Enter a character")
checkVowel=checkVowel.toLowerCase()
var isvowel=(checkVowel=='a'||checkVowel=='e'||checkVowel=='o'||checkVowel=='i'||checkVowel=='u')
alert("Is enter character a vowel: "+isvowel)
//5
var correctPassword = "myPassword123";

var enteredPassword = prompt("Please enter your password:");

if (enteredPassword === null || enteredPassword === "") {

    alert("Please enter your password");
} else if (enteredPassword === correctPassword) {

    alert("Correct! The password you entered matches the original password");
} else {

    alert("Incorrect password");
}
//6
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}else{
greeting = "Good evening";
}
//7
var time = parseInt(prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM):"), 10);

if (time >= 0 && time < 2400) {
    var hours = Math.floor(time / 100);
    var minutes = time % 100;
    var period = "AM";

    if (hours >= 12) {
        period = "PM";
        if (hours > 12) {
            hours -= 12;
        }
    } else if (hours === 0) {
        hours = 12;
    }

    var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

 alert("The time is: " + hours + ":" + formattedMinutes + " " + period);
} else {
 alert("Invalid time entered. Please enter time in 24-hour format (0000 to 2359).");
}
// //=============ASSIGNMENT#14-16======================//
//1
var studentNames = [];
//2
var studentNames = new Array();
// 3. Declare and initialize a strings array
var stringsArray = ["apple", "banana", "cherry"];

// 4. Declare and initialize a numbers array
var numbersArray = [1, 2, 3, 4, 5];

// 5. Declare and initialize a boolean array
var booleanArray = [true, false, true, false];

// 6. Declare and initialize a mixed array
var mixedArray = ["hello", 18622, true, null, undefined, { name: "fatima" }];
//7
var Qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write("<h1>Qualifications:</h1>");
document.write("<ol>");
for (var i = 0; i < Qualifications.length; i++) {
    document.write("<li>" + Qualifications[i] + "</li>");
}
document.write("</ol>");

//8
var studentN=['Ali','Sana','Bilal']
var obtScore = [480,400,330]
var maxScore = 500;
for (let i=0;i<3;i++){
    var percentage = (obtScore[i]/maxScore)*100
    document.write("<br><br>Score of "+studentN[i]+" is "+obtScore[i]+". Percentage: "+percentage.toFixed(2)+"%")
}
//9
        // Initialize an array with color names
        var colors = ["Red", "Green", "Blue", "Yellow", "Purple"];

        // Display the initial array elements
        document.write("<h1>Colors Array</h1>");
        document.write("<p>Initial Array: " + colors.join(", ") + "</p>");

        // a. Add color to the beginning
        var colorToAddBeginning = prompt("Enter a color to add to the beginning of the array:");
        colors.unshift(colorToAddBeginning);
        document.write("<p>After adding color to the beginning: " + colors.join(", ") + "</p>");

        // b. Add color to the end
        var colorToAddEnd = prompt("Enter a color to add to the end of the array:");
        colors.push(colorToAddEnd);
        document.write("<p>After adding color to the end: " + colors.join(", ") + "</p>");

        // c. Add two more colors to the beginning
        colors.unshift("Pink", "Orange");
        document.write("<p>After adding two more colors to the beginning: " + colors.join(", ") + "</p>");

        // d. Delete the first color
        colors.shift();
        document.write("<p>After deleting the first color: " + colors.join(", ") + "</p>");

        // e. Delete the last color
        colors.pop();
        document.write("<p>After deleting the last color: " + colors.join(", ") + "</p>");

        // f. Add color at user-defined index
        var indexToAdd = parseInt(prompt("Enter the index at which you want to add a color:"), 10);
        var colorToAddAtIndex = prompt("Enter the color name to add at index " + indexToAdd + ":");
        colors.splice(indexToAdd, 0, colorToAddAtIndex);
        document.write("<p>After adding color at index " + indexToAdd + ": " + colors.join(", ") + "</p>");

        // g. Delete color(s) from user-defined index
        var indexToDelete = parseInt(prompt("Enter the index from which you want to delete color(s):"), 10);
        var numberOfColorsToDelete = parseInt(prompt("Enter the number of colors you want to delete:"), 10);
        colors.splice(indexToDelete, numberOfColorsToDelete);
        document.write("<p>After deleting " + numberOfColorsToDelete + " color(s) from index " + indexToDelete + ": " + colors.join(", ") + "</p>");
        //10
        var studentScores = [320, 230, 480, 120];

        document.write("<p>Scores of Student: " + studentScores.join(", ") + "</p>");

        for (var i = 0; i < studentScores.length; i++) {
            for (var j = 0; j < studentScores.length - 1 - i; j++) {
                if (studentScores[j] > studentScores[j + 1]) {

                    var temp = studentScores[j];
                    studentScores[j] = studentScores[j + 1];
                    studentScores[j + 1] = temp;
                }
            }
        }
        document.write("<p>Ordered Scores of Student: " + studentScores.join(", ") + "</p>");
        //11
        var cities = ['Karachi','Lahora','Islamabad','Quetta','Peshawar']
        document.write("<br>Cities list:<br>"+cities.join(", "))
        var newCities = cities.slice(2,4)
        document.write("<br>Selected Cities list:<br>"+newCities.join(", "))
        //12
 //       Array of strings
        var strings = ["This ", " is ", " my ", " cat"];
        document.write("<br><br>Array:<br>"+strings.join(","))

        var singleString = strings.join('');
        document.write("<br>String:<br>"+singleString)
        //13
        var addingarr=[];
        var elements = prompt("How many elements you want to enter in ARRAY")
        for(let i=0;i<elements;i++){
            var increment = prompt("Enter elements")
            addingarr.push(increment)
        }
        document.write("<br><br>Output:<br>"+addingarr.join(","))
        var release;
        for(let i=0;i<elements;i++){
            release=addingarr.shift()
            document.write("<br>Out:<br>"+release)

        }
        //14
        var addingarr=[];
        var elements = prompt("How many elements you want to enter in ARRAY")
        for(let i=0;i<elements;i++){
            var increment = prompt("Enter elements")
            addingarr.push(increment)
}
        document.write("<br><br>Output:<br>"+addingarr.join(","))
        var release;
        for(let i=0;i<elements;i++){
            release=addingarr.pop()
            document.write("<br>Out:<br>"+release)

        }
        14
        let phoneManufacturer = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

        document.write("<label for='phone-manufacturers'>Select a phone manufacturer:</label>");
        document.write("<select id='phone-manufacturers' name='phone-manufacturers'>");

        for (let i = 0; i < 6; i++) {
            document.write("<option value='" + phoneManufacturer[i] + "'>" + phoneManufacturer[i] + "</option>");
        }

        document.write("</select>");

//=============ASSIGNMENT#17-20======================//
1
const arr=['','','','']
//2
var multiArray=[[0,1,2,3],[1,0,1,2],[2,1,0,1]]
//3
 for(let i=0;i<=10;i++){
   console.log(i);
 }
 //4
let number=prompt("enter table number");
let length= prompt("enter length");
console.log("Multipliation of table "+number)
console.log("length "+length)
for (let i=1;i<=length;i++){
    console.log(number+" X "+i+" = "+number*i);
}
//5
//Array of fruits
const fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (let i = 0; i < fruits.length; i++) {
    console.log("Element at index "+i+" is "+fruits[i]);
}
// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// Counting: 1, 2, 3, ..., 15
let countingSeries = "Counting: ";
for (let i = 1; i <= 15; i++) {
    countingSeries += i + ", ";
}
console.log(countingSeries);

// Reverse counting: 10, 9, 8, ..., 1
let reverseSeries = "Reverse counting: ";
for (let i = 10; i >= 1; i--) {
    reverseSeries += i + ", ";
}
console.log(reverseSeries);

// Even: 0, 2, 4, ..., 20
let evenSeries = "Even: ";
for (let i = 0; i <= 20; i += 2) {
    evenSeries += i + ", ";
}
console.log(evenSeries);

// Odd: 1, 3, 5, ..., 19
let oddSeries = "Odd: ";
for (let i = 1; i <= 19; i += 2) {
    oddSeries += i + ", ";
}
console.log(oddSeries);

//Series: 2k, 4k, 6k, ..., 20k
let seriesK = "Series: ";
for (let i = 2; i <= 20; i += 2) {
    seriesK += i + "k, ";
}
console.log(seriesK);
//7
const A = ["cake", "apple pie", "cookie", "chips", "patties"]
var order= prompt("Welcome to ABC Bakery. What do you want to order sir/Ma'am? ")
let found;
for(found=0;found<5;found++){
 if(A[found]==order){
    alert(order+" is available at index "+found+" in our bakery")
    break;
 }
}
if( found==5){
alert("We are sorry "+order+" is not available in our bakery")
}
//8
console.log("Array items: 24,53,78,91,12")
const max=[24,53,78,91,12]
var temp=max[0];
for (var j = 1; j < 5; j++) {
    if (max[j] > temp) {
        temp=max[j]; 
    }
}

console.log("The largest number is "+temp)
//9
console.log("Array items: 24,53,78,91,12")
const min=[24,53,78,91,12]
var Temp=min[0];
for (var j = 1; j < 5; j++) {
    if (min[j] <Temp) {
        Temp=max[j]; 
    }
}
console.log("The smallest number is "+Temp)
//10

for(let i=1;i<=100;i++){
    if((i%5)==0){
        console.log(i)
    }

   
}
//==================ASSIGNMENT#21-25======================//
// 1 greeting full name 
var firstName = prompt("Enter first name:")
var lastname = prompt("Enter last name:")
var fullName = firstName+" "+lastname;
alert("Welcome "+fullName+"!")

// 2 take input fav mobile and show its length in browser
var mobile = prompt('Enter your Favorite phone Name')
var moblength = mobile.length;

document.write("<br><br>The length of your favorite mobile is " + moblength + "<br>");

// 3 find index of n in a word
var word = "Pakistani";
var Nindex = word.indexOf('n');

document.write("<br><br>The index of n in Pakistani is  " + Nindex + "<br>");


// 4 last index of l in a phrase
var phrase = "Hello World";
var Lindex = word.lastIndexOf('l');

document.write("<br><br>The index of l in Hello World is  " + Lindex + "<br>");

// 5 character of a 3rd index 
var word3 = "Pakistani";
var thirdchar = word.charAt('3');

document.write("<br><br>The character of a 3rd index  is  " + thirdchar + "<br>");
//6

var firstname = prompt('Enter your First Name')
console.log(firstname);
var secname = prompt('Enter your Second Name')
console.log(secname);

alert("HEY!  " + firstname +" "+ secname + "\n good to see you!");
//7
var originalVar='Hyderabad'
var replaceVar=originalVar.replace("Hyderabad","Islamabad")
document.write("<br><br>City:<br>"+originalVar+"<br>After replacement:<br>"+replaceVar)
//8
var message = "Ali and sami are best friends. They play football and cricket together."
var newMessage = message.replace("and","&")
document.write("<br><br>Original:<br>"+message+"<br>After replacement:<br>"+newMessage)
//9
var value ="472"
var newvalue = parseInt(value);
document.write("<br><br>Value: "+value+"<br>Type: "+typeof(value)+"<br>Value: "+newvalue+"<br>Type: "+typeof(newvalue))
//10
var input = "peanuts";
var output = input.toUpperCase();
document.write("<br><br>Input: "+input+"<br>To uppercase: "+output)
//11 
var userinput  = prompt("Enter a string:")
var titlecase = "";
if (userinput !== null && userinput !== "") {
    titlecase = userinput.charAt(0).toUpperCase() + userinput.slice(1).toLowerCase();
} else {
    titlecase = "No input provided.";
}

document.write("Title case: " + titlecase);

//12
var numb = 35.36;
var str = numb.toString().replace('.','');
document.write("<br>the result is :  " + str);
//13 Validate A username
var username = prompt('Enter your name');
var valid = true;
for (var i =0 ; i< username.length ; i++)
    {
        var charcode=username.charCodeAt(i);

     if( charcode==33 ||charcode==44 ||charcode==46 ||charcode==64 )
        {
            alert("Please enter a valid username");
            valid=false;
            break;
        } }
        if(valid)
            {
                alert ("your user name is valid "+ username);
            }
    
    
  
  //14
  var bakery2 = ["cake", "apple pie", "cookie", "chips", "patties"];
  console.log(bakery2);
    var userinput2= prompt('Enter an item').toLowerCase();
    var valid2= false;
    if (userinput2 !== null) {
        userinput2 = userinput2.toLowerCase();

    

    for (var i =0 ; i< bakery2.length ; i++)
        {
            if(bakery2[i].toLowerCase() ===userinput2)
                {
                    valid2=true;
                    break;
                }
        }
    }
        if(valid2)
            {
                alert (userinput2  +"  is avaliable in the list");
            }
     else{
        alert (userinput2  +"  is  not avaliable in the list");
     }
//15
function checkPassword(password) {
    if (password.length < 6) {
        return "Password must be at least 6 characters long.";
    }

    let hasAlphabet = false;
    let hasNumber = false;
    let startsWithAlphabet = false;

    for (let i = 0; i < password.length; i++) {
        let ascii = password.charCodeAt(i);
        if ((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) {
            hasAlphabet = true;
        }
        if (ascii >= 48 && ascii <= 57) {
            hasNumber = true;
        }
        if (i === 0 && ((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122))) {
            startsWithAlphabet = true;
        }
    }

    if (!hasAlphabet) {
        return "Password must contain at least one alphabet.";
    }

    if (!hasNumber) {
        return "Password must contain at least one number.";
    }

    if (!startsWithAlphabet) {
        return "Password must not start with a number.";
    }

    return "";
}

let password = prompt("Enter your password:");

while (true) {
    let validationMessage = checkPassword(password);
    if (validationMessage === "") {
        alert("Your password is valid!");
        break;
    } else {
        alert("Invalid password: " + validationMessage);
        password = prompt("Enter your password:");
    }
}
//16

var university = "University of Karachi";
var universityArray = [];

for (var i = 0; i < university.length; i++) {
    universityArray.push(university[i]);
}
for (var i = 0; i < universityArray.length; i++) {
    document.write(universityArray[i] + "<br>");
}
//17
var userInput = prompt("Enter a word")
var lastchar = userInput.charAt(userInput.length-1)
document.write("<br><br>User input: "+userInput+"<br>last character of input: "+lastchar)
//18
const sentence = "The quick brown fox jumps over the lazy dog";
const word1 = "the";

const lowerCaseSentence = sentence.toLowerCase();

// Split the sentence into an array of words
const wordsArray = lowerCaseSentence.split(' ');

let cnt = 0;

for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i] === word1) {
        cnt++;
    }
}
document.write("<br><br>Text: "+sentence+"<br>There are "+cnt+" occurence(s) of '"+word1+"'")













