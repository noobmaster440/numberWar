//variables
let isMuted
let result
let playerName

//functions
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

//shows the player game score
const showPlayerScore = () => {
    playerName = localStorage.getItem("name")
    const jsonData = JSON.parse(localStorage.getItem("gameProfile"))
    const level = jsonData.level
    if (level === 5 || level===6){
        result = "You Won !!"
    }
    else {
        result = "You Lost !!"
    }
    document.querySelector("#result").innerText = result
    document.querySelector("#player-name").innerText = playerName
    document.querySelector("#levels").innerText = level
}

//functions on load event of the page
loadAudio()
showPlayerScore()

//click listeners
//click event of the audio icon
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
document.querySelector(".img-home").addEventListener("click", () => {
    updateAudio()
    window.location.replace("index.html")
    
})

//click event when play again button is pressed
document.querySelector("#btn-start").addEventListener("click", () => {
        localStorage.setItem("name", playerName)
        window.location.replace("gamescreen.html")
        updateAudio()
})

//click event when highscores button is pressed
document.querySelector("#btn-load").addEventListener("click", () => {
    window.location.replace("highscores.html")
    updateAudio()
})

