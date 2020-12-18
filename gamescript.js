window.addEventListener("load", mulai)

let daftarKata = [
  "looping","background", "flexbox","asterix","array","palindrome","reverse", "split", "container", "flagging", "test", "display", "document", "query", "origin", "responsive", "heroes","github", "frontend", "backend", "development","rocket", "design", "framework", "error","break", "authorization", "modules", "website", "class","selector", "element", "statement", "argument", "session", "storage", "metadata", "object", "template", "string", "innerHTML","index","require", "hypertext","cloud","addEventListener", "object", "parameter","checkout","getElementById","commit", "pair","getElementsByTagName","getElementsByClassName","removeEventListener"
]

const skorBerjalan = document.getElementById("skor")
let tampilanKata = document.getElementById("tampilanKata")
let tampilanCountdown = document.getElementById("time")
let inputKata = document.getElementById("inputanKata")
let gameAlert = document.getElementById("alerts")
let hitung = document.getElementById("hitung")
let detik = 3
let waktu = detik
let skor = 0
let running = true

function mulai() {
  hitung.innerHTML = detik
  tampilkan(daftarKata)
  inputKata.addEventListener("input", restart)
  setInterval(runningTime, 1000)
  setInterval(gameStatus, 100)
}

function pasanganKata() {
  if (inputKata.value === tampilanKata.innerHTML) {
    gameAlert.innerHTML = "Correct!"
    return true
  } else {
    gameAlert.innerHTML = ""
    return false
  }
}

function restart() {
  if (pasanganKata()) {
    running = true
    waktu = detik + 1
    tampilkan(daftarKata)
    inputKata.value = ""
    skor++
  }
  if (skor === -1) {
    skorBerjalan.innerHTML = 0
  } else {
    skorBerjalan.innerHTML = skor
  }
}

function tampilkan(daftarKata) {
  let acakKata = Math.floor(Math.random() * daftarKata.length)  
  tampilanKata.innerHTML = daftarKata[acakKata]
}

function runningTime() {
  if (waktu > 0) {
    waktu--
  } else if (waktu === 0) { 
    running = false
  }  
  tampilanCountdown.innerHTML = waktu
}

function gameStatus() {
  if (!running && waktu === 0) {
    gameAlert.innerHTML = "Game Over!"
    skor = -1
  }
}