
const dayOfWeek = document.querySelector("#dayOfWeek")
const currentTime = document.querySelector("#currentTime")



function getCurrentDayOfWeek() {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDate = new Date();
  const dayOfWeek = currentDate.getDay();
  return daysOfWeek[dayOfWeek];
}

function updateCurrentUTCTime() {
  const element = document.querySelector('[data-testid="currentUTCTime"]');

  function displayCurrentTime() {
    const currentTimeInMillis = Date.now();
    element.textContent = ` ${currentTimeInMillis}`;
  }

  displayCurrentTime();

  setInterval(displayCurrentTime, 1000);
}


updateCurrentUTCTime();

dayOfWeek.textContent = getCurrentDayOfWeek()



