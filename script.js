const birthday = new Date("2021-07-13 00:00:01");

function countdown() {
  const currentDate = new Date();

  const totalseconds = Math.floor((birthday - currentDate) / 1000);

  const days = Math.floor(totalseconds / 3600 / 24);
  const day = document.querySelector(".days");
  day.innerHTML = days;

  const hours = Math.floor((totalseconds / 3600) % 24);
  const hour = document.querySelector(".hours");
  hour.innerHTML = formatTime(hours);

  const minutes = Math.floor((totalseconds / 60) % 60);
  const mint = document.querySelector(".minutes");
  mint.innerHTML = formatTime(minutes);

  const seconds = totalseconds % 60;
  const sec = document.querySelector(".seconds");
  sec.innerHTML = formatTime(seconds);
}
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
countdown();

setInterval(countdown, 1000);
