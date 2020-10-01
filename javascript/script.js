function digiClock() {
  var date = new Date();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  var dayName = days[date.getDay()];
  var month = months[date.getMonth()];
  var dayNum = date.getDate();
  var year = date.getFullYear();
  var hours = date.getHours();
  var minutes = ("0" + date.getMinutes()).slice(-2);
  var seconds = ("0" + date.getSeconds()).slice(-2);
  hours = hours > 12 ? hours - 12 : hours;
  finalHours = ("0" + hours).slice(-2);
  format = hours < 12 ? "AM" : "PM";

  let ids = ["day", "month", "date", "year", "hour", "min", "sec"];
  let values = [dayName, month, dayNum, year, finalHours, minutes, seconds];

  for (var i = 0; i < ids.length; i++)
    document.getElementById(ids[i]).innerHTML = values[i];
}

function startClock() {
  digiClock();
  window.setInterval("digiClock()", 1);
}
