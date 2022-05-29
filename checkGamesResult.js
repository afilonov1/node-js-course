#! /usr/bin/env node
const fs = require("fs");

const [,, filePath] = process.argv;
if (!filePath) {
    console.log("Передайте имя файла аргументом");
    process.exit()
}
try {
    const jsonString = fs.readFileSync(filePath);
    const fileData = JSON.parse(jsonString);
    const gamesCount = fileData?.games || 0;
    const winsCount = fileData?.wins || 0;
    const winPercentage = gamesCount === 0 ? 0 : winsCount / gamesCount * 100
    console.log("Общее колличество партий =", gamesCount);
    console.log("Колличество выигранных партий =", winsCount);
    console.log("Колличество проигранных партий =", gamesCount - winsCount);
    console.log("Процент побед =", winPercentage, "%");
} catch {
    console.log("Ошибка чтения файла");
}