// declaring element
const username = document.getElementById("username")
const registerForm = document.getElementById("registerForm")
const logoutForm = document.getElementById("logoutForm")
const startSection = document.getElementById("start")
const box1 = document.getElementById("box1")
const box2 = document.getElementById("box2")
const box3 = document.getElementById("box3")
const box4 = document.getElementById("box4")
const box5 = document.getElementById("box5")
const rewardImage = document.getElementById("imgReward")

const player = new Player()

// L E V E L 1 //
let default_random = ['😍', '🤣', '😱']
box1.textContent = default_random[0]
box2.textContent = default_random[1]
box3.textContent = default_random[2]

function dike() {
  let gacha = []
  for (let i = 0; i < default_random.length; i++) {
    const roll = default_random[~~(Math.random() * default_random.length)]
    gacha.push(roll)
  }
  return gacha
}

function mulai() {
  //selama
  const rolling = setInterval(function () {
    const result = dike()
    console.log('acak gambar...', result)
    box1.textContent = result[0]
    box2.textContent = result[1]
    box3.textContent = result[2]
  }, 100)

}

function mulai() {
  //selama
  const rolling = setInterval(function () {
    const result = dike()
    console.log('acak gambar...', result)
    box1.textContent = result[0]
    box2.textContent = result[1]
    box3.textContent = result[2]
  }, 100)

  //ketika
  setTimeout(function () {
    clearInterval(rolling)
    menang()
  }, 3000)
}

function menang() {
  if (box1.textContent == box2.textContent && box1.textContent == box3.textContent) {
    console.log('win')
    location.href = "#reward"
    reward()
  } else {
    location.href = "lose1.html"
    console.log('lose')
  }
}

// L E V E L 2 //
let default_acak = ['😍', '🤣', '😱', '😒']
box1.textContent = default_acak[0]
box2.textContent = default_acak[1]
box3.textContent = default_acak[2]
box4.textContent = default_acak[3]

function dice() {
  let gacha = []
  for (let i = 0; i < default_setting.length; i++) {
    const roll = default_setting[~~(Math.random() * default_setting.length)]
    gacha.push(roll)
  }
  return gacha
}

function gas() {
  //selama
  const rolling = setInterval(function () {
    const result = dise()
    console.log('acak gambar...', result)
    box1.textContent = result[0]
    box2.textContent = result[1]
    box3.textContent = result[2]
    box4.textContent = result[3]
  }, 100)

}

function gas() {
  //selama
  const rolling = setInterval(function () {
    const result = dise()
    console.log('acak gambar...', result)
    box1.textContent = result[0]
    box2.textContent = result[1]
    box3.textContent = result[2]
    box4.textContent = result[3]
  }, 100)

  //ketika
  setTimeout(function () {
    clearInterval(rolling)
    berhasil()
  }, 3000)

  function berhasil() {
    if (box1.textContent == box2.textContent && box1.textContent == box3.textContent && box1.textContent == box4.textContent) {
      console.log('win')
      location.href = "reward.html"
      reward()
    } else {
      location.href = "lose2.html"
      console.log('lose')
    }
  }
}

// L E V E L 3 //
let default_setting = ['😍', '🤣', '😱', '😒', '😂']
box1.textContent = default_setting[0]
box2.textContent = default_setting[1]
box3.textContent = default_setting[2]
box4.textContent = default_setting[3]
box5.textContent = default_setting[4]

function dise() {
  let gacha = []
  for (let i = 0; i < default_acak.length; i++) {
    const roll = default_acak[~~(Math.random() * default_acak.length)]
    gacha.push(roll)
  }
  return gacha
}

function start() {
  //selama
  const rolling = setInterval(function () {
    const result = dice()
    console.log('acak gambar...', result)
    box1.textContent = result[0]
    box2.textContent = result[1]
    box3.textContent = result[2]
    box4.textContent = result[3]
    box5.textContent = result[4]
  }, 100)
}

function start() {
  //selama
  const rolling = setInterval(function () {
    const result = dice()
    console.log('acak gambar...', result)
    box1.textContent = result[0]
    box2.textContent = result[1]
    box3.textContent = result[2]
    box4.textContent = result[3]
    box5.textContent = result[4]
  }, 100)

  //ketika
  setTimeout(function () {
    clearInterval(rolling)
    winner()
  }, 3000)
}


function winner() {
  if (box1.textContent == box2.textContent && box1.textContent == box3.textContent &&
    box1.textContent == box4.textContent && box1.textContent == box5.textContent) {
    console.log('win')
    location.href = "#reward"
    reward()
  } else {
    location.href = "lose3.html"
    console.log('lose')
  }
}


function reward() {
  fetch('https://zoo-animal-api.herokuapp.com/animals/rand').then(x => x.json()).then(result => {

    //set nama hadiah reward
    let text = document.createElement('h1')
    text.textContent = result.name

    //set gambar hadiah
    let img = new Image(200, 200)
    img.src = result.image_link

    //set element
    rewardImage.appendChild(img)
    rewardImage.appendChild(text)
  })
}

onload = function () {
  const token = sessionStorage.getItem('token')

  // if (token && token != null) {
  //   registerForm.style.display = "none"
  //   logoutForm.style.display = "block"
  // } else {
  //   registerForm.style.display = "block"
  //   logoutForm.style.display = "none"
  // }
}

function register() {
  player.username = username.value
  player.register
}

function logout() {
  player.logout
}