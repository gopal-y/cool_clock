window.onload = () => {
  document.getElementById("menu").addEventListener("click", setToggle);
  const secondsHand = document.getElementById("seconds");
  const minutesHand = document.getElementById("minutes");
  const hoursHand = document.getElementById("hours");

  const digitalHours = document.getElementById("digital-hours");
  const digitalMinutes = document.getElementById("digital-minutes");
  const digitalSeconds = document.getElementById("digital-seconds");

  function setTime() {
    const time = new Date();
    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours();

    const rotateSec = 6 * seconds;
    const rotateMin = 6 * minutes;
    const rotateHour = 30 * hours + minutes / 2;

    secondsHand.style.transform = `rotate(${rotateSec}deg)`;
    minutesHand.style.transform = `rotate(${rotateMin}deg)`;
    hoursHand.style.transform = `rotate(${rotateHour}deg)`;

    digitalHours.innerText = hours;
    digitalMinutes.innerText = minutes;
    digitalSeconds.innerText = seconds;
  }

  setTime();
  setInterval(setTime, 1000);
};

function setToggle(event) {
  if (event.target.classList[0] === "tabs") {
    event.stopPropagation();
    return;
  }

  // remove active
  const tabs = document.getElementsByClassName("tab");
  for (let i = 0; i < tabs.length; i++) {
    if (tabs[i].classList.contains("active")) {
      tabs[i].classList.remove("active");
    }
  }

  event.target.classList.add("active");
}
