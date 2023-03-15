
// let botPosition;
// let BOT = [];
// let botCheck = 2;
// let cell;
// let shipPos;
// let currentDirection = "right";

// for (let i = 1; i < 241; i++) {
//     botPosition = document.getElementById(`${i}`)
//     if (botPosition) {
//         let bot = botPosition.getAttribute("bot")

//         if (bot === "true") {
//             let playerImage = document.createElement("img")
//             playerImage.src = "assets/images/enemies.png"
//             playerImage.style.width = "100%"

//             botPosition.appendChild(playerImage)
//         }
//     }
// }

// function moveBot() {
//     for (let i = 1; i < 241; i++) {
//         if (document.getElementById(`${i}`).getAttribute('bot') === 'true' && document.getElementById(`${i}`).getAttribute('dataright') === 'true' && botCheck >= 2) {
//             moveBotBottomRight()
//             currentDirection = "left"
//             break
//         } else if (document.getElementById(`${i}`).getAttribute('bot') === 'true' && document.getElementById(`${i}`).getAttribute('dataleft') === 'true' && botCheck >= 2) {
//             moveBotBottomLeft()
//             currentDirection = "right"
//             break
//         }
//     }

//     switch (currentDirection) {
//         case "right": {
//             moveBotRight()
//             break
//         }
//         case "left": {
//             moveBotLeft()
//             break
//         }
//     }
// }

// function moveBotBottomRight() {
//     BOT = [];
//     for (let i = 1; i < 241; i++) {
//         botPosition = document.getElementById(`${i}`)
//         if (botPosition) {
//             let bot = botPosition.getAttribute("bot")

//             if (bot === "true") {
//                 BOT.push(i + 21)
//                 botPosition.setAttribute("bot", `${false}`)
//             }
//         }
//     }
//     botCheck = 0
//     newGrid()
// }

// function moveBotBottomLeft() {
//     BOT = [];
//     for (let i = 1; i < 241; i++) {
//         botPosition = document.getElementById(`${i}`)
//         if (botPosition) {
//             let bot = botPosition.getAttribute("bot")

//             if (bot === "true") {
//                 BOT.push(i + 19)
//                 botPosition.setAttribute("bot", `${false}`)
//             }
//         }
//     }
//     botCheck = 0
//     newGrid()
// }

// function moveBotRight() {
//     BOT = [];
//     for (let i = 1; i < 241; i++) {
//         botPosition = document.getElementById(`${i}`)

//         if (botPosition) {
//             let bot = botPosition.getAttribute("bot")

//             if (bot === "true") {
//                 BOT.push(i + 1)
//                 botPosition.setAttribute("bot", `${false}`)
//             }
//         }
//     }
//     newGrid()
//     botCheck ++
// }


// function moveBotLeft() {
//     BOT = [];
//     for (let i = 1; i < 241; i++) {
//         botPosition = document.getElementById(`${i}`)

//         if (botPosition) {
//             let bot = botPosition.getAttribute("bot")

//             if (bot === "true") {
//                 BOT.push(i - 1)
//                 botPosition.setAttribute("bot", `${false}`)
//             }
//         }
//     }
//     newGrid()
//     botCheck ++
// }

// function newGrid() {
//     for (let i = 1; i < 241; i++) {
//         cell = document.getElementById(`${i}`);
//         if (BOT.includes(parseInt(cell.getAttribute("id")))) {
//             cell.setAttribute("bot", `${true}`)
//         } else {
//             cell.setAttribute("bot", `${false}`)
//         }

//         if (cell) {
//             let bot = cell.getAttribute("bot")
//             let player = cell.getAttribute("player")

//             let img = cell.querySelector('img')
//             if (img) {
//                 img.remove()
//             }

//             if (bot === "true") {
//                 let playerImage = document.createElement("img")
//                 playerImage.src = "assets/images/enemies.png"
//                 playerImage.style.width = "100%"

//                 cell.appendChild(playerImage)
//             }

//             if (player === "true") {
//                 let playerImage = document.createElement("img")
//                 playerImage.src = "assets/images/ship.png"
//                 playerImage.style.width = "100%"

//                 cell.appendChild(playerImage)
//             }
//         }

//         GRID.appendChild(cell)
//     }
// }

// setInterval(function () {
//     moveBot();
// }, 1000)