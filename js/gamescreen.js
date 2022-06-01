let currDiv = 3;
let correctColumn;
let correctAnswer;
let ninjas;
let speed
let level = 1
let time
let isMuted


//loads the audio
const loadAudio = () => {
  if (localStorage.hasOwnProperty("audio")) {
      let audio = JSON.parse(localStorage.getItem("audio"))
      document.querySelector("audio").currentTime = audio.audioTime    
      document.querySelector("audio").play  
      if (audio.isMuted) {
          isMuted = true
          document.querySelector("audio").muted = true 
          document.querySelector(".img-audio").src = "assets/mute.png"
      }  
      else {
          isMuted = false
          document.querySelector("audio").muted = false 
          document.querySelector(".img-audio").src = "assets/volume.png"
      }
  }
}

//updates the audio
const updateAudio = () => {
  let audio = {
      audioTime: document.querySelector("audio").currentTime,
      isMuted: isMuted
  }
  localStorage.setItem("audio", JSON.stringify(audio))
}

//functions on load event of the page
loadAudio()

document.querySelector(".img-audio").addEventListener("click", () => {
  if (isMuted === false) {
      document.querySelector(".img-audio").src = "assets/mute.png"
      isMuted = true
      document.querySelector("audio").muted = true        
  }
  else {
      document.querySelector(".img-audio").src = "assets/volume.png"
      isMuted = false
      document.querySelector("audio").muted = false
  }
  updateAudio()
})

//click event of the back icon
document.querySelector(".img-back").addEventListener("click", () => {
  updateAudio()
  alert("Quit Game ?")
  localStorage.removeItem("name")
  window.location.replace("index.html")
})


const resetNinja = () => {
  generateSpeed()
  let ninjas = document.querySelectorAll(".enemylimit")
  // let imageDiv = document.querySelectorAll(".ufo")
      ninjas.forEach((ninja, index) => {
          ninja.style.marginLeft = `2%`
      })
}

const generateSpeed = () => {
  speed = new Array(5);
  for (let i = 0; i < 5; i++) {
    speed[i] = Math.floor(Math.random() * 10);
  }
}


const main = () => {
  time = 60
  document.getElementById(
    `psec${currDiv}`
  ).innerHTML = `<img src="assets/alien.png" alt="alien" />`;
  ninjas = document.querySelectorAll(".enemylimit");
  generateSpeed()
  calculateTime = setInterval(() => {
    time -= 1
    ninjas.forEach((ninja, i) => {
      speed[i] += Math.random() * 10;
      if (speed[currDiv] > 83) {
        // alert("Game Over!!!");
        gameOver()
      }
      ninja.style.marginLeft = `${speed[i]}%`;
    });

    if (time <= 0) {
      clearInterval(calculateTime)
      gameOver()
    }
    else {
      document.querySelector(".display h2").innerText = `Timer: ${time}`
    }

  }, 1000);
  document.querySelector(".levels").innerText = `Level: ${level}`
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
    h3.innerText = `${firstVal[index]} * ${secondVal[index]} = ?`;
    console.log(h3)
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
      <img src="assets/alien.png" alt="alien" />
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
        <img src="assets/alien.png" alt="alien" />
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
        level += 1
        if(level > 5) {
          gameOver()
        }
        generateQues()
        resetNinja()
      } else if (currDiv !== correctColumn + 1) {
        gameOver()
      }

      document.querySelector(".levels").innerText = `Level: ${level}`

    }, 100);
  }
};



//finishes the game
const gameOver = () => {
  updateAudio()
  const gameProfile = {
      level: level
  }
  localStorage.setItem("gameProfile", JSON.stringify(gameProfile))
  saveHighScore()
  window.location.replace("gameProfile.html")
}

const highScores = JSON.parse(localStorage.getItem("highScores")) || []
const saveHighScore = () => {
  updateAudio()
  let userName = localStorage.getItem("name")
  const score = {
    level: level,
    userName: userName
  }
  
  highScores.push(score)
  highScores.sort((a,b) => {
    return b.level - a.level
  })
  highScores.splice(5)
  localStorage.setItem("highScores", JSON.stringify(highScores))
}

main();
