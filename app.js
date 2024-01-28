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
                      <div class="amount ${weekDay}" style="height:${barHeight}%;">
                         <p class="value">£${val}</p>
                      </div>
                  </li> 
                `;

 ul.innerHTML += day;

}));

setTimeout(() => {
  setToday();
}, 300);

// Add todays .class to turn correct day on bar chart green
function setToday(){
let today = new Date().getDay();
const days = document.querySelectorAll('.amount');

if(today === 0){
  currentDay = days[6];
  console.log(1, days);
} else if (today > 6){
  currentDay = days[today - 1];
   console.log(2);
} else {
  currentDay = days[today -1];
   console.log(3);
}

currentDay.classList.add('active');
}
