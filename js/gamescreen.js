let currDiv = 3;
const main = () => {
  document.getElementById(
    `psec${currDiv}`
  ).innerHTML = `<img src="../assets/alien.png" alt="alien" />`;
  let ninjas = document.querySelectorAll(".enemylimit");
  let speed = new Array(5);
  for (let i = 0; i < 5; i++) {
    speed[i] = Math.floor(Math.random() * 10);
  }
  setInterval(() => {
    ninjas.forEach((ninja, i) => {
      speed[i] += Math.random() * 10;
      if(speed[currDiv]>90){
        alert("Game Over!!!")
        return
      }
      ninja.style.marginLeft = `${speed[i]}%`;
    });
  }, 1000);
  window.addEventListener("keydown", keyPressed);
};

const keyPressed = (event) => {
  if (event.keyCode === 40) {
    document.getElementById(`psec${currDiv}`).innerHTML = ``;
    currDiv += 1;
    document.getElementById(`psec${currDiv}`).innerHTML = `
      <img src="../assets/alien.png" alt="alien" />
`;
  } else if (event.keyCode === 38) {
    document.getElementById(`psec${currDiv}`).innerHTML = ``;
    currDiv -= 1;
    document.getElementById(`psec${currDiv}`).innerHTML = `
        <img src="../assets/alien.png" alt="alien" />
    `;
    console.log("arrow up pressed");
  }
};

main();
