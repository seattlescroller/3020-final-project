//need to add DOM Content Loaded event listener 
//get the current day info from Browser; with first two letters, find proper day
let day = new Date().toDateString();
let firstTwoLettersCurrentDay = day[0] + day[1];
let dayOfWeek = "";
if (firstTwoLettersCurrentDay == "Mo") {
  dayOfWeek = "Monday";
}
if (firstTwoLettersCurrentDay === "Tu") {
  dayOfWeek = "Tuesday";
}
if (firstTwoLettersCurrentDay === "We") {
  dayOfWeek = "Wednesday";
}
if (firstTwoLettersCurrentDay === "Th") {
  dayOfWeek = "Thursday";
}
if (firstTwoLettersCurrentDay === "Fr") {
  dayOfWeek = "Friday";
}
if (firstTwoLettersCurrentDay === "Sa") {
  dayOfWeek = "Saturday";
}
if (firstTwoLettersCurrentDay === "Su") {
  dayOfWeek = "Sunday";
}
console.log(`Hey, it's ${dayOfWeek}!`);
let today = document.querySelector('.day-header');
today.innerHTML = `Today is ${dayOfWeek}`;
//Day assign code end  
//take input and add to list of day selected; need to review order of below:
document.addEventListener("DOMContentLoaded", function (e) {
  document.addEventListener("submit", function (e) {
    e.preventDefault();
    let userInput = document.querySelector('input[name=user-input]');
    let userInputValue = userInput.value;
    let selectDay = document.querySelector('select[name=day]');
    let selectedDay = selectDay.value;
    let newInputElement = document.createElement("li");
    newInputElement.innerHTML = userInputValue;   
    //need to review the below list -- not currently in use 
    let mondayList = document.querySelector('.monday');
    let tuesdayList = document.querySelector('.tuesday');
    let wednesdayList = document.querySelector('.wednesday');
    let thursdayList = document.querySelector('.thursday');
    let fridayList = document.querySelector('.friday');
    let saturdayList = document.querySelector('.saturday');
    let sundayList = document.querySelector('.sunday');    
    /* Below code adds the form input as a list item to the day which was selected.  
        This works but would be good to shorten or improve upon. (Use above dayLists and create function!!)
    */
    if (selectedDay == "monday") {
      let list = document.querySelector('.monday')
      list.appendChild(newInputElement);
      userInput.value = '';
    }
    if (selectedDay == "tuesday") {
      let list = document.querySelector('.tuesday')
      list.appendChild(newInputElement);
      userInput.value = '';
    }
    if (selectedDay == "wednesday") {
      let list = document.querySelector('.wednesday')
      list.appendChild(newInputElement);
      userInput.value = '';
    }
    if (selectedDay == "thursday") {
      let list = document.querySelector('.thursday')
      list.appendChild(newInputElement);
      userInput.value = '';
    }
    if (selectedDay == "friday") {
      let list = document.querySelector('.friday')
      list.appendChild(newInputElement);
      userInput.value = '';
    }
    if (selectedDay == "saturday") {
      let list = document.querySelector('.saturday')
      list.appendChild(newInputElement);
      userInput.value = '';
    }
    if (selectedDay == "sunday") {
      let list = document.querySelector('.sunday')
      list.appendChild(newInputElement);
      userInput.value = '';
    }
    console.log(`added ${userInputValue} to ${selectedDay}`);
  });
});
