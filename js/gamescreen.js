let currDiv = 3;
let correctColumn;
let correctAnswer;
let ninjas
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
  document.querySelectorAll(".playersec h3")[currDiv-1].innerText =
    correctAnswer;
};

const showFire = () => {
  // const cannonStop = document.querySelector(`#psec${currDiv}`).getBoundingClientRect().left
  // // let ufos = document.querySelectorAll(".ufo .img-objects")
  // const ufoStop = ninjas[currDiv].getBoundingClientRect().right
  // let div = document.createElement("div")
  // div.setAttribute("class", "gunshot")
  // div.style.width = `${cannonStop - ufoStop}px`
  // const right = document.querySelector(`#psec${currDiv}`).getBoundingClientRect().right
  // const left = document.querySelector(`#psec${currDiv}`).getBoundingClientRect().left
  // div.style.marginLeft = `${(right-left)/2}px`
  // console.log(div)
  // document.querySelector(`#psec${currDiv}`).appendChild(div)
  // ninjas[currDiv-1].style.backgroundColor="orange"
  ninjas[currDiv-1].setAttribute("class", "gunshot")

}


const keyPressed = (event) => {
  if (event.keyCode === 40) {
    document.getElementById(`psec${currDiv}`).innerHTML = ``;
    console.log(document.querySelectorAll(".playersec h3")[currDiv].innerText)
    document.querySelectorAll(".playersec h3")[currDiv-1].innerText = ``;
    currDiv += 1;
    console.log(currDiv)
    document.getElementById(`psec${currDiv}`).innerHTML = `
      <img src="../assets/alien.png" alt="alien" />
    `;
    document.querySelectorAll(".playersec h3")[currDiv-1].innerText =
      correctAnswer;
  } else if (event.keyCode === 38) {
    document.getElementById(`psec${currDiv}`).innerHTML = ``;
    document.querySelectorAll(".playersec h3")[currDiv-1].innerText = ``;
    currDiv -= 1;
    console.log(currDiv)

    document.getElementById(`psec${currDiv}`).innerHTML = `
        <img src="../assets/alien.png" alt="alien" />
    `;
    document.querySelectorAll(".playersec h3")[currDiv-1].innerText =
      correctAnswer;
    console.log("arrow up pressed");
  }
  else if(event.keyCode==32){
    console.log(currDiv)
    console.log(correctColumn)

    showFire()
    setTimeout(function(){
      if(currDiv===(correctColumn+1)){
        alert("you won")
      }else if(currDiv!==(correctColumn+1)){
        alert("You lost")
      }

    }, 100); 
    

  }
};

main();
