let currDiv = 3;
let correctColumn;
let correctAnswer;
let ninjas;
const main = () => {
  document.getElementById(
    `psec${currDiv}`
  ).innerHTML = `<img src="../assets/alien.png" alt="alien" />`;

  ninjas = document.querySelectorAll(".enemylimit");
  let speed = new Array(5);
  for (let i = 0; i < 5; i++) {
    speed[i] = Math.floor(Math.random() * 10);
  }
  setInterval(() => {
    ninjas.forEach((ninja, i) => {
      speed[i] += Math.random() * 10;
      if (speed[currDiv] > 90) {
        alert("Game Over!!!");
        return;
      }
      ninja.style.marginLeft = `${speed[i]}%`;
    });
  }, 10000);

  window.addEventListener("keydown", keyPressed);

  generateQues();
};

const generateQues = () => {
  firstVal = new Array(5);
  secondVal = new Array(5);
  for (let index = 0; index < 5; index++) {
    firstVal[index] = Math.floor(Math.random() * 15) + 1;
  }
  for (let index = 0; index < 5; index++) {
    secondVal[index] = Math.floor(Math.random() * 10) + 1;
  }
  let h3s = document.querySelectorAll(".visual h3");
  h3s.forEach((h3, index) => {
    h3.innerText = `${firstVal[index]} X ${secondVal[index]} = ?`;
  });
  correctColumn = Math.floor(Math.random() * 5);
  correctAnswer = firstVal[correctColumn] * secondVal[correctColumn];
  document.querySelectorAll(".playersec h3")[currDiv - 1].innerText =
    correctAnswer;
};

const showFire = () => {
  ninjas[currDiv - 1].setAttribute("class", "gunshot");
};

const unshowFire = () => {
  ninjas[currDiv - 1].removeAttribute("class");
};

const keyPressed = (event) => {
  console.log("i am entering from keypressed")

  if (event.keyCode === 40) {
    if (currDiv >=5) {
      console.log("i am exiting from keypressed")
      return;
    }
    document.getElementById(`psec${currDiv}`).innerHTML = ``;
    console.log(document.querySelectorAll(".playersec h3")[currDiv].innerText);
    document.querySelectorAll(".playersec h3")[currDiv - 1].innerText = ``;
    if (currDiv >=5) {
      console.log("i am exiting from keypressed")
      return;
    } else {
      currDiv = currDiv + 1;
    }
    console.log(currDiv + " upayed ");
    document.getElementById(`psec${currDiv}`).innerHTML = `
      <img src="../assets/alien.png" alt="alien" />
    `;
    document.querySelectorAll(".playersec h3")[currDiv - 1].innerText =
      correctAnswer;
  } else if (event.keyCode === 38) {
    if (currDiv <=1) {
      console.log("i am exiting from keypressed")

      return;
    }
    document.getElementById(`psec${currDiv}`).innerHTML = ``;
    document.querySelectorAll(".playersec h3")[currDiv - 1].innerText = ``;
    if (currDiv <=1) {
      console.log("i am exiting from keypressed")

      return;
    } else {
      currDiv = currDiv - 1;
    }
    console.log(currDiv);

    document.getElementById(`psec${currDiv}`).innerHTML = `
        <img src="../assets/alien.png" alt="alien" />
    `;
    document.querySelectorAll(".playersec h3")[currDiv - 1].innerText =
      correctAnswer;
    console.log("arrow up pressed");
  } else if (event.keyCode == 32) {
    console.log(currDiv);
    console.log(correctColumn);

    showFire();
    setTimeout(function () {
      unshowFire();
      if (currDiv === correctColumn + 1) {
        alert("you won");
      } else if (currDiv !== correctColumn + 1) {
        alert("You lost");
      }
      
    }, 100);
  }
};

main();
