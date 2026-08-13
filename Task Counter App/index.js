//   function increment(){
// console.log("Increment button clicked");}

// function countdown(){
//     console.log(5);
//     console.log(4);
//     console.log(3);
//     console.log(2);
//     console.log(1);
// }
// countdown();
// countdown();

// function basic()
// {
//     console.log(42);
// }
// basic();

// function logLapTime() {
// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;
// let totalTime = lap1 + lap2 + lap3;
// console.log(totalTime);
// }
// logLapTime();

// let lapsCompleted = 0;
// function incrementLap() {
// lapsCompleted = lapsCompleted + 1;
// console.log(lapsCompleted);
// }
// incrementLap();
// incrementLap();
// incrementLap();
// console.log(lapsCompleted);

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

//let countEl = document.getElementById("count-el")

// console.log(countEl.innerText)

// let count = 0

// function increment() {
//     count +=1
//     countEl.innerText=count

// }

// function save()
// {
//  console.log(count)
// }

// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console

// let name  = "Sadbin"
// let greeting =  "Hi, my name is "

// myGreeting= greeting+name

// console.log(myGreeting)

// Grab the welcome-el paragraph and store it in a variable called welcomeEl

//  let welcomeEl = document.getElementById("welcome-el")

// // // Create two variables (name & greeting) that contains your name
// // // and the greeting we want to render on the page

//  let name = "Sadbin";
// let greeting = "Hello there, ";

// // // Render the welcome message using welcomeEl.innerText

//   welcomeEl.innerText = greeting+name;


// // Add an emoji to the end!
// // WRITE YOUR CODE BELOW HERE
// // HINT: count = count + 1
// welcomeEl.innerText += "😊"

// let countEl = document.getElementById("count-el")
// let count = 0

// function increment() {
//     // Change this to use the plus equal technique you've learned
//     //count = count + 1
//     count += 1
//     countEl.innerText = count
// }

// function save() {
//     console.log(count)
// }

// 1. Grab the save-el paragrah and store it in a variable called saveEl
// let countEl = document.getElementById("count-el")

// let saveEl = document.getElementById("save-el")

// let count = 0

// function increment() {
//     count += 1
//     countEl.textContent = count
// }

// function save() {
//     // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
//     // 3. Render the variable in the saveEl using innerText
//     // NB: Make sure to not delete the existing content of the paragraph
//     let entries = count +" - "
//     saveEl.textContent+=entries
//     console.log(count)
// }

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
   countEl.textContent = count=0
}


