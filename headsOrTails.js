#!/usr/bin/env node

const readLine = require("node:readline");
const {stdin, stdout} = require("node:process");
const fs = require("fs");
const path = require("path");
const [,, targetFile] = process.argv;
const rl = readLine.createInterface({
    input: stdin,
    output: stdout
})
if (!targetFile) {
    console.log("Передайте имя файла аргументом");
    process.exit()
}

let currentGames = 0;
let currentWins = 0;
const filePath = path.join(__dirname, targetFile)
try {
    const jsonString = fs.readFileSync(filePath);
    const currentData = JSON.parse(jsonString);
    if (currentData.games) {
        currentGames = currentData.games;
        currentWins = currentData.wins;
    }

  } catch (err) {}


rl.question("Угадайте 1 или 2?\n", (input) => {
    const random1or2 = Math.floor(Math.random() * 2) + 1;
    let isWin = false;
    if (+input === random1or2) {
        console.log("Верно");
        isWin = true;
    } else {
        console.log("Не верно, было загадано " + random1or2);
    }
    const outputObj = {
        games: currentGames + 1,
        wins: isWin ? currentWins + 1 : currentWins
    }
    fs.writeFile(filePath, JSON.stringify(outputObj), () => {})
    rl.close();
})
