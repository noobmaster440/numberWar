//variables
let isMuted
let playerName
let startBtn

//loads the audio
const loadAudio = () => {
    if (localStorage.hasOwnProperty("audio")) {
        let audio = JSON.parse(localStorage.getItem("audio"))
        document.querySelector("audio").currentTime = audio.audioTime      
        if (audio.isMuted) {
            isMuted = true
            document.querySelector("audio").muted = true 
            document.querySelector(".img-audio").src = "../assets/mute.png"
        }  
        else {
            isMuted = false
            document.querySelector("audio").muted = false 
            document.querySelector(".img-audio").src = "../assets/volume.png"
        }
    }
    else {
        isMuted = false
        document.querySelector("audio").muted = false 
        document.querySelector(".img-audio").src = "../assets/volume.png"
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
  
//click listeners
//click event of the audio icon
document.querySelector(".img-audio").addEventListener("click", () => {
    if (isMuted === false) {
        document.querySelector(".img-audio").src = "../assets/mute.png"
        isMuted = true
        document.querySelector("audio").muted = true        
    }
    else {
        document.querySelector(".img-audio").src = "../assets/volume.png"
        isMuted = false
        document.querySelector("audio").muted = false
    }
    updateAudio()
})


// document.querySelector("#name").addEventListener("keyup", () => {
//     playerName = document.querySelector("#name").value
//     startBtn = document.getElementById("btn-start")
//     if (playerName.length != 0) {
//         startBtn.removeAttribute("class")
//         startBtn.setAttribute("href", "../html/gamescreen.html")
//     }  
//     else {
//         startBtn.setAttribute("class", "disabled")
//         startBtn.removeAttribute("href")
//     }
// })


//click event when start button is pressed
document.querySelector("#btn-start").addEventListener("click", () => {
    playerName = document.querySelector("#name").value
    if (playerName.length != 0) {
        localStorage.setItem("name", playerName)
        window.location.replace("/html/gamescreen.html")
        updateAudio()
    }
    else {
        alert("Please enter name")
    }
    
})

//click event when rules button is pressed
document.querySelector("#btn-rules").addEventListener("click", () => {
    window.location.replace("/html/rules.html")
    updateAudio()
})

//click event when highscores button is pressed
document.querySelector("#btn-load").addEventListener("click", () => {
    window.location.replace("/html/highscores.html")
    updateAudio()
})

// localStorage.clear()