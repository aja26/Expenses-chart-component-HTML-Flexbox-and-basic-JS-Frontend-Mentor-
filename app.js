const ul = document.getElementById('chart');
let currentDay = '';
let weekdays = [];

// getting data from data.json file
const barData = fetch("/data.json")
.then(res => res.json())
.then(data => data.forEach(item => {

  const weekDay = item.day;
  const val = item.amount;

  weekdays.push(weekDay);
  
  // Value as percentage to set height
  const barHeight = Math.floor((val/166)*100) * 2;

  const day = `   
                <li class="day"> ${weekDay}
                      <span class="amount ${weekDay}" style="height:${barHeight}%;">
                         <p class="value">£${val}</p>
                      </span>
                  </li> 
                `;

 ul.innerHTML += day;

}));

setTimeout(() => {
  setToday();
}, 200);

// Add todays .class to turn correct day on bar chart green
function setToday(){
let today = new Date().getDay();
const days = document.querySelectorAll('.amount');
currentDay = weekdays.length - 1;

  if(today === 0){
    days[currentDay].classList.add('active');
  } else{ 
    days[today -1].classList.add('active');
  }
}

