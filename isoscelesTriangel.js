triangel = ""
let x = 0
let y = 0
for (let i = 1; i < 11; i++) {
    for (let j = 1; j <= 10 - i; j++) {
        triangel = triangel.concat(" ")
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        triangel = triangel.concat("*")
    }
    triangel = triangel.concat("\r\n")
}
console.log(triangel)