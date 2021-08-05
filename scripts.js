const baseUrl= "https://calendarific.com/api/v2/holidays";
const key= "fe90476a3872aadad5ad8deac9c9fdce91d5a989&country=US&year=2021";
let api_key= "?api_key=";
/* full way to call is https://calendarific.com/api/v2/holidays?
api_key=fe90476a3872aadad5ad8deac9c9fdce91d5a989&country=US&year=2021*/

let url;
const nameDay= document.getElementById('dayName');
const nameDes= document.getElementById('eventDate');
const button= document.querySelector('button');
const start= document.getElementById('start');
let allHolidays= document.querySelector('holidayContainer');






function fetchResults(e) {
    // e.preventDefault();
    url = baseUrl + api_key + key;
    console.log("URL:", url);
    fetch(url)
    .then(function (result) {
       console.log(result)
      return result.json();
    })
    .then(function (json) {
      console.log(json);
      displayCalendar(json)
    })
}
//  fetchResults()

// console.log("this is a test");

function displayCalendar(holiday) {
        let calDay = holiday.response.holidays
        // let allHolidays = holiday.response.holidays
        // console.log(allHolidays[currentDisplay]);
        console.log(calDay)

        // while (nameDay.firstChild) {
        //   nameDay.removeChild(nameDay.firstChild);
        // }

        while(nameDes.firstChild) {
          nameDes.removeChild(nameDes.firstChild);
        }

   
    
    for(let i = 0; i < calDay.length; i++) {
        // console.log(calDay[i])
        // pushHol(calDay[i])
        

        // let day = document.createElement('h3');
        // day.innerHTML = calDay[i].date.iso
        // let eventHol = document.createElement('p');
        // eventHol.innerHTML = calDay[i].description
        // let holName = document.createElement('h1');
        // holName.innerHTML = calDay[i].name

        // holName.appendChild(day);
        // holName.appendChild(eventHol);
        // nameDay.appendChild(holName);
    
        
        let startValue = calDay[i].date.iso
        console.log("start", start, "startValue", startValue)
        if (startValue === start.value) {
          let getHolDate = calDay[i].description + calDay[i].name;
          console.log(getHolDate)
          let holName = calDay[i].name;
          let holidayName = document.createElement('h3');
          holidayName.innerHTML = holName
          nameDay.appendChild(holidayName);
          let holDisplay = document.createElement('h2');
          holDisplay.innerHTML = getHolDate           
          nameDes.appendChild(holDisplay);
          } else {
            console.log('Nothing')
          }
     }
            
    }
  

     
      
      button.addEventListener('click', fetchResults); 
      