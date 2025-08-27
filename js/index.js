  // Heart Increasing 
let heartCount=document.getElementById('heart-count');
let count = 0;
let heartButtons= document.getElementsByClassName('heart-btn');

for (let btn of heartButtons) {
  btn.onclick =function() {
    count++;
    heartCount.innerText = count;
  }
}
// Coin element in navbar

let coins =100; 
const coinDisplay =document.querySelector('.coin-display');
const callHistorySection= document.querySelector('.call-history-list');

function handleCall(serviceName, serviceNumber) {
  if (coins < 20) {
    alert("Not enough coins to make a call. You need at least 20 coins.");
    return;
  }
  coins -=20;
  coinDisplay.innerText =coins;
  alert(`Calling ${serviceName} at ${serviceNumber}`);

  const now = new Date();
  const timeString = new Date().toLocaleTimeString();

  const entry = document.createElement('div');
  entry.className ='flex justify-between items-center p-4 rounded-xl bg-[#FAFAFA]';
  entry.innerHTML= `
    <div>
      <p class="font-medium">${serviceName}</p>
      <p class="text-sm text-gray-500">${serviceNumber}</p>
    </div>
    <p class="text-sm text-gray-400">${timeString}</p>
  `;
  callHistorySection.appendChild(entry);
}
// Call History
let buttons =document.querySelectorAll('.call-button');

for (let i = 0; i < buttons.length; i++) {
  let button= buttons[i];
  let card =button.closest('div.rounded-xl');

  let titleElement= card.querySelector('.service-title');
  let numberElement = card.querySelector('.service-number');

  let serviceName = '';
  let serviceNumber= '';

  if (titleElement) {
    serviceName= titleElement.innerText;
  }

  if (numberElement) {
    serviceNumber = numberElement.innerText;
  }

  button.addEventListener('click', function() {
    handleCall(serviceName, serviceNumber);
  });
}
// copy part

let copyCount = 0;
const copyDisplay = document.querySelector('.navbar-copy span');
const copyButtons= document.querySelectorAll('.copy-btn');
for (const button of copyButtons) {
  button.addEventListener('click', function() {
    const card= button.closest('.card');
    const numberElement =card.querySelector('.service-number');
    if (numberElement) {
      const number= numberElement.innerText;
      copyCount++;
      copyDisplay.innerText=copyCount;
      alert(`The number has been copied: ${number}`);
    }
  });
}

// JS to clear call history
document.getElementById('clear-history').addEventListener('click', function () {
  const historyList= document.querySelector('.call-history-list');
  historyList.innerHTML= '';
});






