let currDiv = 3;
const main = () => {
  document.getElementById(`enemy${currDiv}`).innerHTML = `
  <div class="enemylimit">
  <div class="visual" id="enemy1">
    <img src="../assets/ninja.png" alt="ninja" />
  </div>
  <div class="player">
    <img src="../assets/alien.png" alt="alien" />
  </div>
</div>
  `;
  let ninjas = document.querySelectorAll(".visual");
  let speed = new Array(5);

  for (let i = 0; i < 5; i++) {
    speed[i] = Math.floor(Math.random() * 10);
  }

  setInterval(() => {
    ninjas.forEach((ninja, i) => {
      speed[i] += Math.random() * 10;
      ninja.style.marginLeft = `${speed[i]}%`;
    });
  }, 1000);
  window.addEventListener("keydown", keyPressed);
};

const keyPressed = (event) => {
  if (event.keyCode === 40) {
    document.getElementById(`enemy${currDiv}`).innerHTML = `
    <div class="enemylimit">
      <div class="visual">
        <img src="../assets/ninja.png" alt="ninja" />
      </div>
    </div>
    `;
    currDiv += 1;
    document.getElementById(`enemy${currDiv}`).innerHTML = `
    <div class="enemylimit">
        <div class="visual">
          <img src="../assets/ninja.png" alt="ninja" />
        </div>
        <div class="player">
          <img src="../assets/alien.png" alt="alien" />
        </div>
    </div>
    `;
  } else if (event.keyCode === 38) {
    document.getElementById(`enemy${currDiv}`).innerHTML = `
    <div class="enemylimit">
      <div class="visual">
        <img src="../assets/ninja.png" alt="ninja" />
      </div>
    </div>
    `;

    currDiv -= 1;
    document.getElementById(`enemy${currDiv}`).innerHTML = `
    <div class="enemylimit">
        <div class="visual">
          <img src="../assets/ninja.png" alt="ninja" />
        </div>
        <div class="player">
          <img src="../assets/alien.png" alt="alien" />
        </div>
    </div>
    `;
    console.log("arrow up pressed");
  }
};

main();
