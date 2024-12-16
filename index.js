console.log("JavaScript page is running");

function updateClock() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  console.log("Current Time:", hours, minutes, seconds); // Log time for debugging

  // Select elements for updating time
  const hourElement = document.querySelector('.hour');
  const minuteElement = document.querySelector('.minutes');
  const secondElement = document.querySelector('.second');

  // Calculate rotation angles for each hand
  const hoursAngle = (hours % 12) * 30 + (minutes * 0.5); // 30 degrees per hour, 0.5 degree per minute
  const minutesAngle = minutes * 6;                       // 6 degrees per minute
  const secondsAngle = seconds * 6;                       // 6 degrees per second

  // Apply the rotation
  if (hourElement) hourElement.style.transform = `rotateZ(${hoursAngle}deg)`;
  if (minuteElement) minuteElement.style.transform = `rotateZ(${minutesAngle}deg)`;
  if (secondElement) secondElement.style.transform = `rotateZ(${secondsAngle}deg)`;
}

// Call updateClock every 1000ms (1 second)
setInterval(updateClock, 1000);

// Initial call to set time immediately on load
updateClock();


function colorchange()
{
  const body = document.querySelector('body')
  body.classList.toggle('light');


}